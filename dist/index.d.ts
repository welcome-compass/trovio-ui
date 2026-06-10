import { ButtonProps, ChipProps, InputProps, CardProps } from '@heroui/react';
import * as react from 'react';
import react__default, { ReactNode } from 'react';
export { DesignTokens, brandColors, darkColors, designTokens, fonts, lightColors, radius, semanticColors, shadow, typeScale } from './tokens.js';

interface TrovioButtonProps extends Omit<ButtonProps, "color" | "variant" | "className"> {
    variant?: "primary" | "secondary" | "tertiary" | "dashed" | "custom";
    color?: "blue" | "yellow";
    fullWidth?: boolean;
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    isPending?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    children?: react__default.ReactNode;
    className?: string;
}
declare const TrovioButton: react__default.ForwardRefExoticComponent<Omit<TrovioButtonProps, "ref"> & react__default.RefAttributes<HTMLButtonElement>>;

interface TrovioBadgeProps extends Omit<ChipProps, "color"> {
    status: "published" | "draft" | "archived" | "success" | "warning" | "error" | "info";
}
declare const TrovioBadge: react__default.FC<TrovioBadgeProps>;

interface TrovioInputProps extends Omit<InputProps, "variant" | "size"> {
    label?: string;
    helperText?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "dynamic";
}
declare const TrovioInput: react__default.FC<TrovioInputProps>;

interface TrovioTextAreaProps {
    label?: string;
    helperText?: string;
    error?: string;
    variant?: "default" | "dynamic";
    className?: string;
    placeholder?: string;
    value?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    onBlur?: (e: react__default.FocusEvent<HTMLTextAreaElement>) => void;
    onChange?: (e: react__default.ChangeEvent<HTMLTextAreaElement>) => void;
}
declare const TrovioTextArea: react__default.FC<TrovioTextAreaProps>;

interface TrovioModalProps {
    /** Whether the modal is open */
    isOpen: boolean;
    /** Callback invoked when the modal should close (backdrop click, ESC, close button, etc.) */
    onClose: () => void;
    /** Modal title */
    title: string;
    /** Modal content */
    children: react__default.ReactNode;
    /** Optional footer with action buttons */
    footer?: react__default.ReactNode;
    /** Size of the modal */
    size?: "sm" | "md" | "lg";
    /** Whether the modal can be dismissed by clicking backdrop (default: true) */
    isDismissable?: boolean;
    /** Whether ESC key can dismiss the modal (default: false) */
    isKeyboardDismissDisabled?: boolean;
    /** Scroll behavior - inside or outside (default: inside) */
    scroll?: "inside" | "outside";
    /**
     * Modal placement on screen.
     * Defaults to "auto": centered on desktop (sm+), bottom sheet on mobile.
     */
    placement?: "auto" | "top" | "center" | "bottom";
    /** Hide the header and close button for full-bleed content (e.g. banner images). Title is still used for aria-label. */
    hideHeader?: boolean;
}
/**
 * TrovioModal component using HeroUI v3 Modal with Trovio branding.
 * Features backdrop, close button, customizable content/footer, and full accessibility.
 */
declare const TrovioModal: react__default.FC<TrovioModalProps>;

interface TrovioCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    "aria-label": string;
    className?: string;
    size?: "md" | "lg";
    isDisabled?: boolean;
}
/**
 * Trovio Checkbox
 * --------------
 * Thin wrapper around HeroUI v3 Checkbox.
 * We keep the default square checkbox visuals and only apply minimal Trovio theming.
 */
declare function TrovioCheckbox({ checked, onChange, className, size, isDisabled, ...ariaProps }: TrovioCheckboxProps): react.JSX.Element;

interface TrovioSwitchProps {
    label?: string;
    helperText?: string;
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
    isDisabled?: boolean;
    name?: string;
    id?: string;
}
/**
 * Trovio Switch Component
 * -----------------------
 * Themed toggle switch using HeroUI v3 Switch
 * Uses Trovio primary color and larger size for better visibility
 */
