import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — No Mouth Labs",
  description: "Privacy policy for No Mouth Labs plugins and tools.",
};

export default function PrivacyPage() {
  return (
    <main
      className="min-h-screen px-6 py-16 max-w-2xl mx-auto"
      style={{ color: "var(--color-negative-text)" }}
    >
      <Link
        href="/"
        className="text-sm mb-12 inline-block"
        style={{
          color: "var(--color-stone)",
          fontFamily: "var(--font-mono)",
        }}
      >
        ← nomouthlabs.com
      </Link>

      <h1
        className="text-4xl mb-2"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
      >
        Privacy Policy
      </h1>
      <p
        className="text-sm mb-10"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-stone)",
        }}
      >
        Effective March 27, 2026
      </p>

      <div
        className="space-y-6 text-base leading-relaxed"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <section>
          <h2
            className="text-lg mb-2"
            style={{ fontWeight: 600 }}
          >
            What these tools are
          </h2>
          <p style={{ color: "color-mix(in srgb, var(--color-negative-text) 80%, transparent)" }}>
            No Mouth Labs plugins and tools (including Claude plugins submitted to the Anthropic plugin directory) are open-source tools released under the MIT license. They run locally or through your own Claude account. There is no backend, no cloud service, and no server operated by No Mouth Labs.
          </p>
        </section>

        <section>
          <h2
            className="text-lg mb-2"
            style={{ fontWeight: 600 }}
          >
            Data collection
          </h2>
          <p style={{ color: "color-mix(in srgb, var(--color-negative-text) 80%, transparent)" }}>
            None. These tools do not collect, store, transmit, or share any personal data. No analytics, no telemetry, no tracking. What you type stays between you and Claude.
          </p>
        </section>

        <section>
          <h2
            className="text-lg mb-2"
            style={{ fontWeight: 600 }}
          >
            Third-party services
          </h2>
          <p style={{ color: "color-mix(in srgb, var(--color-negative-text) 80%, transparent)" }}>
            These tools operate within Claude&apos;s existing infrastructure. Any data handling by Anthropic is governed by{" "}
            <a
              href="https://www.anthropic.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-ember)" }}
            >
              Anthropic&apos;s Privacy Policy
            </a>
            , not this one.
          </p>
        </section>

        <section>
          <h2
            className="text-lg mb-2"
            style={{ fontWeight: 600 }}
          >
            Contact
          </h2>
          <p style={{ color: "color-mix(in srgb, var(--color-negative-text) 80%, transparent)" }}>
            Questions?{" "}
            <a
              href="mailto:rjspence3@gmail.com"
              style={{ color: "var(--color-ember)" }}
            >
              rjspence3@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
