/**
 * @trovio/ui — public entry point.
 *
 * Web styling: consumers must (1) `import "@trovio/ui/tokens.css"` once globally
 * and (2) add this package to their Tailwind sources so the utility classes the
 * components use get generated. See README.
 */

// Components / primitives
export { SectionLabel } from "./components/section-label";
export { SectionHeading } from "./components/section-heading";
export { PlatformIcon, platformLabel } from "./components/platform-icon";
export { LockChip } from "./components/lock-chip";
export { JourneyStepper } from "./components/journey-stepper";
export type { JourneyStep, JourneyStepStatus } from "./components/journey-stepper";
export { PillarChips } from "./components/pillar-chips";
export type { PillarChipItem } from "./components/pillar-chips";
export { StatStrip } from "./components/stat-strip";
export type { StatStripProps } from "./components/stat-strip";
export { TrovioBadge } from "./components/trovio-badge";
export type { TrovioBadgeProps } from "./components/trovio-badge";
export { TrovioSpinner } from "./components/trovio-spinner";

// Utilities
export { formatCompactNumber } from "./utils/format-number";

// Design tokens (also available as the "@trovio/ui/tokens" subpath)
export * from "./tokens/design-tokens";
