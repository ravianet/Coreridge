import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../lib/prisma";
import {
  internationalPhoneError,
  isValidInternationalPhone,
} from "../../../lib/phone-validation";
import { sendWebsiteEmail } from "../../../lib/website-email";

export const runtime = "nodejs";

const inquirySchema = z.object({
  formType: z.enum(["contact", "get-started", "consultation"]).default("contact"),
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(254),
  company: z.string().trim().max(200).optional().default(""),
  serviceType: z.string().trim().min(1, "Please select a service type").max(200),
  phone: z.string().trim().min(1, "Phone number is required").max(50).refine(
    isValidInternationalPhone,
    internationalPhoneError,
  ),
  projectBudget: z.string().trim().max(100).optional().default(""),
  timeline: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().max(10_000).optional().default(""),
});

const careerSchema = z.object({
  fullName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(1, "Phone number is required").max(50).refine(
    isValidInternationalPhone,
    internationalPhoneError,
  ),
  position: z.string().trim().min(1).max(200),
  experience: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().max(10_000).optional().default(""),
});

const careerPositions: Record<string, string> = {
  engineering: "Engineering & Development",
  infrastructure: "Infrastructure & Cloud",
  security: "Cybersecurity",
  operations: "Project Management & Operations",
  "client-services": "Client Services & Consulting",
  other: "Other - General Application",
};

const maxResumeBytes = 4 * 1024 * 1024;
type InquiryData = Omit<z.infer<typeof inquirySchema>, "formType">;
const allowedResumeTypes = new Map([
  [".pdf", ["application/pdf"]],
  [".doc", ["application/msword", "application/octet-stream"]],
  [
    ".docx",
    [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/octet-stream",
    ],
  ],
]);

function isFile(value: FormDataEntryValue | null): value is File {
  return typeof value === "object" && value !== null && "arrayBuffer" in value;
}

