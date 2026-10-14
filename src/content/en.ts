import type { Content } from "./types";

const email = "valentinhassenforder@gmail.com";
const linkedin = "https://www.linkedin.com/in/valentin-hassenforder-b2198214a/";

export const content: Content = {
  meta: {
    title: "Valentin Hassenforder — Product Engineer, UX/UI & Next.js",
    description:
      "I design and build digital products, from Figma mockup to production code. Landing pages, mockups and prototypes delivered in a few days.",
  },
  nav: {
    home: "Home",
    docTitle: "VH — Datasheet",
    docRef: "Ref. VH-2026 · Rev. 10.26",
    links: [
      { href: "#index", label: "Index" },
      { href: "#formats", label: "Formats" },
      { href: "#contact", label: "Contact" },
    ],
    languageLabel: "Language",
  },
  hero: {
    label: "01 / Designation",
    role: "Product Engineer.",
    tagline: "I design and build digital products,",
    taglineAccent: "from Figma mockup to production code.",
    ctaPrimary: "Get a quote →",
    ctaSecondary: "See the project index",
    avatarAlt: "Memoji avatar of Valentin Hassenforder waving",
    avatarTag: "AVATAR.PNG",
    figCaption: "FIG. 1 — The author",
    specsLabel: "02 / Specifications",
    specs: [
      { label: "Role", value: "Product Engineer, UX/UI" },
      { label: "Experience", value: "6 years in UI/UX" },
      { label: "Based in", value: "Paris · remote or on site" },
      { label: "Languages", value: "French, English" },
      { label: "Stack", value: "Figma, Next.js, React, TypeScript, Supabase, Vercel", mono: true },
      { label: "Typical lead time", value: "1 to 5 days", accent: true },
    ],
  },
  index: {
    label: "03 / Work",
    title: "Project index",
    featured: {
      kicker: "No. 01 · Main project",
      title: "UserShaker",
      description:
        "B2B SaaS that stores, structures and shares usage data for phygital products. As co-founder, I designed and built the app, then led its migration from Bubble to Next.js + Supabase.",
      cta: "Case study — coming soon",
      imageAlt: "The UserShaker hardware kit: three screens, a phone and sensors on a white panel",
    },
    columns: { number: "No.", project: "Project", context: "Context", year: "Year", preview: "Preview" },
    rows: [
      { slug: "interfaces-cockpit", number: "02", title: "Cockpit interfaces", context: "epicnpoc · car maker", year: "2022–24" },
      { slug: "eclairage-exterieur", number: "03", title: "Exterior lighting", context: "epicnpoc · [to be specified]", year: "[year]" },
      { slug: "retail-interactif", number: "04", title: "Interactive retail", context: "epicnpoc · CES / VivaTech", year: "[year]" },
      { slug: "coaching-triathlon", number: "05", title: "Triathlon coaching app", context: "Side project · designed and built solo", year: "2026" },
      { slug: "landing-pages-pme", number: "06", title: "Small-business landing pages", context: "Watchmakers, roofers, restaurants", year: "Freelance" },
    ],
    placeholder: "[visual]",
  },
  formats: {
    label: "04 / Formats",
    title: "Delivered in a few days, at a fixed price.",
    note: "Longer projects (MVP, UX/UI redesign, moving off no-code, AI): part-time support.",
    items: [
      { ref: "F-01", duration: "3–5 days", title: "Landing page or showcase site" },
      { ref: "F-02", duration: "1–3 days", title: "Figma mockup of a user flow" },
      { ref: "F-03", duration: "1–2 days", title: "Express UX audit" },
      { ref: "F-04", duration: "A few days", title: "Web app prototype" },
    ],
  },
  contact: {
    label: "05 / Contact",
    title: "Got a project?",
    titleAccent: "Write to me.",
    links: [
      { label: "Email", href: `mailto:${email}` },
      { label: "LinkedIn", href: linkedin },
      { label: "Malt", href: "#" },
    ],
  },
  footer: { copyright: "© 2026 Valentin Hassenforder", end: "End of document" },
};
