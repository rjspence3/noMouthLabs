import type { Metadata } from "next";
import { Familjen_Grotesk, Instrument_Serif, DM_Mono } from "next/font/google";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "No Mouth Labs",
  description:
    "Rob Spence — Solutions Architect and AI tool builder. Shipped multi-agent infrastructure, autonomous AI systems, and production LLM products. 8+ years enterprise SA, 120+ days running Kernel (personal AI OS).",
  openGraph: {
    title: "No Mouth Labs — Rob Spence",
    description:
      "AI tools I actually ship. Not demos I forget about. Proof of work from an 8-year SA who builds real multi-agent systems with Claude.",
    url: "https://nomouthlabs.com",
    siteName: "No Mouth Labs",
    type: "website",
    images: [
      {
        url: "https://nomouthlabs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "No Mouth Labs — Rob Spence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Mouth Labs — Rob Spence",
    description:
      "AI tools I actually ship. Real multi-agent systems, production LLM products, and Kernel — a personal AI OS running 24/7.",
    images: ["https://nomouthlabs.com/og-image.png"],
  },
  alternates: {
    types: {
      "text/plain": "https://nomouthlabs.com/llms.txt",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nomouthlabs.com/#rob-spence",
      name: "Rob Spence",
      alternateName: "Robert Spence",
      url: "https://nomouthlabs.com",
      email: "rjspence3@gmail.com",
      jobTitle: "Senior Solution Architect",
      worksFor: {
        "@type": "Organization",
        name: "OutSystems",
      },
      sameAs: [
        "https://github.com/rjspence3",
        "https://linkedin.com/in/robertspenceiii",
        "https://rjspence3.substack.com",
      ],
      description:
        "AI tool builder and Solutions Architect. Builds autonomous agents and LLM-powered products using Claude and the Anthropic SDK. Creator of Kernel — a personal AI OS running 24/7 in production.",
      knowsAbout: [
        "Multi-agent AI systems",
        "Claude API",
        "Anthropic SDK",
        "Python",
        "TypeScript",
        "FastAPI",
        "Next.js",
        "DSPy",
        "Playwright",
        "Enterprise software architecture",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nomouthlabs.com/#website",
      url: "https://nomouthlabs.com",
      name: "No Mouth Labs",
      description:
        "AI tools I actually ship. Portfolio of production-grade AI experiments, autonomous agents, and LLM-powered tools by Rob Spence.",
      author: { "@id": "https://nomouthlabs.com/#rob-spence" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${familjenGrotesk.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        style={{
          backgroundColor: "var(--color-negative)",
          color: "var(--color-negative-text)",
          fontFamily: "var(--font-sans)",
        }}
      >
        {/* Grain overlay */}
        <div
          style={{ mixBlendMode: "overlay" }}
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.04]"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
