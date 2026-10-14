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

export type CaseStudy = {
  slug: string;
  kicker: string;
  title: string;
  lead: string;
  specs: Spec[];
  imageAlt: string;
  figCaption: string;
  problem: { label: string; statement: string; body: string };
  delivered: {
    label: string;
    items: { title: string; body: string; visual: string }[];
  };
  migration: {
    label: string;
    statement: string;
    before: { tag: string; title: string; body: string };
    after: { tag: string; title: string; body: string };
  };
  outcome: { label: string };
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
