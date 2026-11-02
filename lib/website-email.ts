import nodemailer from "nodemailer";

type WebsiteEmail = {
  formName: string;
  subject: string;
  fields: Array<{ label: string; value: string }>;
  attachment?: {
    filename: string;
    content: string;
  };
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function sendWebsiteEmail({
  formName,
  subject,
  fields,
  attachment,
}: WebsiteEmail) {
  const host = process.env.ZOHO_SMTP_HOST;
  const port = Number(process.env.ZOHO_SMTP_PORT ?? "465");
  const user = process.env.ZOHO_SMTP_USER;
  const password = process.env.ZOHO_SMTP_PASSWORD;

  if (
    !host ||
    !user ||
    !password ||
    (port !== 465 && port !== 587)
  ) {
    throw new Error(
      "Email delivery is not configured. Set ZOHO_SMTP_HOST, ZOHO_SMTP_PORT, ZOHO_SMTP_USER, and ZOHO_SMTP_PASSWORD.",
    );
  }

  const text = [
    `CORERIDGE TECHNOLOGIES | ${formName.toUpperCase()}`,
    "Website submission",
    "",
    ...fields.flatMap(({ label, value }) => [
      label.toUpperCase(),
      value || "Not provided",
      "",
    ]),
    ...(attachment ? ["Resume: attached to this email"] : []),
    "Sent from the Coreridge Technologies website.",
  ].join("\n");
  const rows = fields
    .map(({ label, value }) => {
      const displayedValue = value || "Not provided";
      const valueContent =
        label === "Email" && value
          ? `<a href="mailto:${escapeHtml(value)}" style="color:#174ea6;text-decoration:underline">${escapeHtml(value)}</a>`
          : escapeHtml(displayedValue);

      return `<tr><td style="padding:14px 16px;border-bottom:1px solid #e8edf4;color:#64748b;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;vertical-align:top;width:34%">${escapeHtml(label)}</td><td style="padding:14px 16px;border-bottom:1px solid #e8edf4;color:#14213d;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap;overflow-wrap:anywhere">${valueContent}</td></tr>`;
    })
    .join("");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass: password },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  await transporter.sendMail({
    from: { name: "Coreridge Technologies Website", address: user },
    to: "info@coreridgetech.com",
    subject: subject.replace(/[\r\n]+/g, " ").slice(0, 200),
    text,
    html: `<!doctype html><html lang="en"><body style="margin:0;padding:24px 12px;background-color:#f1f5f9"><div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${escapeHtml(formName)} received by Coreridge Technologies.</div><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:680px;margin:0 auto;background-color:#ffffff;border:1px solid #e2e8f0;border-radius:12px;border-collapse:separate;overflow:hidden"><tr><td style="padding:24px 28px;background-color:#06143d;border-bottom:4px solid #c56735"><p style="margin:0 0 8px;color:#f6b48c;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase">Coreridge Technologies</p><h1 style="margin:0;color:#ffffff;font-family:Arial,sans-serif;font-size:22px;line-height:1.35">${escapeHtml(formName)}</h1><p style="margin:8px 0 0;color:#dbe5f4;font-family:Arial,sans-serif;font-size:13px;line-height:1.5">New submission from your website</p></td></tr><tr><td style="padding:24px 28px 10px"><p style="margin:0 0 16px;color:#334155;font-family:Arial,sans-serif;font-size:14px;line-height:1.6">Submission details are below. Use the submitter's email address to follow up.</p><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #e8edf4;border-collapse:collapse">${rows}</table>${attachment ? `<div style="margin-top:16px;padding:13px 16px;border:1px solid #fed7aa;border-radius:8px;background-color:#fff7ed;color:#9a3412;font-family:Arial,sans-serif;font-size:13px;line-height:1.5"><strong>Resume attached</strong><br>Applicant resume is included with this email.</div>` : ""}</td></tr><tr><td style="padding:18px 28px 22px"><p style="margin:0;color:#64748b;font-family:Arial,sans-serif;font-size:12px;line-height:1.6">This message was sent automatically from the Coreridge Technologies website.<br><a href="mailto:info@coreridgetech.com" style="color:#174ea6;text-decoration:underline">info@coreridgetech.com</a></p></td></tr></table></body></html>`,
    ...(attachment
      ? {
          attachments: [
            {
              filename: attachment.filename,
              content: attachment.content,
              encoding: "base64" as const,
            },
          ],
        }
      : {}),
  });
}