declare const TrovioSwitch: react__default.FC<TrovioSwitchProps>;

interface TrovioSpinnerProps {
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}
declare const TrovioSpinner: ({ size, className, }: TrovioSpinnerProps) => react.JSX.Element;

interface TrovioSkeletonProps {
    isLoaded?: boolean;
    disableAnimation?: boolean;
    className?: string;
    children?: react__default.ReactNode;
    usePrimaryColor?: boolean;
}
declare const TrovioSkeleton: ({ isLoaded, disableAnimation, className, children, usePrimaryColor, }: TrovioSkeletonProps) => react__default.JSX.Element;

interface TrovioProgressBarProps {
    /** Current value */
    value: number;
    /** Maximum value */
    max: number;
    /** Fill color (hex string, e.g. "#FF00AA") */
    color?: string;
    /** Size variant */
    size?: "sm" | "md";
    /** Additional class names */
    className?: string;
    /** Accessible label (e.g. "Fitness: 3 of 5 posts") */
    label?: string;
}
/**
 * Trovio Progress Bar
 * -------------------
 * Linear progress bar with customizable fill color.
 * Used primarily in the pillar challenge widget to show posting progress.
 *
 * - Pillar-colored fill with border-colored background
 * - Rounded ends (rounded-full)
 * - Accessible with role="progressbar" and aria attributes
 */
declare function TrovioProgressBar({ value, max, color, size, className, label, }: TrovioProgressBarProps): react.JSX.Element;

interface WidgetCardProps extends CardProps {
    /**
     * Remove default padding from card content
     * Useful for cards with full-bleed backgrounds or custom layouts
     */
    noPadding?: boolean;
    /**
     * Minimum height for the card
     * @default "300px"
     */
    minHeight?: string;
}
/**
 * Widget Card Base Component
 * --------------------------
 * Simple container card for dashboard widgets
 * Uses HeroUI v3 Card with minimal styling for maximum flexibility
 *
 * Features:
 * - Consistent card styling across widgets
 * - Optional padding control
 * - Configurable minimum height
 * - Dark mode support
 */
declare function WidgetCard({ children, className, noPadding, minHeight, ...props }: WidgetCardProps): react.JSX.Element;

/**
 * SectionLabel — the one uppercase eyebrow used across dashboard states.
 *
 * Consolidates the ad-hoc `text-micro uppercase` labels that were scattered
 * inline (my-agent-landing, create/brands/insights views, trovio-card
 * `bodyEyebrow`, agent-upsell-sheet). Use this for every "TODAY'S DRAFT" /
 * "YOUR WORKSPACES" style header so the stranger / acquainted / friendly
 * dashboards stay visually consistent.
 *
 * Tone: `muted` (default) is the standard page eyebrow. `primary` is reserved
 * for emphasis inside previews/teasers (e.g. the locked-feature mini-pages).
 */
declare function SectionLabel({ children, tone, className, }: {
    children: ReactNode;
    tone?: "muted" | "primary";
    className?: string;
}): react.JSX.Element;

/**
 * SectionHeading — the open, editorial section heading for the refreshed
 * dashboard typography system (Barlow). Large, sentence-case, lighter weight,
 * with an optional hairline rule beneath — NOT a tiny uppercase eyebrow.
 *
 * Type scale (see DESIGN.md §1 Typography):
 *   hero  → ~text-4xl, font-normal   ("Here's what your agent learned")
 *   h2    → ~text-2xl, font-medium   ("Your content pillars", section titles)
 */
declare function SectionHeading({ children, divider, hero, className, }: {
    children: ReactNode;
    /** Render the hairline rule beneath the heading (section dividers). */
    divider?: boolean;
    /** Hero size for the lead heading on the screen. */
    hero?: boolean;
    className?: string;
}): react.JSX.Element;

/**
 * LockChip — the small "locked" badge used on locked feature cards. Shared so
 * the acquainted locked cards (and any future locked surfaces) read identically.
 */
