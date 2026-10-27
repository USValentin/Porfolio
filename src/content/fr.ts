import type { Content } from "./types";

const email = "valentinhassenforder@gmail.com";
const linkedin = "https://www.linkedin.com/in/valentin-hassenforder-b2198214a/";
const malt = "https://www.malt.fr/profile/valentinhassenforder";

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
      { href: "#parcours", label: "Parcours" },
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
    ctaPrimary: "Demander un devis",
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
      cta: "Lire l'étude de cas",
      imageAlt: "Le kit matériel UserShaker : trois écrans, un téléphone et des capteurs sur un panneau blanc",
    },
    columns: { number: "N°", project: "Projet", context: "Client · contexte", year: "Année", status: "Statut" },
    statusReady: "Disponible",
    statusSoon: "En construction",
  },
  projects: [
    {
      slug: "usershaker",
      number: "01",
      title: "UserShaker",
      client: "UserShaker",
      context: "SaaS B2B · co-fondateur",
      year: "2024 —",
      kind: "case",
      status: "ready",
      summary:
        "SaaS B2B qui stocke, structure et partage les données d'usage de produits phygitaux. Co-fondateur : j'ai conçu et codé l'app, puis mené sa migration de Bubble vers Next.js + Supabase.",
    },
    {
      slug: "interfaces-cockpit",
      number: "02",
      title: "Interfaces cockpit",
      client: "Constructeur automobile",
      context: "epicnpoc",
      year: "2022–24",
      kind: "sheet",
      status: "soon",
      summary:
        "Interfaces sur mesure pour un constructeur automobile, prototypées en environnement immersif pour être testées avant développement.",
      role: "UI Designer",
      tools: "Figma · prototypage",
    },
    {
      slug: "eclairage-exterieur",
      number: "03",
      title: "Éclairage extérieur",
      client: "Équipementier automobile",
      context: "epicnpoc",
      year: "2022–24",
      kind: "sheet",
      status: "soon",
      summary: "Une expérience lumineuse extérieure pour un équipementier automobile.",
      role: "UI Designer",
    },
    {
      slug: "demonstrateur-auto",
      number: "04",
      title: "Démonstrateur auto",
      client: "epicnpoc",
      context: "CES 2024",
      year: "2024",
      kind: "sheet",
      status: "soon",
      summary:
        "Un simulateur de conduite interactif pour montrer les capacités du logiciel BOWL d'epicnpoc au CES 2024. J'ai pensé la démo, du parcours de l'expérience au design des interfaces.",
      role: "UX/UI Designer",
    },
    {
      slug: "dromo",
      number: "05",
      title: "Coach d'endurance",
      client: "Projet personnel",
      context: "Dromo · PWA",
      year: "2026",
      kind: "case",
      status: "ready",
      summary:
        "Un coach d'endurance conçu avec des équipes d'agents IA : recherche, parcours utilisateurs, direction artistique et plan de développement en quatre jours.",
    },
    {
      slug: "landing-pages-pme",
      number: "06",
      title: "Landing pages PME",
      client: "Horlogers, couvreurs, restaurateurs",
      context: "Freelance · Paris",
      year: "—",
      kind: "sheet",
      status: "soon",
      summary: "Des landing pages pour des PME parisiennes, en ligne en quelques jours.",
      role: "Design et développement",
    },
  ],
  construction: {
    tag: "Statut : en rédaction",
    title: "Fiche en construction",
    body: "Je finalise le contenu de ce projet : visuels, contexte et résultats arrivent très vite. En attendant, je vous en parle volontiers.",
    cta: "Me poser une question sur ce projet",
  },
  sheet: {
    close: "Fermer",
    backToIndex: "Index des projets",
    labels: { client: "Client", context: "Contexte", year: "Période", role: "Rôle", tools: "Outils" },
    numberPrefix: "N°",
    previous: "Projet précédent",
    next: "Projet suivant",
  },
  caseStudies: [
    {
      slug: "usershaker",
      kicker: "N° 01 · SaaS B2B · 2024 — aujourd'hui",
      image: "usershaker-kit",
      title: "UserShaker",
      lead: "Une plateforme pour stocker, structurer et partager les données d'usage de produits phygitaux. Je l'ai conçue et codée, de la V1 no-code à la V2 en Next.js.",
      specs: [
        { label: "Rôle", value: "Co-fondateur, Product Engineer" },
        { label: "Clients", value: "Renault, Mercedes, Rubika" },
        { label: "Contexte", value: "Incubé à EuraTechnologies, lauréat Techinnov" },
        { label: "Stack", value: "Figma · Next.js · TypeScript · Prisma · Supabase · Vercel · OpenAI", mono: true },
      ],
      imageAlt: "Le kit matériel UserShaker : trois écrans, un téléphone et des capteurs sur un panneau blanc",
      figCaption: "FIG. 01.1 — Le kit UserShaker",
      problem: {
        label: "01 / Le problème",
        statement: "Dans l'industrie, tout est modélisé — la forme, la mécanique, le logiciel — sauf l'usage.",
        body: "Les équipes design, ingénierie et produit décrivent l'expérience utilisateur dans des slides et des documents éparpillés. UserShaker en fait une donnée structurée, partagée et exploitable par tous.",
      },
      delivered: {
        label: "02 / Ce qui a été livré",
        items: [
          { title: "Éditeur de parcours collaboratif", body: "Drag & drop et courbes d'émotion par persona, en temps réel.", visual: "Capture de l'éditeur" },
          { title: "Partage, rôles et permissions", body: "Projets partagés entre équipes, flux d'activité en temps réel.", visual: "Capture du partage" },
          { title: "Abonnements multi-plans", body: "Quotas et accès aux fonctionnalités selon le plan.", visual: "Capture des plans" },
          { title: "IA générative et import Excel", body: "Création assistée, ou import sans IA pour les clients les plus confidentiels.", visual: "Capture de l'import" },
        ],
      },
      migration: {
        label: "03 / La migration",
        statement: "Sortir du no-code sans casser la production.",
        before: { tag: "V1", title: "Bubble.io", body: "Pour valider le produit vite avec les premiers clients." },
        after: {
          tag: "V2",
          title: "Next.js · Supabase · Prisma",
          body: "Code maintenable, données migrées table par table dans l'ordre de leurs dépendances.",
        },
      },
      outcome: { label: "04 / Ce que ça a changé" },
    },
    {
      slug: "dromo",
      kicker: "N° 05 · Projet personnel · 2026",
      title: "Coach d'endurance",
      subtitle: "Dromo",
      lead: "Comment j'ai mené la conception d'un coach d'endurance avec des équipes d'agents IA : recherche, parcours utilisateurs, direction artistique, plan de développement.",
      specs: [
        { label: "Rôle", value: "Product Owner · Product Engineer" },
        { label: "Période", value: "2026" },
        { label: "Stack", value: "Next.js · React · TypeScript · Supabase · Vercel", mono: true },
        { label: "Statut", value: "En développement", accent: true },
      ],
      image: "dromo-cover",
      imageAlt: "La même carte de séance vélo, « Endurance et 4 accélérations », affichée dans les trois thèmes de Dromo : jour, soir et séance",
      figCaption: "FIG. 05.1 — Une carte de séance, trois thèmes : jour, soir, séance. Données d'exemple.",
      problem: {
        label: "01 / Le contexte",
        statement: "D'un usage perso avec un LLM à un vrai produit.",
        body: "Le premier prototype, c'était mon propre usage : j'appliquais déjà ce modèle de coaching à mon entraînement, simplement en échangeant avec un LLM. Ne trouvant aucune app assez flexible, j'ai voulu en faire un produit.\nDromo prépare une saison de triathlon ou de course à pied, l'adapte chaque semaine et explique ses choix. Cette étude montre surtout la façon de travailler, de la recherche au plan de développement.",
      },
      role: {
        label: "02 / Mon rôle",
        statement: "Les agents produisent, je cadre et je tranche.",
        body: "J'ai porté le produit de bout en bout : le brief, chaque choix produit, la direction artistique, la relecture. La recherche, le design et le code ont été produits par des équipes d'agents IA qui travaillaient en parallèle.",
      },
      process: {
        label: "03 / La démarche",
        statement: "Cinq étapes, chacune validée avant de passer à la suivante.",
        stepPrefix: "Étape",
        steps: [
          {
            title: "Recherche",
            body: "Des équipes d'agents ont étudié en parallèle la concurrence, le marché, la science de l'entraînement, l'UX et l'architecture technique : 27 rapports. Un rapport de vérification indépendant a ensuite corrigé le dossier, notamment le vocabulaire réglementé : performance et bien-être, jamais de diagnostic.",
          },
          {
            title: "Parcours utilisateurs",
            body: "Les parcours clés (première installation, plan de la semaine, séance du jour, imprévu, bilan) ont été posés en wireframes, puis retravaillés au fil de mes corrections. Les exemples réels ont été remplacés par des personas fictifs.",
            figures: [
              {
                caption: "FIG. 05.2 — Quatre wireframes du parcours : semaine type, aujourd'hui, imprévu, bilan. Persona fictive.",
                image: "dromo-wireframes",
                alt: "Quatre wireframes en noir et blanc : la semaine type avec un jour de repos choisi, l'écran Aujourd'hui de la persona Nadia, un imprévu qui réorganise la semaine, et le bilan de la semaine",
                wide: true,
              },
            ],
          },
          {
            title: "Direction artistique",
            body: "Une veille des apps du secteur a d'abord listé les codes à éviter : noir profond et néon, orange, anneaux et scores, feux tricolores. Trois directions ont été explorées sur les territoires restés libres ; la B, « Profil d'étape », raconte la saison comme le roadbook d'une course. Quatre pistes de logo ont suivi, et « Ligne de saison » a été retenue.",
            figures: [
              {
                caption: "FIG. 05.3 — La même séance dans les trois directions : A « Plein Soleil », B « Profil d'étape » (retenue), C « Couleurs de club »",
                image: "dromo-directions",
                alt: "Trois écrans Aujourd'hui côte à côte : A en fond clair, jaune balise et capitales condensées ; B en vert papier carte avec courbes de niveau et profil de séance ; C en fond sombre avec aplats corail et pilules",
                wide: true,
              },
              {
                caption: "FIG. 05.4 — Les quatre pistes de logo ; « Ligne de saison », en haut à gauche, est retenue",
                image: "dromo-logos",
                alt: "Les quatre pistes de logo Dromo : Ligne de saison, Isolignes, Borne et Tulipe",
                wide: true,
              },
            ],
          },
          {
            title: "Design system et motion",
            body: "La direction retenue est devenue un design system de 15 composants en React, dans trois thèmes : jour, soir et séance. Une spécification du mouvement fixe la règle : la donnée se dessine, un seul mouvement à la fois, sans rebond ni confettis.",
            figures: [
              {
                caption: "FIG. 05.5 — Profil de saison",
                image: "dromo-saison",
                alt: "Profil d'une saison de 20 semaines : volume hebdomadaire, phases, une course B, la course A et un repère « Tu es ici »",
              },
              {
                caption: "FIG. 05.6 — Carte de séance, thème séance",
                image: "dromo-seance",
                alt: "Carte de séance home-trainer « Seuil 3 × 12 min » : profil des blocs, cibles en watts par zone et ligne « Pourquoi »",
              },
              {
                caption: "FIG. 05.7 — Choix des jours de repos",
                image: "dromo-repos",
                alt: "Sélecteur des jours de repos : conseil d'au moins 2 jours, mercredi et dimanche choisis",
              },
              {
                caption: "FIG. 05.8 — Carte de changement, thème soir",
                image: "dromo-changement",
                alt: "Carte de changement en thème soir : le seuil passe de jeudi à samedi, avec la raison et un bouton Annuler",
              },
              {
                caption: "FIG. 05.9 — Le film de motion (36 s) : chaque interaction à vitesse réelle, avec son relevé d'étapes. Données illustratives.",
                image: "dromo-motion-poster",
                video: "/videos/dromo-motion.mp4",
                alt: "Film de motion de Dromo : démarrage du logo, chargement, profil de saison, replanification de la semaine, envoi sur la montre et séance validée",
                wide: true,
              },
            ],
          },
          {
            title: "Plan de développement",
            body: "Un backlog en épics, stories, critères d'acceptation et sprints, puis un découpage en couloirs : chaque agent code contre des contrats de données figés, sur sa propre branche, dans sa propre pull request. Le contexte partagé vit dans Git et se recharge à chaque session.",
          },
        ],
      },
      method: {
        label: "04 / Piloter les agents",
        statement: "Des agents IA, encadrés comme une vraie équipe produit.",
        steps: [
          {
            title: "Des décisions par questionnaires",
            body: "Chaque choix produit passe par un questionnaire court. Chaque réponse est consignée et datée dans un journal de décisions, avec son « pourquoi ».",
          },
          {
            title: "Des itérations guidées par mes corrections",
            body: "Chaque livrable est relu. Mes corrections deviennent des règles que les agents appliquent ensuite, comme les personas fictifs à la place des exemples réels.",
          },
          {
            title: "Des garde-fous mesurables",
            body: "Plans de référence verrouillés, centaines de profils testés chaque nuit, erreurs introduites exprès pour prouver que chaque test les attrape.",
          },
          {
            title: "Une seule personne fusionne",
            body: "Un agent indépendant relit les pull requests importantes. Je relis et je fusionne seul.",
          },
        ],
      },
      outcome: {
        label: "05 / En chiffres",
        statement: "Quatre jours, de la feuille blanche au premier sprint.",
        figures: [
          { value: "3", label: "Directions artistiques explorées" },
          { value: "27", label: "Rapports de recherche" },
          { value: "8 j", label: "De travail prévu, fait en 2 jours" },
          { value: "≈ 780", label: "Tests automatisés" },
        ],
        note: "Chiffres au 27 octobre 2026. Dromo n'est pas encore lancé : les visuels sont des extraits du design system, avec des données d'exemple.",
      },
      cta: {
        label: "06 / Bêta",
        title: "Envie de devenir bêta-testeur ?",
        body: "Vous préparez un triathlon ou une course à pied ? Écrivez-moi pour faire partie des premiers à tester l'app.",
        action: "Devenir bêta-testeur",
        subject: "Bêta-test — coach d'endurance",
      },
    },
  ],
  caseNav: { backToIndex: "Index des projets", nextProject: "Projet suivant", caseLabel: "Étude de cas" },
  about: {
    label: "04 / À propos",
    statement: "Designer de formation, devenu Product Engineer.",
    body: "Six ans d'UI/UX, d'abord en agence et en alternance, puis dans l'automobile chez epicnpoc, où j'ai dessiné des interfaces pour des constructeurs et des démos présentées au CES et à VivaTech.\nAujourd'hui co-fondateur de UserShaker, je conçois et je code le produit de bout en bout.",
    toolsLabel: "Outils du quotidien",
    tools: ["Next.js", "React", "TypeScript", "Supabase", "Prisma", "IA générative", "Figma", "Bubble.io"],
    offScreenLabel: "Hors écran",
    offScreen: "Triathlon, nautisme, cinéma.",
    cv: { label: "Télécharger le CV (PDF)", href: "/cv-valentin-hassenforder.pdf" },
    revisions: {
      label: "05 / Historique des révisions",
      columns: { rev: "Rév.", period: "Période", role: "Poste", org: "Organisation" },
      items: [
        { rev: "Rév. 06", period: "Auj.", role: "Product Engineer UX/UI, freelance", org: "Indépendant" },
        { rev: "Rév. 05", period: "2024 — auj.", role: "Co-fondateur & Product Engineer", org: "UserShaker" },
        { rev: "Rév. 04", period: "2022 — 2024", role: "UI Designer, alternance puis CDI", org: "epicnpoc" },
        { rev: "Rév. 03", period: "2021 — 2022", role: "Web Designer, alternance", org: "Paris Beauté" },
        { rev: "Rév. 02", period: "2019 — 2021", role: "Assistant Web Designer, alternance", org: "Cyra-Lydo" },
        { rev: "Rév. 01", period: "2019", role: "Web Designer, stage", org: "Duc Oger" },
      ],
    },
    education: {
      label: "06 / Formation",
      items: [
        { period: "2021 — 2023", title: "Mastère Stratégie & communication digitale", school: "ECV Digital" },
        { period: "2018 — 2021", title: "Bachelor Webdesign", school: "ICAN" },
        { period: "2017 — 2018", title: "Design & communication visuelle", school: "intuit.lab" },
      ],
    },
  },
  formats: {
    label: "07 / Formats",
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
    label: "08 / Contact",
    title: "Un projet ?",
    titleAccent: "Écrivez-moi.",
    email,
    links: [
      { label: "Email", href: `mailto:${email}` },
      { label: "LinkedIn", href: linkedin },
      { label: "Malt", href: malt },
    ],
  },
  footer: { copyright: "© 2026 Valentin Hassenforder", end: "Fin de document" },
};
