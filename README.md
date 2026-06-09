# @trovio/ui

Trovio's shared design system — React components, primitives, and design tokens,
with a Storybook catalog. Consumed by `creator-dashboard`, `admin-dashboard`,
`brand-dashboard` (all Next/React). Tokens are also the seed for a future iOS
export.

> Status: **v1 foundation.** A first slice of app-agnostic components is
> extracted. App-coupled components (see "Not yet extracted") still live in the
> apps.

## Run the catalog (Storybook)

```bash
npm install
npm run storybook   # → http://localhost:6007
```

Toolbar: toggle **theme** (light/dark) and **viewport** (mobile/tablet/desktop).

## Build the package

```bash
npm run build       # tsup → dist/ (ESM + CJS + .d.ts)
npm run typecheck
```

## Consume it in a dashboard (git ref to start)

1. Install from the repo (no registry yet):

   ```bash
   npm install github:welcome-compass/trovio-ui#main
   # or pin a tag/commit: github:welcome-compass/trovio-ui#v0.0.1
   ```

   The consumer must already provide the peers: `react`, `react-dom`,
   `@heroui/react`, `tailwindcss` (v4).

2. Import the tokens once, globally (e.g. in `app/layout.tsx` or your root CSS):

   ```ts
   import "@trovio/ui/tokens.css";
   ```

   This defines the brand `@theme` tokens (so `bg-trovio-primary` etc. generate)
   plus the HeroUI light/dark theme variables.

3. Tell Tailwind v4 to scan this package for class names (so its utilities get
   generated). In your app's main Tailwind CSS:

   ```css
   @source "../node_modules/@trovio/ui/dist";
   ```

4. Use it:

   ```tsx
   import { JourneyStepper, SectionHeading, TrovioBadge } from "@trovio/ui";
   ```

5. Load **Barlow** in the consumer (the components reference `--font-sans`).
   Next apps already do this via `next/font`.

## What's in v1

Tokens (`@trovio/ui/tokens` + `tokens.css`), and components:
`SectionLabel`, `SectionHeading`, `JourneyStepper`, `PillarChips`, `StatStrip`,
`LockChip`, `PlatformIcon`, `TrovioBadge`, `TrovioSpinner`.

## Not yet extracted (the "extraction tax")

These are coupled to app-specific things and need a light refactor (inject
behavior via props; drop `next/*`) before they can move:

- `PortraitHero`, `LockedFeatureCard` — use `next/image`.
- `TrovioButton` — uses `next/link` + the app's Amplitude tracker.
- `TrovioCheckbox` / `TrovioSwitch` — use the app's tracker.
- `AcquaintedDashboard` — reads the app's dashboard context (stays app-side; it
  composes primitives).
- Remaining `Trovio*` (`Card`, `Input`, `TextArea`, `Modal`, `EmptyState`,
  `ImageUpload`, `Skeleton`, `ProgressBar`) — straightforward to copy next.

## Known limitations (v1)

- **`"use client"` is stripped by the build.** All extracted components are
  client components; today they must be imported from a client component in
  consumers (the dashboards already are). Before importing them directly into
  React Server Components, add per-file directive preservation to the build
  (e.g. `esbuild-plugin-preserve-directives`) — a global banner is wrong because
  it would also mark the pure-data `tokens` entry as client.
- Consumers must load **Barlow** and provide the HeroUI peer.

## Tokens stay in sync (for now, by hand)

`src/styles/tokens.css` (web CSS) and `src/tokens/design-tokens.ts` (JS/JSON for
the catalog + future iOS export) mirror each other. The intended next step is a
token generator (**Style Dictionary**) that emits CSS + JSON + Swift from one
source, so we never hand-maintain copies.
