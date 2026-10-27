# Archi — conventions et frontières

## Routes
- `/` → redirigé par `src/proxy.ts` vers `/fr` ou `/en` selon `Accept-Language` (défaut `fr`).
- `/[lang]` → accueil. `lang ∈ {fr, en}` ; toute autre valeur → 404 (`hasLocale`).
- `/[lang]/projets/[slug]` → fiche d'un petit projet (`kind: "sheet"`). Depuis l'index (navigation
  client), elle s'ouvre en **modale** via la route interceptée `@modal/(.)projets/[slug]` ; par URL
  directe ou rechargement, elle s'affiche en page complète.
- `/[lang]/etudes/[slug]` → étude de cas d'un projet phare (`kind: "case"`), toujours en page complète.
- `@modal/default.tsx` et `@modal/[...catchAll]` renvoient `null` : la modale se ferme dès qu'on quitte
  une route `projets`.

## Contenu
- `src/content/fr.ts` et `src/content/en.ts` exportent un objet du type `Content` (`src/content/types.ts`).
- `src/lib/i18n.ts` : `locales`, `defaultLocale`, `hasLocale`, `getContent(locale)`.
- Les projets (`content.projects`) ont un `slug` stable, identique dans les deux langues, un `kind`
  (`case` | `sheet`) et un `status` (`ready` | `soon`). `soon` affiche le bloc « en construction »
  (`ConstructionNotice`) au lieu d'inventer du contenu.
- Études de cas (`content.caseStudies`) : un seul gabarit, sections optionnelles (`subtitle`, `role`,
  `delivered`, `process`, `migration`, `method`, `outcome.figures`, `cta`) affichées seulement si présentes.
- Visuels des études de cas : une clé `CaseVisual` par image, importée une fois dans `src/lib/case-visuals.ts`
  (dimensions et flou automatiques). Figure sans `image` = cadre « en construction » ; `wide` = deux colonnes
  aux proportions de l'image ; `video` = fichier sous `public/videos/`, `image` servant d'affiche.
- `src/lib/projects.ts` : `projectHref`, `findProject`, `adjacentSheets`.

## Composants
- `src/components/home/*` : une section de l'accueil par fichier (Header, Hero, ProjectIndex, About — ancre `#parcours`, Formats, Contact).
- `src/components/project/*` : `Modal` (client, `<dialog>` natif), `ProjectSheet`, `ConstructionNotice`.
- `src/components/ui/*` : icônes SVG (`Icons`) et `StatusBadge`. Jamais de glyphe Unicode ou d'emoji comme icône.
- Server Components par défaut ; `"use client"` seulement là où il y a de l'interactivité.

## Styles
- Tokens dans `src/app/globals.css` (`@theme`) — voir `contexte/design.md`.
- Pas de couleur en dur dans un composant : on passe par les tokens Tailwind (`bg-ground`, `text-accent`…).
