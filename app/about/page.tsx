import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { SectionLabel } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — No Mouth Labs",
  description: "Who builds the things on No Mouth Labs, and how to get in touch.",
};

const elsewhere = [
  { label: "GitHub", href: "https://github.com/rjspence3" },
  { label: "LinkedIn", href: "https://linkedin.com/in/robertspenceiii" },
];

export default function About() {
  return (
    <PageShell>
      <h1 className="text-4xl mb-8" style={{ fontWeight: 700 }}>About</h1>
      <div className="prose-nml mb-12">
        <p>
          I&apos;m Rob Spence. I build small software products, put them in front of real people, and keep a
          dated log of what happened next. No Mouth Labs is where all of it lives.
        </p>
        <p>
          The name comes from Harlan Ellison&apos;s <em>I Have No Mouth, and I Must Scream</em>, turned around:
          I&apos;d rather the work did the talking. That is why every project here carries its own proof, with
          the day it shipped, a link you can open and a log of what changed since. Anything that can&apos;t show
          that yet lives on the <Link href="/lab">Lab</Link> page until it can.
        </p>
        <p>
          I write about what each build taught me on the <Link href="/writing">Writing</Link> page. Paid
          products are sold by <a href={site.seller.url}>{site.seller.name}</a>.
        </p>
      </div>

      <section className="mb-10">
        <SectionLabel>Contact</SectionLabel>
        {site.contact.live ? (
          <a href={`mailto:${site.contact.email}`} className="underline">{site.contact.email}</a>
        ) : (
          <p style={{ color: "var(--color-bone)" }}>{site.contact.email} (being set up)</p>
        )}
      </section>

      <section>
        <SectionLabel>Elsewhere</SectionLabel>
        <p className="flex gap-6">
          {elsewhere.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="underline">{link.label}</a>
          ))}
        </p>
      </section>
    </PageShell>
  );
}
