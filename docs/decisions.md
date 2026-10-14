# Journal des décisions

## À faire ensuite — agenda

- Brancher le repo sur Vercel et le domaine `valentinhassenforder.fr`
- Merger la PR `feat/accueil` après relecture sur la preview Vercel
- Coder le détail projet : modale (petits projets) + page complète (UserShaker, triathlon)
- Récupérer les vrais visuels : captures UserShaker V2, app triathlon, landing pages PME
- Préciser le contexte des projets epicnpoc « Éclairage extérieur » et « Retail interactif »

---

## 2026-10-14 — [Valentin] Socle du portfolio
- Fait : Next.js 16 + Tailwind 4 initialisé ; méthode UserShaker portée (CLAUDE.md, `/ship`, `contexte/`, journal, leçons).
- Décisions + raison : direction visuelle B « fiche technique » avec accent vert sapin, retenue sur maquettes ; détail projet en deux formats (modale + page complète) ; i18n maison FR/EN sans lib.
- Branche : `main`
- Blocages : aucun

## 2026-10-14 — [Valentin] Accueil B en FR/EN
- Fait : page d'accueil « fiche technique » (en-tête, désignation, caractéristiques, index, formats, contact) ; routes `/fr` et `/en` ; redirection `/` selon `Accept-Language` dans `src/proxy.ts`.
- Décisions + raison : contenu typé dans `src/content/{fr,en}.ts` (une clé manquante casse le build) ; polices auto-hébergées (`next/font/local`) ; seuls le rendu du kit UserShaker et l'avatar sont dans `public/` (repo public, pas de visuels presse ou clients) ; lignes de l'index non cliquables tant que le détail projet n'existe pas.
- Vérification : lint ✅, build ✅ (/fr et /en statiques), captures desktop + mobile sans débordement horizontal.
- Branche : `feat/accueil` → PR vers `main`
- Blocages : avatar en 320 px (à remplacer par une version haute résolution) ; lien Malt à renseigner.
