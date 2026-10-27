# Pièges — chacun réduit à une règle

- **Next 16 ≠ Next de tes données d'entraînement.** Lis `node_modules/next/dist/docs/` avant
  d'utiliser une API. Exemple : `middleware.ts` s'appelle désormais `proxy.ts`.
- **`next dev` réécrit le bloc de `AGENTS.md`.** Committe-le tel quel plutôt que de le retirer d'un diff.
- **Modale par route interceptée : prévoir `@modal/[...catchAll]` qui renvoie `null`.** Sinon la modale
  reste affichée après une navigation vers une route que le slot n'intercepte pas.
- **Liens dans la modale en `replace`.** Sinon « précédent / suivant » empile l'historique et le retour
  arrière ne ferme plus la modale.
- **`next/font/google` télécharge les polices au build.** Sans accès à fonts.googleapis.com, le build
  casse. On auto-héberge avec `next/font/local` (fichiers dans `src/app/fonts/`).
- **Capture pleine page = images floues.** `next/image` charge en différé : une capture Playwright prise sans
  défiler montre les placeholders. Faire défiler toute la page avant de capturer.
- **Capturer un site du dépôt Dromo ou d'un artifact : vérifier chaque écran.** Les wireframes « Parcours »
  et « Plan semaine » citent des courses réelles ; seuls les personas fictifs vont dans le repo public.
