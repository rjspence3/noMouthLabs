interface NMLMarkProps {
  size?: "lg" | "md" | "sm";
}

const sizes = {
  lg: { width: 120, height: 120, viewBox: "0 0 120 120", strokeWidth: 4.8, fontSize: 45.6, barX: 24, barY: 86.4, barWidth: 72, barHeight: 4.8, textY: 66 },
  md: { width: 40, height: 40, viewBox: "0 0 40 40", strokeWidth: 1.6, fontSize: 15.2, barX: 8, barY: 28.8, barWidth: 24, barHeight: 2, textY: 22 },
  sm: { width: 28, height: 28, viewBox: "0 0 28 28", strokeWidth: 1.12, fontSize: 10.64, barX: 5.6, barY: 20.16, barWidth: 16.8, barHeight: 2, textY: 15.4 },
};

export default function NMLMark({ size = "md" }: NMLMarkProps) {
  const s = sizes[size];
  const padding = s.strokeWidth / 2;

  return (
    <svg width={s.width} height={s.height} viewBox={s.viewBox} aria-label="NML">
      <rect
        x={padding}
        y={padding}
        width={s.width - s.strokeWidth}
        height={s.height - s.strokeWidth}
        fill="none"
        stroke="var(--color-bone)"
        strokeWidth={s.strokeWidth}
      />
      <text
        x={s.width / 2}
        y={s.textY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="sans-serif"
        fontWeight="700"
        fontSize={s.fontSize}
        fill="var(--color-bone)"
      >
        NM
      </text>
      <rect
        x={s.barX}
        y={s.barY}
        width={s.barWidth}
        height={s.barHeight}
        fill="var(--color-ember)"
      />
    </svg>
  );
}
