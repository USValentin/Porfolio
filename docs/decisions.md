# Journal des décisions

## À faire ensuite — agenda

- ✅ Repo branché sur Vercel (https://valentinhassenforder.vercel.app) — reste le domaine `valentinhassenforder.fr`
- ✅ PR `feat/accueil` mergée (PR #1)
- ✅ PR `feat/detail-projet` mergée (PR #2)
- Préciser l'année de début du freelance (ligne Rév. 06 du parcours, affichée « Auj. ») — le CV indique « nov. 2025 », à reporter si Valentin valide
- Clients anonymes pendant la création des fiches ; décider plus tard si on les nomme (projets publics) — UserShaker : clients nommés (Renault, Mercedes, Rubika), décidé le 14/10/2026
- Étude de cas Dromo + CV : PR `feat/etude-dromo` ouverte — tester sur la preview Vercel, puis merger
- Dromo : nom et marque pas encore déposés (INPI) — page discrète, « Dromo » seulement en sous-titre (Valentin)
- Rédiger les fiches « en construction » : cockpit, éclairage, démonstrateur auto, landing pages PME
- Résultat de l'étude de cas UserShaker (section 04) + captures de l'app V2
- Memoji haute résolution (≥ 1000 px)
- ✅ CV téléchargeable FR/EN — numéro de portable publié, validé par Valentin le 27/10/2026
- Récupérer les vrais visuels : captures UserShaker V2, landing pages PME
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

## 2026-10-27 — [Valentin] Étude de cas Dromo
- Fait : Dromo remplace « App de coaching triathlon » (N° 05, slug `dromo`, `kind: "case"`, `status: "ready"`) ; étude de cas `/[lang]/etudes/dromo` en FR/EN centrée sur la méthode : contexte, rôle, démarche en 5 étapes (recherche, parcours utilisateurs, DA, design system et motion, plan de développement) avec figures, pilotage des agents, 4 chiffres au 27/10/2026 ; gabarit d'étude de cas généralisé (sections `role`, `process`, `method`, résultats chiffrés optionnels, `delivered` et `migration` optionnels, visuels via `src/lib/case-visuals.ts`, cadre `VisualFrame` partagé) ; lignes « étude de cas » de l'index sans `scroll={false}` (sinon la page s'ouvre au milieu).
- Décisions + raison : Dromo pas encore sur le marché → page discrète sur le produit, centrée sur la façon de travailler, peu de chiffres (Valentin) ; nom « Dromo » gardé (Valentin) ; planche des 4 pistes de logo rendue depuis les SVG du dépôt ; 4 wireframes (semaine type, aujourd'hui, imprévu, bilan — persona Nadia) rendus depuis le dépôt, les écrans « Parcours » et « Plan semaine » écartés car ils citent des courses réelles (IRONMAN 70.3 Les Sables-d'Olonne, Ironman) ; les 3 directions de DA rendues depuis l'artifact « DA — directions explorées » (écrans « Aujourd'hui » A, B, C) ; figures larges (`wide`) sur deux colonnes à leurs proportions ; film de motion en cadre « en construction » (une vidéo ne sort que par Export sur la page du film) ; dépôt Dromo privé → seulement des captures du design system recadrées (`public/images/dromo/`, tirées de `packages/ui/demo/captures/` sur `origin/main`), données d'exemple, aucune course réelle ni nom réel ; chiffres et méthode repris tels quels de `claude/dromo-sources-portfolio.md` (Dromo), rien d'inventé ; page UserShaker inchangée.
- Vérification : lint ✅, build ✅ (17 pages statiques, dont `/fr/etudes/dromo` et `/en/etudes/dromo`), `impeccable detect` : 0 alerte ; captures Playwright desktop 1440 + mobile 390 (FR, EN, et UserShaker pour la non-régression), 0 px de débordement horizontal.
- Retouches de Valentin : fiche réduite à Rôle « Product Owner · Product Engineer », Période « 2026 » (surtitre aligné), Stack, Statut « En développement » (ligne Équipe retirée) ; contexte : le premier prototype était l'usage perso de Valentin (ce modèle de coaching appliqué via un LLM), productisé faute d'app assez flexible.
- Film de motion : export MP4 fourni par Valentin (1280 × 720, 36,5 s, 3,7 Mo, avec bande-son) copié dans `public/videos/dromo-motion.mp4` ; FIG. 05.9 en `<video controls preload="none">`, sans lecture automatique (rien ne bouge sans action du visiteur, pause toujours possible, rien n'est téléchargé avant le clic), affiche = dernière image du film (`public/images/dromo/motion-poster.jpg`) ; contenu vérifié image par image (persona fictive, montre générique, « données illustratives ») ; lecture testée dans Chrome.
- Planche des logos recomposée en format large (2400 × 720, 2 × 2) et passée en figure `wide` : même largeur que les planches du dessus, sans vide à droite (Valentin).
- Titre : « Coach d'endurance » / « Endurance coach » (index, page, onglet), « Dromo » en sous-titre (nouveau champ `subtitle` des études de cas) et dans le contexte de l'index (« Dromo · PWA ») — « Dromo » seul ne parle pas et le projet reste discret (Valentin) ; slug `dromo`, visuels et mentions dans le texte inchangés.
- Chiffres : « 17 pull requests fusionnées » (peu parlant hors dev, Valentin) remplacé par « 8 j de travail prévu, fait en 2 jours » (source : 8 jours de stories faits en 2 jours calendaires) ; « 4 j du brief au sprint 0 » (déjà dit par le titre de la section) remplacé par « 3 directions artistiques explorées ».
- Section « 06 / Bêta » en fin d'étude (nouveau champ `cta` des études de cas) : « Envie de devenir bêta-testeur ? » + bouton mailto avec l'objet « Bêta-test — coach d'endurance » (Valentin). Chiffres alignés en haut de leur case (`justify-end` sur la colonne inversée) : sur mobile, un libellé sur deux lignes décalait la valeur.
- Branche : `feat/etude-dromo` → PR vers `main`
- Blocages : nom Dromo non déposé à l'INPI (page discrète, nom en sous-titre seulement).

## 2026-10-27 — [Valentin] CV téléchargeable
- Fait : bouton secondaire « Télécharger le CV (PDF) » / « Download my CV (PDF) » en bas de la colonne gauche de « 04 / À propos », comme prévu par la maquette ; chaque langue sert son CV (`public/cv-valentin-hassenforder.pdf` et `public/cv-valentin-hassenforder-en.pdf`, copiés depuis `Portfolio/CV/…_10-2026*.pdf`) ; icône SVG `DownloadIcon` ; clé `about.cv` dans le contenu.
- Décisions + raison : attribut `download` pour un téléchargement direct ; survol seulement sur pointeur fin, `scale(0.97)` au clic (design.md) ; le proxy ignore déjà les fichiers à extension, pas de redirection des PDF.
- Vérification : lint ✅, build ✅, `impeccable detect` : 0 alerte ; Playwright : bouton FR et EN en desktop + mobile, PDF servis en 200 `application/pdf`, téléchargement déclenché.
- Branche : `feat/etude-dromo` → PR vers `main` (commit séparé de l'étude de cas Dromo)
- Blocages : aucun — les PDF contiennent le numéro de portable, publication validée par Valentin.
