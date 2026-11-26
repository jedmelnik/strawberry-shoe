"use client";

import { useState } from "react";
import { contact } from "@/lib/site";

const fields = [
  { name: "firstName", label: "First name", required: true, autoComplete: "given-name" },
  { name: "lastName", label: "Last name", required: true, autoComplete: "family-name" },
  { name: "email", label: "Email", required: true, type: "email", autoComplete: "email" },
  { name: "phone", label: "Mobile phone", required: true, type: "tel", autoComplete: "tel" },
  { name: "company", label: "Company", autoComplete: "organization" },
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const body = [
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Mobile phone: ${data.phone}`,
      data.company ? `Company: ${data.company}` : null,
      "",
      data.comments,
    ]
      .filter((line) => line !== null)
      .join("\n");
    const subject = `Website message from ${data.firstName} ${data.lastName}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        {fields.map((field) => (
          <label key={field.name}>
            <span>
              {field.label}
              {field.required ? <em aria-hidden="true"> *</em> : null}
            </span>
            <input
              autoComplete={field.autoComplete}
              name={field.name}
              required={field.required}
              type={field.type ?? "text"}
            />
          </label>
        ))}
        <label className="form-wide">
          <span>Comments</span>
          <textarea name="comments" rows={5} />
        </label>
      </div>
      <div className="button-row">
        <button className="button button-primary" type="submit">
          Send message
        </button>
        <button className="button button-outline-dark" type="reset">
          Reset
        </button>
      </div>
      {sent ? <p className="form-note">Your email app should open with the message ready to send.</p> : null}
    </form>
  );
}
