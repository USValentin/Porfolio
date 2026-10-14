# Stack — choix et raisons

| Choix | Raison |
|---|---|
| Next.js 16 (App Router) | Même stack que UserShaker : pas de changement de contexte, et le site montre la maîtrise de Next. |
| React 19 | Livré avec Next 16. |
| TypeScript strict | Le contenu FR/EN est typé : une traduction manquante casse le build. |
| Tailwind CSS 4 | Tokens déclarés une fois dans `globals.css` (`@theme`), pas de CSS éparpillé. |
| `next/font/local` | Schibsted Grotesk + JetBrains Mono (variables, licence OFL, fichiers Fontsource) versionnées dans `src/app/fonts/` : pas d'appel réseau au build, pas de requête vers Google, pas de layout shift. |
| `next/image` | Formats modernes et tailles responsives pour les visuels de projets. |
| i18n maison (`src/content/*.ts` + segment `[lang]`) | Le guide i18n de Next suffit pour 2 langues ; pas de lib tant que ce n'est pas nécessaire. |
| Vercel | Déploiement et previews de PR, comme UserShaker. |

| Skills Claude `impeccable` + `web-animation-design` | Versionnés dans `.claude/skills/` (licences Apache 2.0 et MIT incluses). `PRODUCT.md` à la racine est la fiche produit lue par impeccable. Détecteur : `.claude/skills/impeccable/scripts/impeccable detect --json src`. |

Pas de base de données, pas d'auth, pas de CMS : le contenu change rarement et vit dans le repo.
