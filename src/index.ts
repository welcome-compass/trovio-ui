/**
 * @trovio/ui — public entry point. Organized by taxonomy (see the Storybook
 * "Foundations/Introduction" doc): Primitives are base presentation-only blocks;
 * Components compose primitives for a specific job.
 *
 * Web styling: consumers must (1) `import "@trovio/ui/tokens.css"` once globally
 * and (2) add this package to their Tailwind sources. See README.
 */

// ── Primitives (base, presentation-only) ───────────────────────────────────
export { TrovioButton } from "./components/trovio-button";
export type { TrovioButtonProps } from "./components/trovio-button";
export { TrovioBadge } from "./components/trovio-badge";
export type { TrovioBadgeProps } from "./components/trovio-badge";
export { TrovioInput } from "./components/trovio-input";
export type { TrovioInputProps } from "./components/trovio-input";
export { TrovioTextArea } from "./components/trovio-textarea";
export type { TrovioTextAreaProps } from "./components/trovio-textarea";
export { TrovioModal } from "./components/trovio-modal";
export type { TrovioModalProps } from "./components/trovio-modal";
export { TrovioCheckbox } from "./components/trovio-checkbox";
export type { TrovioCheckboxProps } from "./components/trovio-checkbox";
export { TrovioSwitch } from "./components/trovio-switch";
export type { TrovioSwitchProps } from "./components/trovio-switch";
export { TrovioSpinner } from "./components/trovio-spinner";
export { TrovioSkeleton } from "./components/trovio-skeleton";
export type { TrovioSkeletonProps } from "./components/trovio-skeleton";
export { TrovioProgressBar } from "./components/trovio-progress-bar";
export type { TrovioProgressBarProps } from "./components/trovio-progress-bar";
export { WidgetCard } from "./components/widget-card";
export type { WidgetCardProps } from "./components/widget-card";
export { SectionLabel } from "./components/section-label";
export { SectionHeading } from "./components/section-heading";
export { LockChip } from "./components/lock-chip";
export { PlatformIcon, platformLabel } from "./components/platform-icon";

// ── Components (composed of primitives) ─────────────────────────────────────
export { JourneyStepper } from "./components/journey-stepper";
export type { JourneyStep, JourneyStepStatus } from "./components/journey-stepper";
export { PillarChips } from "./components/pillar-chips";
export type { PillarChipItem } from "./components/pillar-chips";
export { StatStrip } from "./components/stat-strip";
export type { StatStripProps } from "./components/stat-strip";

// ── Utilities ───────────────────────────────────────────────────────────────
export { formatCompactNumber } from "./utils/format-number";

// ── Design tokens (also at the "@trovio/ui/tokens" subpath) ─────────────────
export * from "./tokens/design-tokens";
