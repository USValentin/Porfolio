import type { Content, Project } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export const projectHref = (lang: Locale, project: Pick<Project, "slug" | "kind">) =>
  project.kind === "case" ? `/${lang}/etudes/${project.slug}` : `/${lang}/projets/${project.slug}`;

export const findProject = (content: Content, slug: string) =>
  content.projects.find((project) => project.slug === slug);

/** Previous / next projects of the same kind, wrapping around. */
export function adjacentSheets(content: Content, slug: string) {
  const sheets = content.projects.filter((project) => project.kind === "sheet");
  const i = sheets.findIndex((project) => project.slug === slug);
  if (i === -1 || sheets.length < 2) return { previous: undefined, next: undefined };
  return {
    previous: sheets[(i - 1 + sheets.length) % sheets.length],
    next: sheets[(i + 1) % sheets.length],
  };
}

export const sheetSlugs = (content: Content) =>
  content.projects.filter((project) => project.kind === "sheet").map((project) => project.slug);

export const caseSlugs = (content: Content) => content.caseStudies.map((study) => study.slug);
