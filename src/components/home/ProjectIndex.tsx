import Image from "next/image";
import Link from "next/link";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { projectHref } from "@/lib/projects";
import { ArrowIcon } from "@/components/ui/Icons";
import { StatusBadge } from "@/components/ui/StatusBadge";
import kit from "../../../public/images/usershaker-kit.jpg";

type Props = { content: Content; lang: Locale };

const grid =
  "md:grid md:grid-cols-[56px_minmax(0,2fr)_minmax(0,1.6fr)_96px_190px_24px] md:items-center md:gap-4";

export function ProjectIndex({ content, lang }: Props) {
  const { index, projects } = content;
  const [featured, ...rows] = projects;

  return (
    <section id="index" className="mx-auto flex max-w-[1376px] scroll-mt-4 flex-col gap-8 px-4 pt-8 pb-20 sm:px-8 sm:pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] leading-none font-extrabold tracking-[-0.03em]">{index.title}</h2>
        <span className="font-mono text-xs text-muted uppercase">{index.label}</span>
      </div>

      <Link
        href={projectHref(lang, featured)}
        className="group flex flex-wrap gap-8 bg-ink p-5 text-ground sm:p-8"
      >
        <div className="min-w-0 flex-[999_1_520px] overflow-hidden">
          <Image
            src={kit}
            alt={index.featured.imageAlt}
            placeholder="blur"
            sizes="(min-width: 1024px) 860px, 100vw"
            className="aspect-video w-full object-cover transition-transform duration-500 ease-[var(--ease-out-quint)] motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-[1_1_300px] flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-ink-muted uppercase">{index.featured.kicker}</span>
            <h3 className="text-[44px] leading-none font-extrabold tracking-[-0.02em]">{featured.title}</h3>
            <p className="text-[17px] leading-relaxed text-ink-text">{featured.summary}</p>
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-[13px] text-accent-soft">
            {index.featured.cta}
            <ArrowIcon className="size-4 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none" />
          </span>
        </div>
      </Link>

      <div>
        <div className={`hidden border-b border-ink py-3 font-mono text-[11px] text-muted uppercase ${grid}`} aria-hidden="true">
          <span>{index.columns.number}</span>
          <span>{index.columns.project}</span>
          <span>{index.columns.context}</span>
          <span>{index.columns.year}</span>
          <span>{index.columns.status}</span>
          <span />
        </div>
        <ol className="border-t border-ink md:border-t-0">
          {rows.map((project, i) => (
            <li key={project.slug} className={`border-b ${i === rows.length - 1 ? "border-ink" : "border-rule"}`}>
              <Link
                href={projectHref(lang, project)}
                scroll={false}
                className={`group flex flex-col gap-1.5 py-4 transition-colors duration-150 ease-out motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:hover:bg-hover ${grid}`}
              >
                <span className="font-mono text-sm text-muted tabular-nums">{project.number}</span>
                <span className="text-2xl font-bold">{project.title}</span>
                <span className="text-muted">
                  {project.client} · {project.context}
                </span>
                <span className="font-mono text-sm tabular-nums">{project.year}</span>
                <span className="mt-1 md:mt-0">
                  <StatusBadge
                    status={project.status}
                    label={project.status === "soon" ? index.statusSoon : index.statusReady}
                  />
                </span>
                <ArrowIcon className="hidden size-4 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none md:block" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
