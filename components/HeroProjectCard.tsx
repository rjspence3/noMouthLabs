import Link from "next/link";

interface HeroProjectCardProps {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  techTags: string[];
  status: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function HeroProjectCard({
  slug,
  name,
  tagline,
  description,
  techTags,
  status,
  actionLabel,
  actionHref,
}: HeroProjectCardProps) {
  return (
    <Link className="block mb-6" href={`/${slug}`}>
      <div
        className="rounded-lg p-8 border transition-all duration-200 cursor-pointer hover:border-ember/60 hover:shadow-[0_0_30px_rgba(232,67,42,0.12)]"
        style={{ borderColor: "rgba(232,67,42,0.35)", borderLeftWidth: "3px" }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:gap-10">
          {/* Left: content */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-xs border rounded-full px-3 py-0.5"
                style={{
                  borderColor: "var(--color-ember)",
                  color: "var(--color-ember)",
                  fontWeight: 500,
                }}
              >
                Featured
              </span>
              <span
                className="font-mono text-xs border rounded px-2 py-0.5"
                style={{
                  borderColor: "var(--color-stone)",
                  color: "var(--color-stone)",
                  fontWeight: 300,
                }}
              >
                {status}
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
            >
              {name}
            </h2>

            <p
              className="text-base"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              {tagline}
            </p>

            <p
              className="text-sm leading-relaxed max-w-2xl"
              style={{
                color: "color-mix(in srgb, var(--color-negative-text) 70%, transparent)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs border rounded-full px-3 py-1"
                  style={{
                    borderColor: "var(--color-stone)",
                    color: "var(--color-stone)",
                    fontWeight: 400,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          {actionLabel && actionHref && (
            <div className="mt-6 md:mt-0 md:flex-shrink-0 md:self-center">
              <span
                className="inline-block px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-ember)",
                  color: "#fff",
                }}
              >
                {actionLabel} →
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
