@AGENTS.md

# CLAUDE.md — Méthodologie du portfolio de Valentin

> Lu automatiquement par Claude Code à chaque session. Les fichiers référencés avec `@` sont
> **chargés automatiquement** dans le contexte, sans rien avoir à demander.
>
> Méthode reprise du repo UserShaker, allégée pour un projet solo : pas de base de données,
> pas de realtime, pas de collègue à synchroniser — mais le même rituel `/ship`.

---

## 0. Auto-chargement du contexte

@contexte/projet.md
@contexte/stack.md
@contexte/archi.md
@contexte/design.md
@contexte/pieges.md
@docs/decisions.md
@tasks/lessons.md

> ⚠️ **Cette liste est un budget, pas une étagère.** Tout ce qui est ici est chargé à chaque
> session. On n'y ajoute un fichier que s'il sert à *toutes* les sessions, et on le garde court.

**`contexte/design.md` est la source de vérité visuelle.** Toute UI respecte ses tokens. En cas
de divergence entre le code et ce fichier, flagge-la dans `docs/decisions.md` plutôt que de
choisir silencieusement un côté.

---

## 1. Le principe directeur

**Le contexte vit dans des fichiers Git, pas dans la mémoire d'une session Claude.** Chaque
session repart de `contexte/` + `docs/decisions.md` + les 20 derniers commits (hook
`SessionStart`) : rien à ré-expliquer.

> **Règle d'or :** un push sans mise à jour du contexte est un push incomplet.

---

## 2. Stack & structure

Next.js **16** + React **19** + TypeScript + Tailwind CSS 4, déployé sur Vercel. Stack récente :
**avant d'écrire du code Next/React, lis `node_modules/next/dist/docs/`** pour la version exacte
(voir `AGENTS.md`). Détail et raisons des choix : `contexte/stack.md`.

```
src/
  app/
    [lang]/              # Toutes les routes sont localisées (fr, en)
      layout.tsx         # Root layout : polices, <html lang>
      page.tsx           # Accueil
  components/            # Composants d'UI, un dossier par section si besoin
  content/               # Textes et données des projets, par langue (fr.ts, en.ts)
  lib/                   # i18n, utilitaires
  proxy.ts               # Redirection / → /fr ou /en selon Accept-Language
public/images/           # Visuels des projets (uniquement des visuels dont j'ai les droits)
contexte/                # Contexte projet auto-chargé
docs/decisions.md        # Journal vivant auto-chargé
tasks/lessons.md         # Leçons apprises, auto-chargé
.claude/                 # Config Claude partagée (versionnée)
```

### Règles d'archi
- **Aucun texte en dur dans les composants.** Tout texte visible vit dans `src/content/{fr,en}.ts`,
  typé par le même type `Content` : une clé manquante en anglais casse le build.
- **Server Components par défaut.** `"use client"` uniquement pour l'interactivité réelle
  (modale, sélecteur de langue) et au plus bas de l'arbre.
- **Pas de dépendance sans raison.** Pas de lib d'i18n, de CMS ou d'UI kit tant qu'un fichier TS suffit.
- **Accessibilité non négociable** : vrais `<a>`/`<button>`, `alt` sur les images, contraste
  4.5:1, focus visible, `prefers-reduced-motion` respecté sur chaque animation.
- **Droits sur les visuels** : le repo est public. Pas de photo presse, de banque d'images ou de
  visuel client confidentiel dans `public/`.

---

## 3. Méthode de travail (non négociable)

### 3.1 Plan mode par défaut
- Plan mode pour **toute tâche non triviale** (3+ étapes ou décision d'archi).
- Si ça dérape : **STOP et re-plan**. On ne pousse pas dans le mur.

### 3.2 Vérification avant « done »
- **Jamais de tâche marquée finie sans preuve** : lint, build, et pour l'UI une capture desktop
  **et** mobile.
- Question test : *« Est-ce qu'un staff engineer validerait ça ? »*

### 3.3 Subagents pour rester focus
- Recherche, exploration, revue → subagent. Un subagent = une tâche.

### 3.4 Demand elegance (équilibré)
- Sur du non trivial : *« y a-t-il une façon plus élégante ? »* Skip pour les fixes évidents.

### 3.5 Bug fixing autonome
- Bug signalé = bug corrigé. Pointe les logs et erreurs, puis résous. Pas de hand-holding.

### 3.6 Boucle d'auto-amélioration
- Après une correction de Valentin : **ajoute la règle dans `tasks/lessons.md`**.

### 3.7 Principes
- **Simplicité d'abord**, **root cause** plutôt que contournement, **impact minimal**.

### 3.8 Design et animations
- Skills de référence : **impeccable** (qualité d'interface) et **web-animation-design** (easing,
  durées). Animer seulement `transform` et `opacity`, `ease-out` pour les entrées, < 300 ms en UI,
  `prefers-reduced-motion` partout.

---

## 4. `contexte/` — base stable

- `projet.md` — pourquoi ce site, pour qui, ce qu'il doit déclencher.
- `stack.md` — choix techniques et leur raison.
- `archi.md` — conventions, routes, frontières.
- `design.md` — direction B « fiche technique » : tokens, typo, règles.
- `pieges.md` — pièges déjà rencontrés, réduits à une règle.

À mettre à jour seulement quand une décision **structurante** change.

---

## 5. `docs/decisions.md` — journal vivant (format compact)

```markdown
## YYYY-MM-DD — [Valentin] titre court
- Fait : …
- Décisions + raison : …
- Branche : nom + statut
- Blocages : aucun
```

- Mis à jour **avant chaque push** (rituel `/ship`).
- Un seul bloc `## À faire ensuite — agenda` en haut du fichier, mis à jour à chaque entrée.
- Au-delà de ~40 Ko : promouvoir le durable vers `contexte/`, archiver le reste verbatim dans
  `docs/decisions/<année>-Q<n>.md`.

---

## 6. Branches, commits, déploiement

- `main` → toujours déployable, branché sur Vercel (production).
- `feat/<nom>`, `fix/<nom>`, `chore/<nom>` → une branche par sujet, PR vers `main`.
- Commits : `<type>: <description>` en français (`feat: page d'accueil`, `fix: contraste du footer`).
- Chaque PR a une preview Vercel : c'est là qu'on fait le smoke test avant merge.
- Merge par Valentin uniquement, sur GitHub.

---

## 7. Rituel pré-push `/ship`

1. Entrée dans `docs/decisions.md` (+ agenda à jour).
2. `contexte/` mis à jour si décision structurante.
3. `npm run lint && npm run build` — un build cassé ne se pousse pas.
4. Commit incluant contexte et journal.
5. Push, puis PR vers `main` (jamais de merge automatique).

Détail : `.claude/commands/ship.md`.
