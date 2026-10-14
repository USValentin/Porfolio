type Props = { status: "ready" | "soon"; label: string; tone?: "light" | "dark" };

/** Small datasheet-style status tag. "soon" carries a pulsing dot that stops under reduced motion. */
export function StatusBadge({ status, label, tone = "light" }: Props) {
  const soon = status === "soon";
  const frame = tone === "dark" ? "border-ink-line text-ink-muted" : "border-rule text-muted";
  return (
    <span
      className={`inline-flex items-center gap-2 border px-2 py-1 font-mono text-[11px] whitespace-nowrap uppercase ${frame}`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 ${soon ? "animate-pulse bg-accent motion-reduce:animate-none" : "bg-current"} ${
          soon && tone === "dark" ? "bg-accent-soft" : ""
        }`}
      />
      {label}
    </span>
  );
}
