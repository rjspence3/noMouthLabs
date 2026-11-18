import Link from "next/link";
import NMLMark from "./NMLMark";
import { site } from "@/lib/site";

const small = { fontFamily: "var(--font-mono)", color: "var(--color-stone)" };

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 text-center"
      style={{
        borderTop: "1px solid color-mix(in srgb, var(--color-stone) 20%, transparent)",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <NMLMark size="md" />
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
        >
          No Mouth Labs
        </p>
        <p
          className="text-sm opacity-60"
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
        >
          The work speaks now.
        </p>
        <p className="text-xs" style={small}>
          Paid products are sold by{" "}
          <a href={site.seller.url} className="underline hover:text-[var(--color-negative-text)]">
            {site.seller.name}
          </a>
          .
        </p>
        <p className="text-xs flex gap-4" style={small}>
          {site.contact.live ? (
            <a href={`mailto:${site.contact.email}`} className="hover:text-[var(--color-negative-text)]">
              {site.contact.email}
            </a>
          ) : (
            <span title="Address not set up yet">{site.contact.email} (soon)</span>
          )}
          <Link href="/writing/rss.xml" className="hover:text-[var(--color-negative-text)]">
            RSS
          </Link>
          <Link href="/privacy" className="hover:text-[var(--color-negative-text)]">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
