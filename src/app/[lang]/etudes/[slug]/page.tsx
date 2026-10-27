import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent, hasLocale, locales } from "@/lib/i18n";
import { caseSlugs, findProject, projectHref } from "@/lib/projects";
import { caseVisuals } from "@/lib/case-visuals";
import type { CaseVisual } from "@/content/types";
import { Header } from "@/components/home/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { ConstructionNotice } from "@/components/project/ConstructionNotice";
import { ArrowIcon, ArrowLeftIcon } from "@/components/ui/Icons";

export async function generateStaticParams() {
  const params = await Promise.all(
    locales.map(async (lang) => caseSlugs(await getContent(lang)).map((slug) => ({ lang, slug }))),
  );
  return params.flat();
}

export async function generateMetadata({ params }: PageProps<"/[lang]/etudes/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const content = await getContent(lang);
  const study = content.caseStudies.find((s) => s.slug === slug);
  return study ? { title: `${study.title} — ${content.caseNav.caseLabel}`, description: study.lead } : {};
}

const sectionLabel = "flex-[1_1_260px] font-mono text-xs uppercase";
const sectionBody = "flex min-w-0 flex-[999_1_640px] flex-col gap-5";
const statement = "max-w-[28ch] text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight font-bold tracking-[-0.015em] text-balance";

/**
 * A 16:10 frame: the visual when it exists, otherwise a dashed "under construction" frame.
 * `wide` drops the 16:10 frame and keeps the image's own proportions.
 */
