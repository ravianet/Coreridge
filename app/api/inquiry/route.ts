import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../lib/prisma";

// Zod validation schema for inquiry submissions
const inquirySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate incoming data
    const validatedData = inquirySchema.parse(body);
    
    // Create inquiry in database
    const inquiry = await prisma.inquiry.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        company: validatedData.company,
        serviceType: validatedData.serviceType,
        message: validatedData.message,
      },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        action: "INQUIRY_SUBMITTED",
        details: `New inquiry from ${validatedData.firstName} ${validatedData.lastName} for ${validatedData.serviceType}`,
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: "Inquiry submitted successfully", 
      inquiryId: inquiry.id 
    }, { status: 201 });

  } catch (error) {
    console.error("Error processing inquiry:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: (error as any).errors 
      }, { status: 400 });
    }

    return NextResponse.json({ 
      success: false, 
      message: "Internal server error" 
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}