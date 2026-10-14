export type Spec = { label: string; value: string; mono?: boolean; accent?: boolean };

export type IndexRow = {
  slug: string;
  number: string;
  title: string;
  context: string;
  year: string;
};

export type Format = { ref: string; duration: string; title: string };

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
    featured: {
      kicker: string;
      title: string;
      description: string;
      cta: string;
      imageAlt: string;
    };
    columns: { number: string; project: string; context: string; year: string; preview: string };
    rows: IndexRow[];
    placeholder: string;
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
    links: { label: string; href: string }[];
  };
  footer: { copyright: string; end: string };
};
