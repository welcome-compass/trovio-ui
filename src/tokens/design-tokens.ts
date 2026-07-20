/**
 * Trovio Design Tokens — canonical, platform-agnostic source of truth.
 *
 * These values MIRROR the CSS custom properties in `styles/globals.css` (the
 * `@theme` block + the `:root`/`.dark` HeroUI theme vars). Web styling is still
 * driven by those CSS variables; this module is the data the design-system
 * showcase renders from AND the seed for a cross-platform export (JSON → iOS /
 * Android).
 *
 * KEEP IN SYNC with globals.css until we introduce a generator (Style
 * Dictionary) that emits CSS + JSON + Swift from one source. Until then, treat
 * this file as the spec and globals.css as the web implementation.
 *
 * `as const` keeps the literal types for the showcase + future codegen.
 */

export const brandColors = {
  "primary-dark": "#000066",
  primary: "#6666FF",
  "primary-light": "#E1E128",
  "secondary-1": "#FF99FF",
  "secondary-2": "#FF3366",
  "secondary-3": "#FF9933",
} as const;

export const semanticColors = {
  success: "#3EBA64",
  warning: "#FFB800",
  error: "#FF3366",
  info: "#3E89BA",
} as const;

export const lightColors = {
  bg: "#F1F1FA",
  surface: "#FFFFFF",
  border: "#E5E7EB",
  text: "#1B1B28",
  "text-muted": "rgba(27, 27, 40, 0.7)",
} as const;

export const darkColors = {
  bg: "#161623",
  surface: "#1E1E2E",
  border: "#2D2D44",
  text: "#FFFFFF",
  "text-muted": "rgba(255, 255, 255, 0.7)",
} as const;

export const radius = {
  base: "0.5rem", // --radius
  field: "0.75rem", // --field-radius
  lg: "0.75rem", // --radius-lg
} as const;

export const shadow = {
  sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  lg: "0px 10px 15px rgba(0, 0, 0, 0.1)",
} as const;

export const fonts = {
  sans: { family: "Barlow", weights: [400, 500, 600, 700], variable: "--font-sans" },
  mono: { family: "Fira Code", variable: "--font-mono" },
  accent: { family: "Nothing You Could Do", weights: [400], variable: "--font-accent" },
} as const;

/**
 * Type scale (DESIGN.md §1 Typography). `class` is the Tailwind recipe so the
 * showcase renders the real thing; `usage` documents intent.
 */
export const typeScale = [
  {
    name: "Display",
    class: "text-display",
    usage: "Portrait / creator name",
  },
  {
    name: "Hero heading",
    class: "text-hero",
    usage: "Lead heading per screen (SectionHeading hero)",
  },
  {
    name: "Section heading",
    class: "text-section",
    usage: "Section titles (SectionHeading)",
  },
  {
    name: "Body large",
    class: "text-body-lg",
    usage: "Emphasized body copy",
  },
  {
    name: "Body",
    class: "text-body",
    usage: "Findings, descriptions, list items",
  },
  {
    name: "Caption / meta",
    class: "text-caption",
    usage: "Stat lines, tool descriptions",
  },
  {
    name: "Micro-label",
    class: "text-micro uppercase",
    usage: "Eyebrow / role tags (SectionLabel)",
  },
  {
    name: "Label",
    class: "text-label uppercase",
    usage: "Prominent eyebrow (SectionLabel size=label) — e.g. Explore 'Why they fit'",
  },
] as const;

/** Convenience aggregate for codegen / JSON export. */
export const designTokens = {
  color: {
    brand: brandColors,
    semantic: semanticColors,
    light: lightColors,
    dark: darkColors,
  },
  radius,
  shadow,
  fonts,
  typeScale,
} as const;

export type DesignTokens = typeof designTokens;
