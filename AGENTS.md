# AGENTS.md (@trovio/ui)

Trovio's shared design system — React components, primitives, and design tokens —
consumed by `creator-dashboard`, `admin-dashboard`, and `brand-dashboard` as a
**git dependency**. See `README.md` for setup/consumption details; this file is
the "how we work + how the repo is shaped" reference.

## Branch & PR strategy

- This repo uses **`main`** as its base. The workspace `dev` → prod flow does
  **not** apply here — there is no `dev` branch. Cut feature branches off `main`
  and PR back into `main`.
- Branch naming still follows the workspace convention: `MMDD-feature-name`.
- Derrick reviews and merges.

## Releasing (versioning + auto-tagging)

Consumers pin `@trovio/ui` by **git tag** (e.g.
`github:welcome-compass/trovio-ui#v0.2.2`), so every shippable change needs a new
tag. Tagging is automated — do not create tags by hand.

The flow:

1. Make your change, then **bump `version` in `package.json`** (semver: minor for
   a new component, patch for an additive prop or a fix).
2. Run `npm run build` to regenerate `dist/`, and **commit `dist/` alongside
   `src/`**. Consumers install straight from the git ref, so the built output
   must be in the tree — there is no registry/`npm publish` step.
3. Open a PR to `main`. On merge,
   [`.github/workflows/tag-on-merge.yml`](.github/workflows/tag-on-merge.yml)
   reads the version from `package.json` and **auto-creates the matching
   `vX.Y.Z` tag + GitHub release** on the merge commit. It runs on the merge
   itself (push events use the workflow as it exists in the merged commit) and is
   **idempotent** — if the tag for the current version already exists, it does
   nothing, so a merge that doesn't bump the version is a no-op.
4. Re-pin consumers from the old tag/SHA to the new `vX.Y.Z` tag (a one-line
   `package.json` change in each dashboard).

**Prerequisite:** repo Settings → Actions → General → Workflow permissions must be
**"Read and write permissions"** so the workflow's `GITHUB_TOKEN` can create the
release/tag.

**Footgun:** never let a consumer pin a branch **SHA** long-term — a squash-merge
orphans it and breaks `npm install`. Always re-pin to a tag once it's cut. (This
is exactly why the auto-tag workflow exists.)

## Adding a component

1. Decide the tier — **primitive** (presentation-only, no analytics or app
   dependencies like `next/*`) vs **component** (composes primitives for a
   specific job). The split is reflected in the `src/index.ts` grouping.
2. Add `src/components/<name>.tsx` plus a `src/components/<name>.stories.tsx`.
   Every component — and every notable state (e.g. a `loading` variant) — gets a
   story.
3. Export the component and its prop types from `src/index.ts` in the correct
   group.
4. Typography is **Tailwind utilities** (`text-display`, `text-section`,
   `text-caption`, `text-micro`, …), not a `Text` component. Colors come from the
   `--color-trovio-*` / `--font-*` tokens.
5. `npm run typecheck && npm run build`, commit `dist/`, bump `version`, PR (see
   Releasing).

## Tokens

`src/styles/tokens.css` (web CSS) and `src/tokens/design-tokens.ts` (JS/JSON for
the catalog + future iOS export) are **hand-mirrored** for now — keep them in
sync when you touch either. Style Dictionary is the intended single-source
generator (see README).

## Checks

There is no test runner or linter in this repo today. The checks are:

- `npm run typecheck` — `tsc --noEmit`.
- `npm run build` — tsup → `dist/` (ESM + CJS + `.d.ts`). `dist/` is committed.
- `npm run storybook` — local visual catalog (`http://localhost:6007`).

Run typecheck + build before every PR, and eyeball the new component in
Storybook.
