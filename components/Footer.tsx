import NMLMark from "./NMLMark";

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
      </div>
    </footer>
  );
}
