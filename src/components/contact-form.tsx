"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

type Status = "idle" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const first = String(data.get("firstName") || "").trim();
    const last = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const comments = String(data.get("comments") || "").trim();

    if (!first || !last || !email || !comments) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(
      `Website message from ${first} ${last}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${first} ${last}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        comments,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">First name *</span>
          <input
            name="firstName"
            required
            autoComplete="given-name"
            className="mt-1.5 w-full rounded-md border border-ink/20 bg-white px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Last name *</span>
          <input
            name="lastName"
            required
            autoComplete="family-name"
            className="mt-1.5 w-full rounded-md border border-ink/20 bg-white px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-medium text-ink">Email *</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-md border border-ink/20 bg-white px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-ink">Mobile phone</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1.5 w-full rounded-md border border-ink/20 bg-white px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-ink">Comments *</span>
        <textarea
          name="comments"
          required
          rows={5}
          className="mt-1.5 w-full rounded-md border border-ink/20 bg-white px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
        />
      </label>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Please fill in first name, last name, email, and comments.
        </p>
      ) : null}
      {status === "sent" ? (
        <p className="text-sm text-ink/75" role="status">
          Opening your email app so you can send the message.
        </p>
      ) : null}

      <Button type="submit" className="bg-brand text-white hover:bg-brand/90">
        Submit message
      </Button>
    </form>
  );
}
