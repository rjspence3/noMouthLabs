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
  description: "Product experiments in AI, developer tools, and systems thinking.",
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