function VisualFrame({
  image,
  label,
  soon,
  wide,
  video,
}: {
  image?: CaseVisual;
  label: string;
  soon: string;
  wide?: boolean;
  video?: string;
}) {
  // Plays only on demand (no autoplay): nothing moves unless the visitor asks for it.
  if (video && image) {
    const poster = caseVisuals[image];
    return (
      <video
        controls
        playsInline
        preload="none"
        poster={poster.src}
        width={poster.width}
        height={poster.height}
        aria-label={label}
        className="h-auto w-full border border-rule bg-hover"
      >
        <source src={video} type="video/mp4" />
      </video>
    );
  }
  if (image && wide) {
    return (
      <Image
        src={caseVisuals[image]}
        alt={label}
        placeholder="blur"
        sizes="(min-width: 1376px) 1004px, 100vw"
        className="h-auto w-full border border-rule"
      />
    );
  }
  if (image) {
    return (
      <div className="relative aspect-[16/10] border border-rule bg-hover">
        <Image
          src={caseVisuals[image]}
          alt={label}
          placeholder="blur"
          fill
          sizes="(min-width: 1376px) 520px, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-4 sm:p-6"
        />
      </div>
    );
  }
  return (
    <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 border border-dashed border-muted px-4 text-center font-mono text-[11px] text-muted uppercase">
      <span className="flex items-center gap-2 text-accent">
        <span aria-hidden="true" className="size-1.5 animate-pulse bg-accent motion-reduce:animate-none" />
        {soon}
      </span>
      <span>{label}</span>
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/[lang]/etudes/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const content = await getContent(lang);
  const study = content.caseStudies.find((s) => s.slug === slug);
  const project = findProject(content, slug);
  if (!study || !project) notFound();

  const next = content.projects[(content.projects.indexOf(project) + 1) % content.projects.length];
  const { outcome } = study;

  return (
    <>
      <Header nav={content.nav} lang={lang} />
      <main>
        <section className="mx-auto flex max-w-[1376px] flex-wrap items-end gap-12 px-4 pt-10 pb-12 sm:px-8 sm:pt-14">
          <div className="flex min-w-0 flex-[999_1_640px] flex-col gap-6">
            <Link
              href={`/${lang}#index`}
              className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase hover:text-accent"
            >
              <ArrowLeftIcon className="size-3.5" />
              {content.caseNav.backToIndex}
            </Link>
            <span className="font-mono text-xs text-accent uppercase">{study.kicker}</span>
            <div className="flex flex-col gap-3">
              <h1 className="text-[clamp(3.5rem,10vw,6rem)] leading-[0.88] font-extrabold tracking-[-0.04em]">{study.title}</h1>
              {study.subtitle && (
                <p className="text-[clamp(1.75rem,4vw,2.5rem)] leading-none font-bold tracking-[-0.02em] text-muted">
                  {study.subtitle}
                </p>
              )}
            </div>
            <p className="max-w-[60ch] text-xl leading-snug sm:text-2xl">{study.lead}</p>
          </div>
          <table className="flex-[1_1_340px] border-collapse text-[15px]">
            <tbody>
              {study.specs.map((spec, i) => (
                <tr
                  key={spec.label}
                  className={`border-t ${i === 0 ? "border-ink" : "border-rule"} ${i === study.specs.length - 1 ? "border-b border-b-ink" : ""}`}
                >
                  <th scope="row" className="w-[34%] py-2.5 pr-4 text-left align-top font-normal text-muted">
                    {spec.label}
                  </th>
                  <td className={`py-2.5 ${spec.mono ? "font-mono text-[13px]" : ""}`}>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <figure className="mx-auto flex max-w-[1376px] flex-col gap-2.5 px-4 sm:px-8">
          <Image
            src={caseVisuals[study.image]}
            alt={study.imageAlt}
            priority
            placeholder="blur"
            sizes="(min-width: 1376px) 1312px, 100vw"
            className="aspect-[21/9] w-full object-cover"
          />
          <figcaption className="font-mono text-[11px] text-muted">{study.figCaption}</figcaption>
        </figure>

        {[study.problem, study.role].map(
          (block, i) =>
            block && (
              <section
                key={block.label}
                className={`mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 sm:px-8 ${i === 0 ? "pt-24 pb-12" : "py-12"}`}
              >
                <h2 className={`${sectionLabel} text-muted`}>{block.label}</h2>
                <div className={sectionBody}>
                  <p className={statement}>{block.statement}</p>
                  <p className="max-w-[65ch] text-lg leading-relaxed whitespace-pre-line text-muted">{block.body}</p>
                </div>
              </section>
            ),
        )}

        {study.delivered && (
          <section className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 py-12 sm:px-8">
            <h2 className={`${sectionLabel} text-muted`}>{study.delivered.label}</h2>
            <ul className="grid min-w-0 flex-[999_1_640px] grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
              {study.delivered.items.map((item) => (
                <li key={item.title} className="flex flex-col gap-3">
                  <VisualFrame image={item.image} label={item.visual} soon={content.index.statusSoon} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {study.process && (
          <section className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 py-12 sm:px-8">
            <h2 className={`${sectionLabel} text-muted`}>{study.process.label}</h2>
            <div className={sectionBody}>
              <p className={statement}>{study.process.statement}</p>
              <ol className="flex flex-col">
                {study.process.steps.map((step, i) => (
                  <li key={step.title} className={`flex flex-col gap-5 border-t py-8 ${i === 0 ? "border-ink" : "border-rule"}`}>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs text-accent uppercase">
                        {study.process!.stepPrefix} {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="max-w-[65ch] text-lg leading-relaxed text-muted">{step.body}</p>
                    </div>
                    {step.figures && (
                      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                        {step.figures.map((figure) => (
                          <figure key={figure.caption} className={`flex flex-col gap-2.5 ${figure.wide ? "sm:col-span-2" : ""}`}>
                            <VisualFrame
                              image={figure.image}
                              label={figure.alt ?? figure.caption}
                              soon={content.index.statusSoon}
                              wide={figure.wide}
                              video={figure.video}
                            />
                            <figcaption className="font-mono text-[11px] text-muted">{figure.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {study.migration && (
          <section className="mt-12 bg-ink text-ground">
            <div className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 py-20 sm:px-8 sm:py-24">
              <h2 className={`${sectionLabel} text-ink-muted`}>{study.migration.label}</h2>
              <div className={sectionBody}>
                <p className={statement}>{study.migration.statement}</p>
                <div className="flex flex-col items-stretch gap-4 sm:flex-row">
                  {[study.migration.before, study.migration.after].map((step, i) => (
                    <div key={step.tag} className="contents">
                      {i === 1 && (
                        <div aria-hidden="true" className="flex items-center justify-center text-accent-soft">
                          <ArrowIcon className="size-6 rotate-90 sm:rotate-0" />
                        </div>
                      )}
                      <div
                        className={`flex flex-1 flex-col gap-3.5 border p-6 ${i === 1 ? "border-accent-soft" : "border-ink-line"}`}
                      >
                        <span className={`font-mono text-xs ${i === 1 ? "text-accent-soft" : "text-ink-muted"}`}>{step.tag}</span>
                        <span className="text-2xl font-bold">{step.title}</span>
                        <span className="leading-relaxed text-ink-text">{step.body}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {study.method && (
          <section className="mt-12 bg-ink text-ground">
            <div className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 py-20 sm:px-8 sm:py-24">
              <h2 className={`${sectionLabel} text-ink-muted`}>{study.method.label}</h2>
              <div className={sectionBody}>
                <p className={statement}>{study.method.statement}</p>
                <ol className="flex flex-col">
                  {study.method.steps.map((step, i) => (
                    <li
                      key={step.title}
                      className={`flex flex-wrap gap-x-6 gap-y-2 border-t py-5 ${i === 0 ? "border-ground" : "border-ink-line"} ${i === study.method!.steps.length - 1 ? "border-b border-b-ground" : ""}`}
                    >
                      <span className="w-10 font-mono text-xs text-accent-soft">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex min-w-0 flex-[1_1_480px] flex-col gap-1.5">
                        <span className="text-xl font-bold">{step.title}</span>
                        <span className="leading-relaxed text-ink-text">{step.body}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 py-24 sm:px-8">
          <h2 className={`${sectionLabel} text-muted`}>{outcome.label}</h2>
          <div className={sectionBody}>
            {outcome.figures ? (
              <>
                {outcome.statement && <p className={statement}>{outcome.statement}</p>}
                <dl className="grid grid-cols-2 border-t border-ink lg:grid-cols-4">
                  {outcome.figures.map((figure) => (
                    <div key={figure.label} className="flex flex-col-reverse justify-end gap-2 border-b border-rule py-5 pr-4">
                      <dt className="font-mono text-[11px] text-muted uppercase">{figure.label}</dt>
                      <dd className="text-[clamp(2rem,4vw,2.75rem)] leading-none font-extrabold tracking-[-0.03em]">{figure.value}</dd>
                    </div>
                  ))}
                </dl>
                {outcome.note && <p className="max-w-[65ch] leading-relaxed text-muted">{outcome.note}</p>}
              </>
            ) : (
              <ConstructionNotice construction={content.construction} email={content.contact.email} projectTitle={study.title} />
            )}
          </div>
        </section>

        {study.cta && (
          <section className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 pb-24 sm:px-8">
            <h2 className={`${sectionLabel} text-muted`}>{study.cta.label}</h2>
            <div className={sectionBody}>
              <p className={statement}>{study.cta.title}</p>
              <p className="max-w-[60ch] text-lg leading-relaxed text-muted">{study.cta.body}</p>
              <a
                href={`mailto:${content.contact.email}?subject=${encodeURIComponent(study.cta.subject)}`}
                className="group inline-flex w-fit items-center gap-2 bg-accent px-5 py-3 font-medium text-ground transition-transform duration-150 ease-[var(--ease-out-quint)] active:scale-[0.97] motion-reduce:transition-none"
              >
                {study.cta.action}
                <ArrowIcon className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </a>
            </div>
          </section>
        )}

        <Link
          href={projectHref(lang, next)}
          className="group block border-y border-ink transition-colors duration-150 motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:hover:bg-hover"
        >
          <div className="mx-auto flex max-w-[1376px] flex-wrap items-center justify-between gap-6 px-4 py-10 sm:px-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-muted uppercase">
                {content.caseNav.nextProject} · {content.sheet.numberPrefix} {next.number}
              </span>
              <span className="text-[clamp(2rem,5vw,3.5rem)] leading-none font-extrabold tracking-[-0.03em]">{next.title}</span>
            </div>
            <ArrowIcon className="size-8 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none" />
          </div>
        </Link>
      </main>
      <SiteFooter footer={content.footer} />
    </>
  );
}
