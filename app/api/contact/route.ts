import { validateContact } from "@/lib/contact";

const CONTACT_ENDPOINT = "https://formslist.com/f/DU43J5oY6jiO";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid body");
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

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: AbortSignal.timeout(12000),
      body: JSON.stringify({
        name: input.name.trim(),
        email: input.email.trim(),
        message: input.message.trim(),
        _subject: "New website enquiry — Goldkrest Group",
      }),
    });
    const result = await response.json() as { ok?: boolean };
    if (!response.ok || result.ok !== true) throw new Error("Submission rejected");
  } catch {
    console.error("Contact form submission failed.");
    return Response.json({ error: "Sorry, your message couldn't be sent. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
