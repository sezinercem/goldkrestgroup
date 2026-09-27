"use client";

import { useState, type FormEvent } from "react";
import { LIMITS, validateContact, type ContactErrors, type ContactInput } from "@/lib/contact";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const empty: ContactInput = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const update = (field: keyof ContactInput) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((errs) => ({ ...errs, [field]: undefined }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    setServerError("");
    const company = new FormData(e.currentTarget).get("company");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; errors?: ContactErrors };
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setValues(empty);
      setStatus("success");
    } catch {
      setServerError("We couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="mt-6 rounded-2xl bg-gold-light p-6 text-forest">
        <p className="text-lg font-semibold">Thank you — your message has been sent.</p>
        <p className="mt-2 text-forest/80">We&apos;ll be in touch as soon as possible.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof ContactInput) =>
    `mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-forest outline-none transition-colors placeholder:text-neutral-400 focus:ring-3 ${
      errors[field] ? "border-red-600 focus:ring-red-200" : "border-neutral-300 focus:border-gold focus:ring-gold/30"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
      {/* Honeypot: hidden from people, often filled by bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-semibold text-forest">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={LIMITS.name}
          value={values.name}
          onChange={update("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass("name")}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-forest">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={LIMITS.email}
          value={values.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass("email")}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-sm text-red-700">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-forest">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          maxLength={LIMITS.message}
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us about your project…"
          className={inputClass("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && serverError && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {serverError} You can also email us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-forest px-7 py-3.5 font-semibold text-white transition-colors hover:bg-forest-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
