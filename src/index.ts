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
export { Avatar } from "./components/avatar";
export type { AvatarProps } from "./components/avatar";
export { RingGauge } from "./components/ring-gauge";
export type { RingGaugeProps } from "./components/ring-gauge";
export { Sparkline } from "./components/sparkline";
export type { SparklineProps } from "./components/sparkline";
export { SegmentedToggle } from "./components/segmented-toggle";
export type { SegmentedToggleOption } from "./components/segmented-toggle";
export { ClampText } from "./components/clamp-text";
export type { ClampTextProps } from "./components/clamp-text";
export { GeneratingBlock } from "./components/generating-block";
export type { GeneratingBlockProps } from "./components/generating-block";
export { OnboardingBrandHeader } from "./components/onboarding-brand-header";
export type { OnboardingBrandHeaderProps } from "./components/onboarding-brand-header";
export { BrandLogo } from "./components/brand-logo";
export type { BrandLogoProps } from "./components/brand-logo";
export { GoalCard } from "./components/goal-card";
export type { GoalCardProps } from "./components/goal-card";

// ── Components (composed of primitives) ─────────────────────────────────────
export { HeadlineBlock } from "./components/headline-block";
export type {
  HeadlineBlockProps,
  HeadlineBlockSize,
  HeadlineBlockWeight,
} from "./components/headline-block";
export { TitledPanel } from "./components/titled-panel";
export type { TitledPanelProps } from "./components/titled-panel";
export { LinkCard } from "./components/link-card";
export type { LinkCardProps } from "./components/link-card";
export { JourneyStepper } from "./components/journey-stepper";
export type { JourneyStep, JourneyStepStatus } from "./components/journey-stepper";
export { PillarChips } from "./components/pillar-chips";
export type { PillarChipItem } from "./components/pillar-chips";
export { StatStrip } from "./components/stat-strip";
export type { StatStripProps } from "./components/stat-strip";
export { PortraitHero } from "./components/portrait-hero";
export type { PortraitHeroProps, PortraitHandle } from "./components/portrait-hero";
export { LockedFeatureCard } from "./components/locked-feature-card";
export type {
  LockedFeatureCardProps,
  LockedFeatureItem,
  LockedFeatureVariant,
  LockedFeatureTreatment,
} from "./components/locked-feature-card";
export { Drawer } from "./components/drawer";
export type { DrawerProps } from "./components/drawer";

// ── Utilities ───────────────────────────────────────────────────────────────
export { formatCompactNumber } from "./utils/format-number";

// ── Design tokens (also at the "@trovio/ui/tokens" subpath) ─────────────────
export * from "./tokens/design-tokens";