declare function LockChip({ label }: {
    label?: string;
}): react.JSX.Element;

declare function PlatformIcon({ platform, className, size, }: {
    platform: string;
    className?: string;
    size?: number;
}): react.JSX.Element;
/** Human-readable platform name, e.g. "instagram" -> "Instagram". */
declare function platformLabel(platform: string): string;

interface AvatarProps {
    imageUrl?: string | null;
    /** Used for the initials fallback + alt text. */
    name?: string;
    /** Pixel size (width = height). Default 32. */
    size?: number;
    className?: string;
}
declare function Avatar({ imageUrl, name, size, className, }: AvatarProps): react.JSX.Element;

/**
 * RingGauge (Primitive) — a small circular (donut) progress gauge.
 *
 * Renders an SVG donut: a muted track + a primary-colored arc filled to
 * `value` (0–1), with optional centered content (an icon, a number).
 * Used for the Insights score factors and the Post Analyzer score ring.
 */
interface RingGaugeProps {
    /** Fill fraction, 0–1. */
    value: number;
    size?: number;
    stroke?: number;
    /** Arc color (CSS color). Defaults to the brand primary. */
    color?: string;
    /** Tailwind text-color class for the track ring. */
    trackClassName?: string;
    className?: string;
    children?: ReactNode;
}
declare function RingGauge({ value, size, stroke, color, trackClassName, className, children, }: RingGaugeProps): react.JSX.Element;

/**
 * Sparkline (Primitive) — a tiny inline trend line (no axes, no labels).
 *
 * Pure SVG, no deps. Renders nothing when there are fewer than 2 points
 * (graceful degrade — callers can pass `points={[]}` until data exists).
 */
interface SparklineProps {
    /** Series values in chronological order. */
    points: number[];
    width?: number;
    height?: number;
    strokeWidth?: number;
    color?: string;
    className?: string;
}
declare function Sparkline({ points, width, height, strokeWidth, color, className, }: SparklineProps): react.JSX.Element | null;

/**
 * SegmentedToggle (Primitive) — a small pill-style single-select control.
 *
 * Token-driven: the selected pill is the brand primary, the rest are muted
 * outlines. Used e.g. for the Message Crafter channel picker.
 */
interface SegmentedToggleOption<T extends string> {
    value: T;
    label: string;
}
declare function SegmentedToggle<T extends string>({ options, value, onChange, className, }: {
    options: SegmentedToggleOption<T>[];
    value: T;
    onChange: (value: T) => void;
    className?: string;
}): react.JSX.Element;

/**
 * ClampText (Primitive) — line-clamped text with a built-in expand affordance.
 *
 * Design rule: truncated text must always be reachable. This renders its
 * children clamped to `lines`, and when (and only when) the content actually
 * overflows, shows a "More" toggle to expand inline. Use it anywhere copy can
 * run long (brand match rationales, notes, descriptions) instead of a bare
 * `line-clamp-*` / `truncate`.
 */
interface ClampTextProps {
    children: ReactNode;
    /** Max lines while collapsed. Default 3. */
    lines?: number;
    moreLabel?: string;
    lessLabel?: string;
    className?: string;
    /** Class for the More/Less toggle button. */
    toggleClassName?: string;
}
declare function ClampText({ children, lines, moreLabel, lessLabel, className, toggleClassName, }: ClampTextProps): react.JSX.Element;

/**
 * GeneratingBlock (Primitive) — placeholder for a dashboard section whose
 * content is still being generated by the agent (the "living" acquainted
 * screen). Renders stacked shimmer lines that read as text, plus an optional
 * status row beneath ("Compiling what Trovio sees in your content…").
 *
 * Presentation-only: no card/border chrome — it sits inside sections, so the
 * surrounding layout provides spacing and any hairline rules.
 */
interface GeneratingBlockProps {
    /** Short status line shown under the shimmer. Omitted when absent. */
    message?: string;
    /** Number of shimmer text lines. Default 3. */
    lines?: number;
    className?: string;
}
declare function GeneratingBlock({ message, lines, className, }: GeneratingBlockProps): react.JSX.Element;

