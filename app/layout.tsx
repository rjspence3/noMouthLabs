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
  metadataBase: new URL("https://nomouthlabs.com"),
  title: "No Mouth Labs",
  description:
    "Rob Spence builds software and sells it. Every project here has a live link, its ship date and a dated ship log.",
  openGraph: {
    title: "No Mouth Labs — Rob Spence",
    description: "Software Rob Spence built and shipped, with ship dates and logs as proof.",
    url: "https://nomouthlabs.com",
    siteName: "No Mouth Labs",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "No Mouth Labs — Rob Spence",
    description: "Software Rob Spence built and shipped, with ship dates and logs as proof.",
  },
  alternates: {
    types: {
      "text/plain": "https://nomouthlabs.com/llms.txt",
      "application/rss+xml": "https://nomouthlabs.com/writing/rss.xml",
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
      sameAs: [
        "https://github.com/rjspence3",
        "https://linkedin.com/in/robertspenceiii",
        "https://rjspence3.substack.com",
      ],
      description: "Builds and ships software products, many of them built with Claude.",
    },
    {
      "@type": "WebSite",
      "@id": "https://nomouthlabs.com/#website",
      url: "https://nomouthlabs.com",
      name: "No Mouth Labs",
      description: "Software Rob Spence built and shipped, with ship dates and logs.",
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
