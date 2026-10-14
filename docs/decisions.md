# Journal des décisions

## À faire ensuite — agenda

- ✅ Repo branché sur Vercel (https://valentinhassenforder.vercel.app) — reste le domaine `valentinhassenforder.fr`
- ✅ PR `feat/accueil` mergée (PR #1)
- Merger la PR `feat/detail-projet` après test de la modale et de la section Parcours (desktop + mobile) sur la preview Vercel
- Préciser l'année de début du freelance (ligne Rév. 06 du parcours, affichée « Auj. »)
- Clients anonymes pendant la création des fiches ; décider plus tard si on les nomme (projets publics) — UserShaker : clients nommés (Renault, Mercedes, Rubika), décidé le 14/10/2026
- Rédiger les fiches « en construction » : cockpit, éclairage, démonstrateur auto, triathlon (+ étude de cas complète), landing pages PME
- Résultat de l'étude de cas UserShaker (section 04) + captures de l'app V2
- Memoji haute résolution (≥ 1000 px)
- Section Parcours : fournir le CV en PDF pour ajouter le bouton « Télécharger le CV » de la maquette
- Récupérer les vrais visuels : captures UserShaker V2, app triathlon, landing pages PME
- Préciser le contexte du projet epicnpoc « Éclairage extérieur » (« Démonstrateur auto » = simulateur de conduite epicnpoc pour le CES 2024, logiciel BOWL)

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

## 2026-10-14 — [Valentin] Détail des projets : modale + étude de cas
- Fait : modale des petits projets par route interceptée (`@modal/(.)projets/[slug]`, `<dialog>` natif, URL partageable, Échap / retour ferment) ; page complète équivalente par URL directe ; étude de cas UserShaker `/[lang]/etudes/usershaker` ; statut « en construction » sur les fiches incomplètes ; lien Malt ; skills impeccable + web-animation-design versionnés ; `PRODUCT.md`.
- Décisions + raison : contenu incomplet signalé « en construction » plutôt qu'inventé (demande de Valentin) ; clients anonymisés tant que les fiches sont en création (Valentin) ; flèches Unicode remplacées par des icônes SVG (impeccable) ; sélection, caret et scrollbar thémés.
- Vérification : lint ✅, build ✅ (17 pages statiques), `impeccable detect` : 0 alerte, parcours modale testé (ouverture, suivant, Échap → `/fr`), captures desktop + mobile sans débordement.
- Branche : `feat/detail-projet` → PR vers `main`
- Blocages : aucun

## 2026-10-14 — [Valentin] Section Parcours + corrections des projets
- Fait : section « Parcours » sur l'accueil (04 À propos, 05 Historique des révisions, 06 Formation) d'après la maquette, lien « Parcours » dans le menu, Formats → 07 et Contact → 08 ; clients de l'étude de cas UserShaker nommés (Renault, Mercedes, Rubika) ; projet « Retail interactif » remplacé par « Démonstrateur auto » (simulateur de conduite epicnpoc, CES 2024, logiciel BOWL ; slug `demonstrateur-auto`) ; ligne freelance ajoutée en tête des postes.
- Décisions + raison : bouton « Télécharger le CV » de la maquette pas intégré tant qu'il n'y a pas de PDF (pas de lien mort) ; « OpenAI API » remplacé par « IA générative » (terme plus général) ; saut de ligne dans la bio via `\n` + `whitespace-pre-line`.
- Vérification : lint ✅, build ✅ ; captures non faites (serveur local non accessible) → à regarder sur la preview Vercel.
- Branche : `feat/detail-projet` → PR vers `main`
- Blocages : année de début du freelance à préciser ; CV PDF à fournir.
