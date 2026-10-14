import { notFound } from "next/navigation";
import { getContent, hasLocale } from "@/lib/i18n";
import { findProject } from "@/lib/projects";
import { Modal } from "@/components/project/Modal";
import { ProjectSheet } from "@/components/project/ProjectSheet";

export default async function ProjectModal({ params }: PageProps<"/[lang]/projets/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const content = await getContent(lang);
  const project = findProject(content, slug);
  if (!project || project.kind !== "sheet") notFound();

  const titleId = `project-${project.slug}-title`;
  return (
    <Modal closeLabel={content.sheet.close} labelledBy={titleId}>
      <ProjectSheet content={content} project={project} lang={lang} inModal titleId={titleId} />
    </Modal>
  );
}
