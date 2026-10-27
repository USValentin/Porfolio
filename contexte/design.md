# Design — direction B « fiche technique »

Le portfolio se lit comme la fiche technique d'un composant : désignation, caractéristiques,
index numéroté, références F-01… Sobre, précis, « tech ».

## Couleurs (tokens `@theme` dans `globals.css`)
| Token | Valeur | Usage |
|---|---|---|
| `ground` | `#E8E9EB` | Fond de page (gris froid, jamais crème) |
| `ink` | `#121316` | Texte principal, sections sombres, filets forts |
| `muted` | `#4A4D55` | Labels, métadonnées (7:1 sur `ground`) |
| `rule` | `#B9BCC2` | Filets secondaires |
| `hover` | `#DDDFE3` | Survol des lignes d'index |
| `accent` | `#1F5A44` | Vert sapin : accent sur fond clair |
| `accent-soft` | `#9CD3B4` | Vert clair : accent sur fond `ink` |
| `ink-muted` | `#A9ADB5` | Labels sur fond `ink` |

Une seule couleur d'accent (vert sapin). Pas de dégradé, pas d'ombre décorative, pas d'emoji.

## Typographie
- **Schibsted Grotesk** (400/500/700/800) : titres et texte. Titres en 800, interlettrage négatif.
- **JetBrains Mono** (400/500) : labels, références, métadonnées, en capitales 11-12 px.

## Signatures
- Numérotation des sections `01 / DÉSIGNATION`, `02 / CARACTÉRISTIQUES`…
- Tableaux à filets (`border-top` ink sur la 1re ligne, `rule` ensuite).
- Avatar Memoji présenté comme une figure (`FIG. 1`) avec repères d'angle.

## Mouvement (skill web-animation-design)
- Uniquement `transform` et `opacity`. Survol : `150ms ease`. Clic bouton : `scale(0.97)` en 140 ms.
- Survol seulement sur `(hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion: reduce` → aucune transition.
- Vidéo : jamais en lecture automatique. `<video controls preload="none">` avec une affiche : rien ne bouge
  ni ne se télécharge avant le clic du visiteur.

## Statut « en construction »
- Tout projet `status: "soon"` porte un badge `En construction` (point vert qui pulse, figé en
  reduced motion) dans l'index, et un bloc en pointillés `Fiche en construction` + CTA mail dans sa fiche.
- Les visuels manquants d'une étude de cas sont des cadres en pointillés libellés, jamais des images inventées.

## Modale
- `<dialog>` natif, 760 px max, fond `ground`, backdrop `ink` à 62 %.
- Entrée : `opacity` + `translateY(8px) scale(0.98)` → 220 ms `ease-out-quint`. Pas d'animation de sortie
  (la fermeture est un retour d'historique). Aucune animation en reduced motion.

## Responsive
- Mobile d'abord. Le tableau d'index devient une liste empilée sous 768 px.
- Gouttière 16 px sur mobile, 32 px au-delà ; conteneur max 1376 px.
