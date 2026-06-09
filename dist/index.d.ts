import { ButtonProps, ChipProps, InputProps, CardProps } from '@heroui/react';
import * as React from 'react';
import React__default, { ReactNode } from 'react';
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
    children?: React__default.ReactNode;
    className?: string;
}
declare const TrovioButton: React__default.ForwardRefExoticComponent<Omit<TrovioButtonProps, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;

interface TrovioBadgeProps extends Omit<ChipProps, "color"> {
    status: "published" | "draft" | "archived" | "success" | "warning" | "error" | "info";
}
declare const TrovioBadge: React__default.FC<TrovioBadgeProps>;

interface TrovioInputProps extends Omit<InputProps, "variant" | "size"> {
    label?: string;
    helperText?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "dynamic";
}
declare const TrovioInput: React__default.FC<TrovioInputProps>;

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
    onBlur?: (e: React__default.FocusEvent<HTMLTextAreaElement>) => void;
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
}
declare const TrovioTextArea: React__default.FC<TrovioTextAreaProps>;

interface TrovioModalProps {
    /** Whether the modal is open */
    isOpen: boolean;
    /** Callback invoked when the modal should close (backdrop click, ESC, close button, etc.) */
    onClose: () => void;
    /** Modal title */
    title: string;
    /** Modal content */
    children: React__default.ReactNode;
    /** Optional footer with action buttons */
    footer?: React__default.ReactNode;
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
declare const TrovioModal: React__default.FC<TrovioModalProps>;

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
declare function TrovioCheckbox({ checked, onChange, className, size, isDisabled, ...ariaProps }: TrovioCheckboxProps): React.JSX.Element;

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
declare const TrovioSwitch: React__default.FC<TrovioSwitchProps>;

interface TrovioSpinnerProps {
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}
declare const TrovioSpinner: ({ size, className, }: TrovioSpinnerProps) => React.JSX.Element;

interface TrovioSkeletonProps {
    isLoaded?: boolean;
    disableAnimation?: boolean;
    className?: string;
    children?: React__default.ReactNode;
    usePrimaryColor?: boolean;
}
declare const TrovioSkeleton: ({ isLoaded, disableAnimation, className, children, usePrimaryColor, }: TrovioSkeletonProps) => React__default.JSX.Element;

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
declare function TrovioProgressBar({ value, max, color, size, className, label, }: TrovioProgressBarProps): React.JSX.Element;

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
declare function WidgetCard({ children, className, noPadding, minHeight, ...props }: WidgetCardProps): React.JSX.Element;

/**
 * SectionLabel — the one uppercase eyebrow used across dashboard states.
 *
 * Consolidates the ad-hoc `text-xs uppercase tracking` labels that were
 * scattered inline (e.g. trovio-card `bodyEyebrow`, agent-upsell-sheet). Use
 * this for every "WHERE YOU STAND" / "YOUR CONTENT PILLARS" style header so the
 * stranger / acquainted / friendly dashboards stay visually consistent.
 */
declare function SectionLabel({ children, className, }: {
    children: ReactNode;
    className?: string;
}): React.JSX.Element;

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
}): React.JSX.Element;

/**
 * LockChip — the small "locked" badge used on locked feature cards. Shared so
 * the acquainted locked cards (and any future locked surfaces) read identically.
 */
declare function LockChip({ label }: {
    label?: string;
}): React.JSX.Element;

declare function PlatformIcon({ platform, className, size, }: {
    platform: string;
    className?: string;
    size?: number;
}): React.JSX.Element;
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
declare function Avatar({ imageUrl, name, size, className, }: AvatarProps): React.JSX.Element;

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
 */
type JourneyStepStatus = "completed" | "current" | "upcoming";
interface JourneyStep {
    label: string;
    status: JourneyStepStatus;
}
declare function JourneyStepper({ steps, onCurrentClick, }: {
    steps: JourneyStep[];
    onCurrentClick?: () => void;
}): React.JSX.Element | null;

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
}): React.JSX.Element | null;

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
declare function StatStrip({ followers, posts, platforms, className, }: StatStripProps): React.JSX.Element | null;

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
declare function PortraitHero({ imageUrl, name, role, handles, action, }: PortraitHeroProps): React.JSX.Element;

/**
 * LockedFeatureCard (Component) — pre-paywall teaser for a tool that unlocks on
 * activation. Media Kit / Post Analyzer render ILLUSTRATIVE visual examples
 * (real imagery where the consumer provides it, mock numbers); Brand Matcher is
 * veiled. Presentation-only: tap behavior is injected via `onActivate` (the app
 * decides what activation means / fires analytics).
 */
type LockedFeatureVariant = "media_kit" | "brand_matcher" | "post_analyzer";
type LockedFeatureTreatment = "crisp" | "veiled";
interface LockedFeatureItem {
    variant: LockedFeatureVariant;
    treatment: LockedFeatureTreatment;
    /** Real stats for the crisp Media Kit preview. */
    stats?: {
        followers?: number | null;
        platforms?: string[];
    };
    /** Personalized teaser copy; falls back to the built-in line. */
    description?: string;
    /** Recent post thumbnail to illustrate Post Analyzer. */
    sampleThumbnailUrl?: string | null;
    /** Recent content image URLs to illustrate the Media Kit. */
    sampleImages?: string[];
}
interface LockedFeatureCardProps {
    item: LockedFeatureItem;
    /** Creator portrait for the Media Kit headshot. */
    portraitUrl?: string | null;
    /** Invoked on tap (e.g. open the upsell). Analytics live in the consumer. */
    onActivate?: () => void;
}
declare function LockedFeatureCard({ item, portraitUrl, onActivate, }: LockedFeatureCardProps): React.JSX.Element;

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

export { Avatar, type AvatarProps, type JourneyStep, type JourneyStepStatus, JourneyStepper, LockChip, LockedFeatureCard, type LockedFeatureCardProps, type LockedFeatureItem, type LockedFeatureTreatment, type LockedFeatureVariant, type PillarChipItem, PillarChips, PlatformIcon, type PortraitHandle, PortraitHero, type PortraitHeroProps, SectionHeading, SectionLabel, StatStrip, type StatStripProps, TrovioBadge, type TrovioBadgeProps, TrovioButton, type TrovioButtonProps, TrovioCheckbox, type TrovioCheckboxProps, TrovioInput, type TrovioInputProps, TrovioModal, type TrovioModalProps, TrovioProgressBar, type TrovioProgressBarProps, TrovioSkeleton, type TrovioSkeletonProps, TrovioSpinner, TrovioSwitch, type TrovioSwitchProps, TrovioTextArea, type TrovioTextAreaProps, WidgetCard, type WidgetCardProps, formatCompactNumber, platformLabel };
