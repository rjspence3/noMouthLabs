import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  name: string;
  tagline: string;
  techTags: string[];
  status: string;
  className?: string;
}

export default function ProjectCard({
  slug,
  name,
  tagline,
  techTags,
  status,
  className,
}: ProjectCardProps) {
  return (
    <Link className={`block ${className ?? ""}`} href={`/${slug}`}>
      <div className="rounded-lg p-6 border border-stone/30 transition-all duration-200 cursor-pointer hover:border-ember/60 hover:shadow-[0_0_20px_rgba(232,67,42,0.1)]">
        <div className="flex flex-col gap-3">
          <h2
            className="text-xl"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            {name}
          </h2>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            {tagline}
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
          <span
            className="font-mono text-xs border rounded px-2 py-0.5 self-start"
            style={{
              fontWeight: 300,
              borderColor: "var(--color-stone)",
              color: "var(--color-stone)",
            }}
          >
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
}
