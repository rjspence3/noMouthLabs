import Link from "next/link";
import NMLMark from "./NMLMark";

const sections = [
  { href: "/projects", label: "Projects" },
  { href: "/lab", label: "Lab" },
  { href: "/writing", label: "Writing" },
];

export default function SiteHeader() {
  return (
    <nav
      className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-sm"
      style={{ backgroundColor: "color-mix(in srgb, var(--color-negative) 90%, transparent)" }}
    >
      <Link href="/" className="flex items-center gap-3" aria-label="No Mouth Labs home">
        <NMLMark size="sm" />
        <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest" style={{ fontWeight: 500 }}>
          No Mouth Labs
        </span>
      </Link>
      <div className="flex gap-5">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-[var(--color-negative-text)]"
            style={{ color: "var(--color-stone)" }}
          >
            {section.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
