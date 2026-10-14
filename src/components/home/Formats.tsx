import type { Content } from "@/content/types";

type Props = { formats: Content["formats"] };

export function Formats({ formats }: Props) {
  return (
    <section id="formats" className="scroll-mt-4 bg-ink text-ground">
      <div className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-[1_1_340px] flex-col gap-5">
          <span className="font-mono text-xs text-ink-muted uppercase">{formats.label}</span>
          <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] leading-none font-extrabold tracking-[-0.03em]">
            {formats.title}
          </h2>
          <p className="text-[17px] leading-relaxed text-ink-text">{formats.note}</p>
        </div>
        <ul className="grid min-w-0 flex-[999_1_560px] grid-cols-1 sm:grid-cols-2 gap-px border border-ink-line bg-ink-line">
          {formats.items.map((item) => (
            <li key={item.ref} className="flex flex-col gap-10 bg-ink p-7">
              <span className="font-mono text-xs text-accent-soft uppercase">
                {item.ref} · {item.duration}
              </span>
              <span className="text-[26px] leading-tight font-bold">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
