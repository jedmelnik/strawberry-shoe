import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Persistent mobile CTA bar - call + directions. Hidden from lg up. */
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-[#f3efe9]/95 px-3 py-2.5 shadow-[0_-8px_24px_rgba(26,18,20,0.1)] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-brand px-3 py-2.5 text-sm font-semibold text-white"
        >
          <Phone className="size-4" />
          Call
        </a>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-ink/15 bg-white px-3 py-2.5 text-sm font-semibold text-ink"
        >
          <MapPin className="size-4" />
          Directions
        </a>
      </div>
    </div>
  );
}
