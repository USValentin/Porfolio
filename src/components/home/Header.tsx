import Link from "next/link";
import type { Content } from "@/content/types";
import { locales, type Locale } from "@/lib/i18n";

type Props = { nav: Content["nav"]; lang: Locale };

export function Header({ nav, lang }: Props) {
  return (
    <header className="border-b border-ink">
      <div className="mx-auto flex max-w-[1376px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-3 font-mono text-xs uppercase tracking-[0.04em] sm:px-8">
        <Link href={`/${lang}`} className="py-1 font-medium hover:text-accent">
          {nav.docTitle}
        </Link>
        <span className="hidden py-1 text-muted md:inline">{nav.docRef}</span>
        <nav aria-label="Navigation" className="flex gap-5">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="py-1 hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <div role="group" aria-label={nav.languageLabel} className="flex gap-1.5">
          {locales.map((locale) => {
            const active = locale === lang;
            return (
              <Link
                key={locale}
                href={`/${locale}`}
                hrefLang={locale}
                aria-current={active ? "page" : undefined}
                className={`border border-ink px-2.5 py-1.5 transition-colors duration-150 ${
                  active ? "bg-ink text-ground" : "hover:bg-hover"
                }`}
              >
                {locale.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
