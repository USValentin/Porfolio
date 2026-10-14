import { notFound } from "next/navigation";
import { getContent, hasLocale } from "@/lib/i18n";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { ProjectIndex } from "@/components/home/ProjectIndex";
import { About } from "@/components/home/About";
import { Formats } from "@/components/home/Formats";
import { Contact } from "@/components/home/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const content = await getContent(lang);

  return (
    <>
      <Header nav={content.nav} lang={lang} />
      <main id="top">
        <Hero hero={content.hero} />
        <ProjectIndex content={content} lang={lang} />
        <About about={content.about} />
        <Formats formats={content.formats} />
        <Contact contact={content.contact} />
      </main>
      <SiteFooter footer={content.footer} />
    </>
  );
}
