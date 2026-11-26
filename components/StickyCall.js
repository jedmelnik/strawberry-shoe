import { contact } from "@/lib/site";

export function StickyCall() {
  return (
    <div className="sticky-call">
      <a className="sticky-call-primary" href={contact.phoneHref}>
        Call {contact.phone}
      </a>
      <a href={contact.mapsHref} rel="noreferrer" target="_blank">
        Directions
      </a>
    </div>
  );
}