/**
 * JourneyStepper — numbered step indicator for "where you stand". Editorial
 * styling: numbered circles with labels below, a single indigo accent for
 * done/current, neutral for upcoming.
 *
 * Layout: equal flex-1 columns (fully responsive — fits any width down to
 * mobile). Each circle sits between two flex-1 line segments, so the connectors
 * always render and every circle stays centered in its column; the first/last
 * outer segments are transparent.
 *
 * Doctrine (DESIGN.md §3.7): the current node is never the last node — an
 * upcoming step always follows so the journey reads as ongoing.
 *
 *   completed -> filled indigo circle (white number)
 *   current   -> indigo-ringed circle (indigo number); tappable when onCurrentClick set
 *   upcoming  -> neutral outline circle (muted number)
 *
 * A `current` step may also set `loading` to swap its static ring for a
 * spinning indigo arc — use it while the work that step represents is still
 * being generated.
 */
type JourneyStepStatus = "completed" | "current" | "upcoming";
interface JourneyStep {
    label: string;
    status: JourneyStepStatus;
    /** Only meaningful on a `current` step: shows a spinning ring (work in progress). */
    loading?: boolean;
}
declare function JourneyStepper({ steps, onCurrentClick, }: {
    steps: JourneyStep[];
    onCurrentClick?: () => void;
}): react.JSX.Element | null;

/**
 * PillarChips — the creator's content pillars as a clean, minimal list.
 *
 * Refresh direction (2026-06): near-monochrome. Pillars render as plain rows
 * with a single small neutral dot — no colored pills, no container. Names only;
 * engagement isn't classified pre-activation so we never show numbers here.
 */
interface PillarChipItem {
    id: string;
    name: string;
    color?: string;
}
declare function PillarChips({ pillars }: {
    pillars?: PillarChipItem[];
}): react.JSX.Element | null;

/**
 * StatStrip — grounded vitals as a single borderless, muted inline line
 * (e.g. "24.3K followers · 312 posts · IG TikTok"). No container, no boxes
 * (refresh direction: "not everything has to have a container"). Only data we
 * already have at acquainted; never engagement % or score. Each part hides if
 * its value is missing.
 */
interface StatStripProps {
    followers?: number | null;
    posts?: number | null;
    platforms?: string[];
    className?: string;
}
declare function StatStrip({ followers, posts, platforms, className, }: StatStripProps): react.JSX.Element | null;

interface PortraitHandle {
    platform: string;
    username: string;
}
interface PortraitHeroProps {
    imageUrl?: string | null;
    name: string;
    /** Small uppercase role/niche line under the name (e.g. "Lifestyle creator"). */
    role?: string | null;
    /** Social handles rendered as an icon + @username row. */
    handles?: PortraitHandle[];
    /** Optional top-right action (e.g. a share button) injected by the consumer. */
    action?: ReactNode;
}
declare function PortraitHero({ imageUrl, name, role, handles, action, }: PortraitHeroProps): react.JSX.Element;

/**
 * LockedFeatureCard (Component) — pre-paywall teaser for a tool that unlocks on
 * activation. Each preview sells the OUTCOME (a polished media kit, personalized
 * brand matches, an AI post score). Every preview uses REAL data when the
 * consumer supplies it and falls back to illustrative example data when absent,
 * so the cards are correct the moment the backend starts passing real fields —
 * no LLM call required. Presentation-only: tap behavior is injected via
 * `onActivate`.
 */
