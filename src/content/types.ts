export type Spec = { label: string; value: string; mono?: boolean; accent?: boolean };

export type Format = { ref: string; duration: string; title: string };

/** A project listed in the index. `case` opens a full case study page, `sheet` a modal. */
export type Project = {
  slug: string;
  number: string;
  title: string;
  client: string;
  context: string;
  year: string;
  kind: "case" | "sheet";
  /** `soon` = content still being written: shown with the construction notice. */
  status: "ready" | "soon";
  summary: string;
  role?: string;
  tools?: string;
};

/** Key of a visual registered in `src/lib/case-visuals.ts`. */
export type CaseVisual =
  | "usershaker-kit"
  | "dromo-cover"
  | "dromo-saison"
  | "dromo-seance"
  | "dromo-repos"
  | "dromo-changement"
  | "dromo-logos"
  | "dromo-wireframes"
  | "dromo-directions"
  | "dromo-motion-poster";

/**
 * A figure in a case study. Without `image`, a dashed "under construction" frame labelled `caption`.
 * `wide` spans both columns and keeps the image's own proportions.
 * `video` (a path under `public/`) plays on demand, with `image` as its poster.
 */
export type CaseFigure = { caption: string; image?: CaseVisual; alt?: string; wide?: boolean; video?: string };

export type CaseStudy = {
  slug: string;
  kicker: string;
  title: string;
  /** Shown under the title, e.g. the product's working name. */
  subtitle?: string;
  lead: string;
  specs: Spec[];
  image: CaseVisual;
  imageAlt: string;
  figCaption: string;
  problem: { label: string; statement: string; body: string };
  role?: { label: string; statement: string; body: string };
  delivered?: {
    label: string;
    /** Without `image`, the item shows a dashed "under construction" frame labelled `visual`. */
    items: { title: string; body: string; visual: string; image?: CaseVisual }[];
  };
  /** How the project was made, step by step. */
  process?: {
    label: string;
    statement: string;
    stepPrefix: string;
    steps: { title: string; body: string; figures?: CaseFigure[] }[];
  };
  migration?: {
    label: string;
    statement: string;
    before: { tag: string; title: string; body: string };
    after: { tag: string; title: string; body: string };
  };
  method?: { label: string; statement: string; steps: { title: string; body: string }[] };
  /** `figures` filled = results shown; absent = construction notice. */
  outcome: { label: string; statement?: string; figures?: { value: string; label: string }[]; note?: string };
  /** Closing call to action: opens an email to Valentin with `subject`. */
  cta?: { label: string; title: string; body: string; action: string; subject: string };
};

export type Content = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    docTitle: string;
    docRef: string;
    links: { href: string; label: string }[];
    languageLabel: string;
  };
  hero: {
    label: string;
    role: string;
    tagline: string;
    taglineAccent: string;
    ctaPrimary: string;
    ctaSecondary: string;
    avatarAlt: string;
    avatarTag: string;
    figCaption: string;
    specsLabel: string;
    specs: Spec[];
  };
  index: {
    label: string;
    title: string;
    featured: { kicker: string; cta: string; imageAlt: string };
    columns: { number: string; project: string; context: string; year: string; status: string };
    statusReady: string;
    statusSoon: string;
  };
  projects: Project[];
  construction: {
    tag: string;
    title: string;
    body: string;
    cta: string;
  };
  sheet: {
    close: string;
    backToIndex: string;
    labels: { client: string; context: string; year: string; role: string; tools: string };
    numberPrefix: string;
    previous: string;
    next: string;
  };
  caseStudies: CaseStudy[];
  caseNav: { backToIndex: string; nextProject: string; caseLabel: string };
  about: {
    label: string;
    statement: string;
    body: string;
    toolsLabel: string;
    tools: string[];
    offScreenLabel: string;
    offScreen: string;
    /** Career, newest first, presented as a datasheet revision history. */
    revisions: {
      label: string;
      columns: { rev: string; period: string; role: string; org: string };
      items: { rev: string; period: string; role: string; org: string }[];
    };
    education: {
      label: string;
      items: { period: string; title: string; school: string }[];
    };
  };
  formats: {
    label: string;
    title: string;
    note: string;
    items: Format[];
  };
  contact: {
    label: string;
    title: string;
    titleAccent: string;
    email: string;
    links: { label: string; href: string }[];
  };
  footer: { copyright: string; end: string };
};
