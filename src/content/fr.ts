import type { Content } from "./types";

const email = "valentinhassenforder@gmail.com";
const linkedin = "https://www.linkedin.com/in/valentin-hassenforder-b2198214a/";

export const content: Content = {
  meta: {
    title: "Valentin Hassenforder — Product Engineer, UX/UI & Next.js",
    description:
      "Je conçois et je développe des produits digitaux, de la maquette Figma au code en production. Landing pages, maquettes et prototypes livrés en quelques jours.",
  },
  nav: {
    home: "Accueil",
    docTitle: "VH — Fiche technique",
    docRef: "Réf. VH-2026 · Rév. 10.26",
    links: [
      { href: "#index", label: "Index" },
      { href: "#formats", label: "Formats" },
      { href: "#contact", label: "Contact" },
    ],
    languageLabel: "Langue",
  },
  hero: {
    label: "01 / Désignation",
    role: "Product Engineer.",
    tagline: "Je conçois et je développe des produits digitaux,",
    taglineAccent: "de la maquette Figma au code en production.",
    ctaPrimary: "Demander un devis →",
    ctaSecondary: "Voir l'index des projets",
    avatarAlt: "Avatar Memoji de Valentin Hassenforder qui fait coucou",
    avatarTag: "AVATAR.PNG",
    figCaption: "FIG. 1 — L'auteur",
    specsLabel: "02 / Caractéristiques",
    specs: [
      { label: "Rôle", value: "Product Engineer, UX/UI" },
      { label: "Expérience", value: "6 ans en UI/UX" },
      { label: "Base", value: "Paris · remote ou sur site" },
      { label: "Langues", value: "Français, anglais" },
      { label: "Stack", value: "Figma, Next.js, React, TypeScript, Supabase, Vercel", mono: true },
      { label: "Délai type", value: "1 à 5 jours", accent: true },
    ],
  },
  index: {
    label: "03 / Réalisations",
    title: "Index des projets",
    featured: {
      kicker: "N° 01 · Projet principal",
      title: "UserShaker",
      description:
        "SaaS B2B qui stocke, structure et partage les données d'usage de produits phygitaux. Co-fondateur : j'ai conçu et codé l'app, puis mené sa migration de Bubble vers Next.js + Supabase.",
      cta: "Étude de cas — bientôt",
      imageAlt: "Le kit matériel UserShaker : trois écrans, un téléphone et des capteurs sur un panneau blanc",
    },
    columns: { number: "N°", project: "Projet", context: "Contexte", year: "Année", preview: "Aperçu" },
    rows: [
      { slug: "interfaces-cockpit", number: "02", title: "Interfaces cockpit", context: "epicnpoc · constructeur auto", year: "2022–24" },
      { slug: "eclairage-exterieur", number: "03", title: "Éclairage extérieur", context: "epicnpoc · [à préciser]", year: "[année]" },
      { slug: "retail-interactif", number: "04", title: "Retail interactif", context: "epicnpoc · CES / VivaTech", year: "[année]" },
      { slug: "coaching-triathlon", number: "05", title: "App de coaching triathlon", context: "Side project · conçue et codée seul", year: "2026" },
      { slug: "landing-pages-pme", number: "06", title: "Landing pages PME", context: "Horlogers, couvreurs, restaurateurs", year: "Freelance" },
    ],
    placeholder: "[visuel]",
  },
  formats: {
    label: "04 / Formats",
    title: "Livré en quelques jours, à prix fixe.",
    note: "Projets plus longs (MVP, refonte UX/UI, sortie du no-code, IA) : accompagnement à temps partiel.",
    items: [
      { ref: "F-01", duration: "3–5 jours", title: "Landing page ou site vitrine" },
      { ref: "F-02", duration: "1–3 jours", title: "Maquette Figma d'un parcours" },
      { ref: "F-03", duration: "1–2 jours", title: "Audit UX express" },
      { ref: "F-04", duration: "Quelques jours", title: "Prototype de web app" },
    ],
  },
  contact: {
    label: "05 / Contact",
    title: "Un projet ?",
    titleAccent: "Écrivez-moi.",
    links: [
      { label: "Email", href: `mailto:${email}` },
      { label: "LinkedIn", href: linkedin },
      { label: "Malt", href: "#" },
    ],
  },
  footer: { copyright: "© 2026 Valentin Hassenforder", end: "Fin de document" },
};
