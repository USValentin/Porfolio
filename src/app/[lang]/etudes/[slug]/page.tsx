import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent, hasLocale, locales } from "@/lib/i18n";
import { caseSlugs, findProject, projectHref } from "@/lib/projects";
import { Header } from "@/components/home/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { ConstructionNotice } from "@/components/project/ConstructionNotice";
import { ArrowIcon, ArrowLeftIcon } from "@/components/ui/Icons";
import kit from "../../../../../public/images/usershaker-kit.jpg";

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

export default async function CaseStudyPage({ params }: PageProps<"/[lang]/etudes/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const content = await getContent(lang);
  const study = content.caseStudies.find((s) => s.slug === slug);
  const project = findProject(content, slug);
  if (!study || !project) notFound();

  const next = content.projects[(content.projects.indexOf(project) + 1) % content.projects.length];

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
            <h1 className="text-[clamp(3.5rem,10vw,6rem)] leading-[0.88] font-extrabold tracking-[-0.04em]">{study.title}</h1>
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
            src={kit}
            alt={study.imageAlt}
            priority
            placeholder="blur"
            sizes="(min-width: 1376px) 1312px, 100vw"
            className="aspect-[21/9] w-full object-cover"
          />
          <figcaption className="font-mono text-[11px] text-muted">{study.figCaption}</figcaption>
        </figure>

        <section className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 pt-24 pb-12 sm:px-8">
          <h2 className={`${sectionLabel} text-muted`}>{study.problem.label}</h2>
          <div className={sectionBody}>
            <p className={statement}>{study.problem.statement}</p>
            <p className="max-w-[65ch] text-lg leading-relaxed text-muted">{study.problem.body}</p>
          </div>
        </section>

        <section className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 py-12 sm:px-8">
          <h2 className={`${sectionLabel} text-muted`}>{study.delivered.label}</h2>
          <ul className="grid min-w-0 flex-[999_1_640px] grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
            {study.delivered.items.map((item) => (
              <li key={item.title} className="flex flex-col gap-3">
                <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 border border-dashed border-muted px-4 text-center font-mono text-[11px] text-muted uppercase">
                  <span className="flex items-center gap-2 text-accent">
                    <span aria-hidden="true" className="size-1.5 animate-pulse bg-accent motion-reduce:animate-none" />
                    {content.index.statusSoon}
                  </span>
                  <span>{item.visual}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

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

        <section className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 py-24 sm:px-8">
          <h2 className={`${sectionLabel} text-muted`}>{study.outcome.label}</h2>
          <div className={sectionBody}>
            <ConstructionNotice construction={content.construction} email={content.contact.email} projectTitle={study.title} />
          </div>
        </section>

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
