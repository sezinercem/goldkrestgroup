import { Resend } from "resend";
import { validateContact } from "@/lib/contact";
import { site } from "@/lib/site";

// Resend's shared test sender works without verifying a domain. Once
// goldkrest.group is verified in Resend, set RESEND_FROM_EMAIL
// (e.g. "Goldkrest Group <website@goldkrest.group>") to use your own address.
const DEFAULT_FROM = "Goldkrest Group Website <onboarding@resend.dev>";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v : "");

  // Honeypot filled in: pretend success so bots don't retry.
  if (str(body.company)) return Response.json({ ok: true });

  const input = { name: str(body.name), email: str(body.email), message: str(body.message) };
  const errors = validateContact(input);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Please fix the highlighted fields.", errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return Response.json(
      { error: "Our contact form is temporarily unavailable." },
      { status: 500 },
    );
  }

  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM,
    to: site.email,
    replyTo: email,
    subject: `New website enquiry from ${name.replace(/[\r\n]+/g, " ")}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Sorry, your message couldn't be sent." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
