import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent, hasLocale, locales } from "@/lib/i18n";
import { findProject, sheetSlugs } from "@/lib/projects";
import { Header } from "@/components/home/Header";
import { ProjectSheet } from "@/components/project/ProjectSheet";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeftIcon } from "@/components/ui/Icons";

export async function generateStaticParams() {
  const params = await Promise.all(
    locales.map(async (lang) => sheetSlugs(await getContent(lang)).map((slug) => ({ lang, slug }))),
  );
  return params.flat();
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projets/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const content = await getContent(lang);
  const project = findProject(content, slug);
  return project ? { title: `${project.title} — Valentin Hassenforder`, description: project.summary } : {};
}

/** Full-page version of a small project, reached by URL or refresh (no interception). */
export default async function ProjectPage({ params }: PageProps<"/[lang]/projets/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const content = await getContent(lang);
  const project = findProject(content, slug);
  if (!project || project.kind !== "sheet") notFound();

  return (
    <>
      <Header nav={content.nav} lang={lang} />
      <main className="mx-auto flex max-w-[1376px] flex-col gap-10 px-4 pt-10 pb-20 sm:px-8 sm:pt-14">
        <Link
          href={`/${lang}#index`}
          className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase hover:text-accent"
        >
          <ArrowLeftIcon className="size-3.5" />
          {content.sheet.backToIndex}
        </Link>
        <div className="max-w-[760px]">
          <ProjectSheet content={content} project={project} lang={lang} />
        </div>
      </main>
      <SiteFooter footer={content.footer} />
    </>
  );
}
