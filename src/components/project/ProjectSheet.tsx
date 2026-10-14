import Link from "next/link";
import type { Content, Project } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { adjacentSheets, projectHref } from "@/lib/projects";
import { ArrowIcon, ArrowLeftIcon } from "@/components/ui/Icons";
import { ConstructionNotice } from "./ConstructionNotice";

type Props = {
  content: Content;
  project: Project;
  lang: Locale;
  /** Rendered inside the modal: links replace history so "back" still closes it. */
  inModal?: boolean;
  /** id of the heading, used by the dialog's aria-labelledby. */
  titleId?: string;
};

/** Body of a small project: shared by the modal and the full page reached by URL. */
export function ProjectSheet({ content, project, lang, inModal = false, titleId }: Props) {
  const { sheet } = content;
  const total = content.projects.length;
  const { previous, next } = adjacentSheets(content, project.slug);
  const Title = inModal ? "h2" : "h1";

  const rows = [
    { label: sheet.labels.client, value: project.client },
    { label: sheet.labels.context, value: project.context },
    { label: sheet.labels.year, value: project.year, mono: true },
    ...(project.role ? [{ label: sheet.labels.role, value: project.role }] : []),
    ...(project.tools ? [{ label: sheet.labels.tools, value: project.tools, mono: true }] : []),
  ];

  return (
    <article className="flex flex-col gap-7">
      <header className="flex flex-col gap-4">
        <span className="font-mono text-xs text-muted tabular-nums">
          {sheet.numberPrefix} {project.number} / {String(total).padStart(2, "0")}
        </span>
        <Title id={titleId} className="pr-14 text-[clamp(2.25rem,6vw,3.25rem)] leading-none font-extrabold tracking-[-0.03em] text-balance">
          {project.title}
        </Title>
        <p className="max-w-[60ch] text-lg leading-relaxed">{project.summary}</p>
      </header>

      <table className="w-full border-collapse text-[15px]">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={`border-t ${i === 0 ? "border-ink" : "border-rule"} ${i === rows.length - 1 ? "border-b border-b-ink" : ""}`}
            >
              <th scope="row" className="w-[38%] py-2.5 pr-4 text-left align-top font-normal text-muted">
                {row.label}
              </th>
              <td className={`py-2.5 ${row.mono ? "font-mono text-[13px] tabular-nums" : ""}`}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {project.status === "soon" && (
        <ConstructionNotice construction={content.construction} email={content.contact.email} projectTitle={project.title} />
      )}

      {previous && next && (
        <nav aria-label={sheet.backToIndex} className="flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-5">
          <Link
            href={projectHref(lang, previous)}
            replace={inModal}
            scroll={!inModal}
            className="group flex items-center gap-2 border border-ink px-4 py-3 font-mono text-xs uppercase hover:bg-hover"
          >
            <ArrowLeftIcon className="size-3.5" />
            <span className="sr-only">{sheet.previous} :</span>
            {previous.number} {previous.title}
          </Link>
          <Link
            href={projectHref(lang, next)}
            replace={inModal}
            scroll={!inModal}
            className="group flex items-center gap-2 border border-ink px-4 py-3 font-mono text-xs uppercase hover:bg-hover"
          >
            <span className="sr-only">{sheet.next} :</span>
            {next.number} {next.title}
            <ArrowIcon className="size-3.5" />
          </Link>
        </nav>
      )}
    </article>
  );
}