function hasExpectedFileSignature(extension: string, buffer: Buffer) {
  if (extension === ".pdf") return buffer.subarray(0, 5).toString() === "%PDF-";
  if (extension === ".doc") {
    return buffer.subarray(0, 8).toString("hex") === "d0cf11e0a1b11ae1";
  }
  return extension === ".docx" && buffer.subarray(0, 4).toString() === "PK\u0003\u0004";
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(request: Request) {
  let savedInquiryId: string | null = null;

  try {
    const contentType = request.headers.get("content-type") ?? "";
    let emailData: {
      formName: string;
      subject: string;
      fields: Array<{ label: string; value: string }>;
      attachment?: { filename: string; content: string };
    };
    let inquiryData: InquiryData;

    if (contentType.includes("multipart/form-data")) {
      const contentLength = Number(request.headers.get("content-length") ?? 0);
      if (contentLength > maxResumeBytes + 100_000) {
        return errorResponse("Resume must be 4 MB or smaller.", 413);
      }

      const formData = await request.formData();
      const parsed = careerSchema.safeParse({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        position: formData.get("position"),
        experience: formData.get("experience"),
        message: formData.get("message"),
      });

      if (!parsed.success) {
        return NextResponse.json(
          { success: false, message: "Please check the application details." },
          { status: 400 },
        );
      }

      const resume = formData.get("resume");
      if (!isFile(resume) || resume.size === 0) {
        return errorResponse("Please attach your resume or CV.", 400);
      }
      if (resume.size > maxResumeBytes) {
        return errorResponse("Resume must be 4 MB or smaller.", 413);
      }

      const extension = resume.name.toLowerCase().match(/\.(pdf|docx?)$/)?.[0];
      const allowedTypes = extension ? allowedResumeTypes.get(extension) : undefined;
      if (!extension || !allowedTypes?.includes(resume.type)) {
        return errorResponse("Resume must be a PDF, DOC, or DOCX file.", 400);
      }

      const resumeBuffer = Buffer.from(await resume.arrayBuffer());
      if (!hasExpectedFileSignature(extension, resumeBuffer)) {
        return errorResponse(
          "The resume file does not appear to match its file type. Please upload a valid PDF, DOC, or DOCX file.",
          400,
        );
      }

      const [firstName, ...lastNameParts] = parsed.data.fullName.split(/\s+/);
      const lastName = lastNameParts.join(" ") || "Not provided";
      const position =
        careerPositions[parsed.data.position] ?? parsed.data.position;
      const careerMessage = [
        `Phone: ${parsed.data.phone}`,
        `Position: ${position}`,
        `Experience: ${parsed.data.experience || "Not provided"}`,
        "",
        parsed.data.message || "",
      ]
        .filter(Boolean)
        .join("\n");

      inquiryData = {
        firstName,
        lastName,
        email: parsed.data.email,
        company: "",
        serviceType: `Careers - ${position}`,
        phone: parsed.data.phone,
        projectBudget: "",
        timeline: parsed.data.experience,
        message: careerMessage,
      };
      emailData = {
        formName: "Careers application",
        subject: `Careers application: ${position}`,
        fields: [
          { label: "Applicant", value: parsed.data.fullName },
          { label: "Email", value: parsed.data.email },
          { label: "Phone", value: parsed.data.phone },
          { label: "Position", value: position },
          { label: "Experience", value: parsed.data.experience },
          { label: "Additional information", value: parsed.data.message },
          { label: "Resume file", value: resume.name },
        ],
        attachment: {
          filename: resume.name.replace(/[^\w.-]/g, "_"),
          content: resumeBuffer.toString("base64"),
        },
      };
    } else if (contentType.includes("application/json")) {
      const body: unknown = await request.json();
      const parsed = inquirySchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Please check the required form fields and try again.",
            errors: parsed.error.issues.map(({ path, message }) => ({
              field: path.join("."),
              message,
            })),
          },
          { status: 400 },
        );
      }

      inquiryData = {
        ...parsed.data,
        message: [
          parsed.data.phone && `Phone: ${parsed.data.phone}`,
          parsed.data.projectBudget && `Budget: ${parsed.data.projectBudget}`,
          parsed.data.timeline && `Timeline: ${parsed.data.timeline}`,
          "",
          parsed.data.message,
        ]
          .filter(Boolean)
          .join("\n"),
      };
      const contactName = `${parsed.data.firstName} ${parsed.data.lastName}`;
      const formNames = {
        contact: "Contact form",
        "get-started": "Get started project request",
        consultation: "Consultation request",
      } as const;
      const formName = formNames[parsed.data.formType];
      emailData = {
        formName,
        subject:
          parsed.data.formType === "contact"
            ? `Contact form: ${contactName}`
            : parsed.data.formType === "get-started"
              ? `Project request: ${contactName} - ${parsed.data.serviceType}`
              : `Consultation request: ${contactName}`,
        fields: [
          {
            label: "Name",
            value: contactName,
          },
          { label: "Email", value: parsed.data.email },
          { label: "Company", value: parsed.data.company },
          { label: "Phone", value: parsed.data.phone },
          { label: "Service interest", value: parsed.data.serviceType },
          { label: "Project budget", value: parsed.data.projectBudget },
          { label: "Timeline", value: parsed.data.timeline },
          { label: "Message", value: parsed.data.message },
        ],
      };
    } else {
      return errorResponse("Unsupported form submission.", 415);
    }

    const [inquiry] = await prisma.$transaction([
      prisma.inquiry.create({
        data: {
          firstName: inquiryData.firstName,
          lastName: inquiryData.lastName,
          email: inquiryData.email,
          company: inquiryData.company,
          serviceType: inquiryData.serviceType,
          message: inquiryData.message,
        },
      }),
      prisma.auditLog.create({
        data: {
          action: "INQUIRY_SUBMITTED",
          details: `New ${emailData.formName.toLowerCase()} from ${inquiryData.firstName} ${inquiryData.lastName} for ${inquiryData.serviceType}`,
        },
      }),
    ]);
    savedInquiryId = inquiry.id;

    await sendWebsiteEmail(emailData);

    return NextResponse.json(
      {
        success: true,
        message: "Your submission was sent successfully.",
        inquiryId: inquiry.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error processing website form submission:", error);

    if (
      error instanceof Error &&
      error.message.startsWith("Email delivery is not configured")
    ) {
      return errorResponse(
        savedInquiryId
          ? `Your submission was saved (reference ${savedInquiryId}), but email delivery is not configured yet. Please contact info@coreridgetech.com directly.`
          : "Email delivery is not configured. Please contact info@coreridgetech.com directly.",
        503,
      );
    }

    if (error instanceof Error && error.name === "TimeoutError") {
      return errorResponse(
        savedInquiryId
          ? `Your submission was saved (reference ${savedInquiryId}), but email delivery timed out. Please contact info@coreridgetech.com before submitting again.`
          : "Email delivery timed out. Please try again or contact info@coreridgetech.com.",
        504,
      );
    }

    if (savedInquiryId) {
      return errorResponse(
        `Your submission was saved (reference ${savedInquiryId}), but we couldn't forward it to our inbox. Please contact info@coreridgetech.com before submitting again.`,
        502,
      );
    }

    return errorResponse(
      "We couldn't process your submission. Please try again or contact info@coreridgetech.com.",
      502,
    );
  }
}