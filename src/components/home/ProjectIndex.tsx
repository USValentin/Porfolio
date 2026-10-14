import Image from "next/image";
import type { Content } from "@/content/types";
import kit from "../../../public/images/usershaker-kit.jpg";

type Props = { index: Content["index"] };

const grid = "md:grid md:grid-cols-[64px_minmax(0,2fr)_minmax(0,1.4fr)_minmax(0,1fr)_160px] md:items-center md:gap-4";

export function ProjectIndex({ index }: Props) {
  const { featured } = index;

  return (
    <section id="index" className="mx-auto flex max-w-[1376px] scroll-mt-4 flex-col gap-8 px-4 pt-8 pb-20 sm:px-8 sm:pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] leading-none font-extrabold tracking-[-0.03em]">{index.title}</h2>
        <span className="font-mono text-xs text-muted uppercase">{index.label}</span>
      </div>

      <article className="flex flex-wrap gap-8 bg-ink p-5 text-ground sm:p-8">
        <Image
          src={kit}
          alt={featured.imageAlt}
          placeholder="blur"
          sizes="(min-width: 1024px) 860px, 100vw"
          className="aspect-video min-w-0 flex-[999_1_520px] object-cover"
        />
        <div className="flex flex-[1_1_300px] flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-ink-muted uppercase">{featured.kicker}</span>
            <h3 className="text-[44px] leading-none font-extrabold tracking-[-0.02em]">{featured.title}</h3>
            <p className="text-[17px] leading-relaxed text-ink-text">{featured.description}</p>
          </div>
          <span className="font-mono text-[13px] text-accent-soft">{featured.cta}</span>
        </div>
      </article>

      <div>
        <div className={`hidden border-b border-ink py-3 font-mono text-[11px] text-muted uppercase ${grid}`} aria-hidden="true">
          <span>{index.columns.number}</span>
          <span>{index.columns.project}</span>
          <span>{index.columns.context}</span>
          <span>{index.columns.year}</span>
          <span>{index.columns.preview}</span>
        </div>
        <ol className="border-t border-ink md:border-t-0">
          {index.rows.map((row, i) => (
            <li
              key={row.slug}
              className={`flex flex-col gap-1 border-b py-4 ${grid} ${
                i === index.rows.length - 1 ? "border-ink" : "border-rule"
              }`}
            >
              <span className="font-mono text-sm text-muted">{row.number}</span>
              <span className="text-2xl font-bold">{row.title}</span>
              <span className="text-muted">{row.context}</span>
              <span className="font-mono text-sm">{row.year}</span>
              <span
                aria-hidden="true"
                className="hidden h-[90px] w-40 items-center justify-center border border-dashed border-muted font-mono text-[10px] text-muted md:flex"
              >
                {index.placeholder}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
