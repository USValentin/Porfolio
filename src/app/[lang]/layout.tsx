import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { getContent, hasLocale, locales } from "@/lib/i18n";
import "../globals.css";

// Variable fonts self-hosted from the repo (OFL, via Fontsource): no build-time call to Google.
const schibsted = localFont({
  src: "../fonts/schibsted-grotesk-latin-wght-normal.woff2",
  variable: "--font-schibsted",
  weight: "400 900",
  display: "swap",
});

const jetbrains = localFont({
  src: "../fonts/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getContent(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { languages: { fr: "/fr", en: "/en" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${schibsted.variable} ${jetbrains.variable} antialiased`}>
      <body className="min-h-screen bg-ground font-sans text-ink">{children}</body>
    </html>
  );
}
