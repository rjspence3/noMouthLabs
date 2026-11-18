import SiteHeader from "./SiteHeader";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-16">{children}</main>
      <Footer />
    </>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-stone)", fontWeight: 500 }}>
      {children}
    </h2>
  );
}
