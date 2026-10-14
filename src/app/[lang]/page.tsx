import { notFound } from "next/navigation";
import { getContent, hasLocale } from "@/lib/i18n";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { ProjectIndex } from "@/components/home/ProjectIndex";
import { Formats } from "@/components/home/Formats";
import { Contact } from "@/components/home/Contact";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const content = await getContent(lang);

  return (
    <>
      <Header nav={content.nav} lang={lang} />
      <main id="top">
        <Hero hero={content.hero} />
        <ProjectIndex index={content.index} />
        <Formats formats={content.formats} />
        <Contact contact={content.contact} footer={content.footer} />
      </main>
    </>
  );
}