type LockedFeatureVariant = "media_kit" | "brand_matcher" | "post_analyzer";
type LockedFeatureTreatment = "crisp" | "veiled";
interface LockedFeaturePillar {
    label: string;
    reason?: string;
}
interface LockedFeatureItem {
    variant: LockedFeatureVariant;
    treatment: LockedFeatureTreatment;
    /** Real stats for the Media Kit preview. Each field is optional — the preview
     *  falls back to an illustrative value when it's absent. */
    stats?: {
        followers?: number | null;
        platforms?: string[];
        /** Decimal engagement rate (0.035 = 3.5%). */
        engagementRate?: number | null;
        /** Average views per post. */
        avgViews?: number | null;
    };
    /** Personalized teaser copy; falls back to the built-in line. */
    description?: string;
    /** Recent post thumbnail to illustrate Post Analyzer. */
    sampleThumbnailUrl?: string | null;
    /** @deprecated No longer rendered — the Media Kit preview is an identity
     *  masthead (portfolio), not a post grid. Kept so existing payloads parse. */
    sampleImages?: string[];
    /** Real content pillars → Media Kit "top pillar" + Brand Matcher rows
     *  (grounded categories; no fabricated match scores until matching runs). */
    pillars?: LockedFeaturePillar[];
    /** Count of already-analyzed posts → real Post Analyzer teaser line. */
    analyzedCount?: number;
}
interface LockedFeatureCardProps {
    item: LockedFeatureItem;
    /** Creator portrait for the Media Kit headshot. */
    portraitUrl?: string | null;
    /** Creator display name for the Media Kit masthead. */
    creatorName?: string;
    /** Invoked on tap (e.g. open the upsell). Analytics live in the consumer. */
    onActivate?: () => void;
}
declare function LockedFeatureCard({ item, portraitUrl, creatorName, onActivate, }: LockedFeatureCardProps): react.JSX.Element;

/**
 * Drawer (Component) — a right-side slide-over panel over a dimming scrim.
 *
 * Desktop: ~480px panel anchored right. Mobile (< sm): full-screen sheet.
 * Used e.g. for the Message Crafter ("Draft a pitch") flow so crafting happens
 * in context without losing the underlying list. Presentation-only: open
 * state and behavior live in the consumer.
 */
interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: ReactNode;
    eyebrow?: ReactNode;
    /** Extra content under the title row (e.g. channel/pillar pickers). */
    headerExtra?: ReactNode;
    footer?: ReactNode;
    children: ReactNode;
}
declare function Drawer({ isOpen, onClose, title, eyebrow, headerExtra, footer, children, }: DrawerProps): react.ReactPortal | null;

/**
 * Compact number formatting for stat displays (followers, posts, etc.).
 *
 *   24300   -> "24.3K"
 *   312     -> "312"
 *   1200000 -> "1.2M"
 *   null    -> "—"
 *
 * Single source of truth so StatStrip and the crisp locked Media Kit card
 * render identical strings. One decimal place, trailing ".0" dropped.
 */
declare function formatCompactNumber(n?: number | null): string;

export { Avatar, type AvatarProps, ClampText, type ClampTextProps, Drawer, type DrawerProps, GeneratingBlock, type GeneratingBlockProps, type JourneyStep, type JourneyStepStatus, JourneyStepper, LockChip, LockedFeatureCard, type LockedFeatureCardProps, type LockedFeatureItem, type LockedFeatureTreatment, type LockedFeatureVariant, type PillarChipItem, PillarChips, PlatformIcon, type PortraitHandle, PortraitHero, type PortraitHeroProps, RingGauge, type RingGaugeProps, SectionHeading, SectionLabel, SegmentedToggle, type SegmentedToggleOption, Sparkline, type SparklineProps, StatStrip, type StatStripProps, TrovioBadge, type TrovioBadgeProps, TrovioButton, type TrovioButtonProps, TrovioCheckbox, type TrovioCheckboxProps, TrovioInput, type TrovioInputProps, TrovioModal, type TrovioModalProps, TrovioProgressBar, type TrovioProgressBarProps, TrovioSkeleton, type TrovioSkeletonProps, TrovioSpinner, TrovioSwitch, type TrovioSwitchProps, TrovioTextArea, type TrovioTextAreaProps, WidgetCard, type WidgetCardProps, formatCompactNumber, platformLabel };
