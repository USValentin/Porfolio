# Archi — conventions et frontières

## Routes
- `/` → redirigé par `src/proxy.ts` vers `/fr` ou `/en` selon `Accept-Language` (défaut `fr`).
- `/[lang]` → accueil. `lang ∈ {fr, en}` ; toute autre valeur → 404 (`hasLocale`).
- À venir : `/[lang]/projets/[slug]` (page complète) et la modale de détail pour les petits projets.

## Contenu
- `src/content/fr.ts` et `src/content/en.ts` exportent un objet du type `Content` (`src/content/types.ts`).
- `src/lib/i18n.ts` : `locales`, `defaultLocale`, `hasLocale`, `getContent(locale)`.
- Les projets ont un `slug` stable, identique dans les deux langues.

## Composants
- `src/components/home/*` : une section de l'accueil par fichier (Header, Hero, ProjectIndex, Formats, Contact, Footer).
- Server Components par défaut ; `"use client"` seulement là où il y a de l'interactivité.

## Styles
- Tokens dans `src/app/globals.css` (`@theme`) — voir `contexte/design.md`.
- Pas de couleur en dur dans un composant : on passe par les tokens Tailwind (`bg-ground`, `text-accent`…).
