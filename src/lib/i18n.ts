import type { Content } from "@/content/types";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

const loaders: Record<Locale, () => Promise<Content>> = {
  fr: () => import("@/content/fr").then((m) => m.content),
  en: () => import("@/content/en").then((m) => m.content),
};

export const getContent = (locale: Locale) => loaders[locale]();
