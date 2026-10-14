---
description: Rituel pré-push — decisions.md + contexte si besoin, lint/build, commit, push, PR
---

Tu vas exécuter le rituel pré-push pour ce repo. Suis ces étapes dans l'ordre, **sans en sauter aucune**.

## 1. Entrée `docs/decisions.md`

À partir de la session (commits depuis le dernier push, fichiers modifiés, conversation), rédige une
entrée au format compact :

```markdown
## YYYY-MM-DD — [Valentin] titre court
- Fait : …
- Décisions + raison : … (si applicable)
- Branche : nom + statut
- Blocages : aucun
```

Mets aussi à jour le bloc `## À faire ensuite — agenda` en haut du fichier (✅ ce qui est fait,
ajout de ce qui est nouveau). Affiche l'entrée, attends validation, puis append.

## 2. `contexte/` doit-il bouger ?

- Nouvelle dépendance ou nouveau service → `contexte/stack.md`
- Nouvelle convention, route ou dossier de premier niveau → `contexte/archi.md`
- Nouveau token, police, couleur ou règle visuelle → `contexte/design.md`
- Changement de cible ou d'objectif du site → `contexte/projet.md`
- Piège rencontré qui a coûté du temps → `contexte/pieges.md`

Si oui, propose le diff et applique après confirmation. Sinon, skip.

## 3. Vérifications spécifiques au portfolio

Si la session a touché à l'UI :
- Tout texte visible est dans `src/content/fr.ts` **et** `src/content/en.ts`.
- Chaque animation a son `prefers-reduced-motion`.
- Les nouveaux visuels de `public/` sont libres de droits ou à Valentin (le repo est public).
- Capture desktop + mobile regardée avant de dire « fini ».

Liste les points vérifiés.

## 4. Lint + build

```bash
npm run lint
npm run build
```

Si erreurs : **stop**, corrige, ne pousse pas un build cassé.

## 5. Commit

- Stage les fichiers modifiés (incluant `contexte/` et `docs/decisions.md`).
- Propose un message `<type>: <description>` en français, attends confirmation, commit.

## 6. Push

```bash
git push
```

## 7. Pull Request

Sur une branche feature/fix (jamais depuis `main`), ouvre directement la PR vers `main` :

```bash
gh pr create --base main --title "<message du commit principal>" --body "..."
```

- Corps en français : **Pourquoi** / **Ce qui change** / **Vérification** (lint, build, captures) /
  **À tester** (sur la preview Vercel).
- Si une PR existe déjà pour la branche, donne simplement son lien.
- **Ne merge jamais** : le merge se fait par Valentin sur GitHub.

Termine en donnant le lien de la PR.

---

**Règle d'or :** un push sans update de contexte est un push incomplet. Si Valentin veut skipper
l'étape 1 ou 2, demande la raison avant d'exécuter.
