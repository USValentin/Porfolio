# Pièges — chacun réduit à une règle

- **Next 16 ≠ Next de tes données d'entraînement.** Lis `node_modules/next/dist/docs/` avant
  d'utiliser une API. Exemple : `middleware.ts` s'appelle désormais `proxy.ts`.
- **`next dev` réécrit le bloc de `AGENTS.md`.** Committe-le tel quel plutôt que de le retirer d'un diff.
- **`next/font/google` télécharge les polices au build.** Sans accès à fonts.googleapis.com, le build
  casse. On auto-héberge avec `next/font/local` (fichiers dans `src/app/fonts/`).
