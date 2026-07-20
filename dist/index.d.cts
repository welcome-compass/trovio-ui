import { ButtonProps, ChipProps, InputProps, CardProps } from '@heroui/react';
import * as react from 'react';
import react__default, { ReactNode, ComponentType } from 'react';
import { IconBaseProps, IconType } from 'react-icons';
export { DesignTokens, brandColors, darkColors, designTokens, fonts, lightColors, radius, semanticColors, shadow, typeScale } from './tokens.cjs';

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

/**
 * TrovioIcon — renders a Phosphor icon **flat by default**.
 *
 * Phosphor *Duotone* icons (`react-icons/pi` `*Duotone`) ship a translucent
 * background layer — a `<path opacity="0.2">` behind the glyph — that reads as a
 * stray tinted box behind utility icons (plus, pencil, trash, carets, refresh,
 * upload). This primitive zeroes that layer so action/utility icons render
 * clean, with no per-app `icon-flat` class to remember (and no way to get it
 * subtly wrong — the class-on-the-svg form of `icon-flat` silently no-ops).
 *
 * Flattening is a self-contained Tailwind arbitrary variant baked into the
 * class, so it works in any consumer that already sources `@trovio/ui/dist` —
 * no extra CSS import.
 *
 * Pass `duotone` to KEEP the fill for decorative / feature icons where the
 * duotone layer is intentional (hearts, sparkles, trophies, large hero checks).
 *
 * ```tsx
 * <TrovioIcon icon={PiPlusDuotone} className="text-base" />   // flat "+"
 * <TrovioIcon icon={PiHeartDuotone} duotone size={20} />      // keeps the fill
 * ```
 */
interface TrovioIconProps extends IconBaseProps {
    /** The Phosphor icon component, e.g. `PiPlusDuotone` from `react-icons/pi`. */
    icon: IconType;
    /** Keep the Duotone background fill (decorative / feature icons). Default off. */
    duotone?: boolean;
}
declare function TrovioIcon({ icon: Icon, duotone, className, ...props }: TrovioIconProps): react.JSX.Element;

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
 *
 * Size: `micro` (default) is the standard small eyebrow. `label` is the
 * body-sized, bolder variant (the `--text-label` token) for a heading-weight
 * label like the Explore card's "Why they fit" (usually with `tone="primary"`).
 */
declare function SectionLabel({ children, tone, size, className, }: {
    children: ReactNode;
    tone?: "muted" | "primary";
    size?: "micro" | "label";
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
 * ScoreRing (Primitive) — a 0–100 score inside a circular gauge, the number and
 * "/100" stacked in the middle. Used for the Post Analyzer's overall score and
 * the campaign builder's brand-fit score.
 *
 * `loading` is the beat before a score resolves: the arc stays empty and a
 * pulsing placeholder stands in for the number, so the ring holds its slot in
 * the layout instead of popping in once the value lands.
 */
interface ScoreRingProps {
    /** Score out of 100. Ignored while `loading`. */
    score: number;
    size?: number;
    /** Calculating beat — empty arc + a pulsing placeholder instead of `score`. */
    loading?: boolean;
    className?: string;
}
declare function ScoreRing({ score, size, loading, className, }: ScoreRingProps): react.JSX.Element;

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
    /**
     * Render the option muted and unclickable while keeping it visible — the
     * option stays part of the choice on offer, it just isn't available. Used
     * where a creator's stated deal preferences exclude one of the options.
     */
    disabled?: boolean;
}
interface SegmentedToggleProps<T extends string> {
    options: SegmentedToggleOption<T>[];
    value: T;
    onChange: (value: T) => void;
    /**
     * Stretch the options to share the full row width. Default false — options
     * size to their label and wrap.
     */
    fullWidth?: boolean;
    className?: string;
}
declare function SegmentedToggle<T extends string>({ options, value, onChange, fullWidth, className, }: SegmentedToggleProps<T>): react.JSX.Element;

interface TrovioSelectOption {
    key: string;
    label: ReactNode;
    /** Plain-text label for type-ahead + the trigger value when `label` is a node. */
    textValue?: string;
}
interface TrovioSelectProps {
    options: TrovioSelectOption[];
    /** Controlled selected key. */
    selectedKey?: string | null;
    onSelectionChange?: (key: string) => void;
    placeholder?: string;
    /** Field label rendered above the trigger. */
    label?: string;
    helperText?: string;
    ariaLabel?: string;
    isDisabled?: boolean;
    size?: "sm" | "md";
    className?: string;
}
/**
 * TrovioSelect — the design-system wrapper around HeroUI's Select. A thin proxy
 * for now (so we stop reaching for raw `@heroui/react` Select and forgetting the
 * design system), with a simple `options` API instead of the compound children.
 * Gives us one place to restyle every dropdown later.
 */
declare function TrovioSelect({ options, selectedKey, onSelectionChange, placeholder, label, helperText, ariaLabel, isDisabled, size, className, }: TrovioSelectProps): react.JSX.Element;

interface TrovioDatePickerProps {
    /** Controlled value — an ISO calendar day, "YYYY-MM-DD". null when unset. */
    value?: string | null;
    /** Fires with an ISO calendar day, or null when the day is cleared. */
    onChange?: (value: string | null) => void;
    /** Earliest selectable day, "YYYY-MM-DD". Earlier days render unclickable. */
    minValue?: string;
    /** Field label rendered above the trigger. */
    label?: string;
    helperText?: string;
    ariaLabel?: string;
    isDisabled?: boolean;
    /** Trigger text when no day is picked. */
    placeholder?: string;
    className?: string;
}
/**
 * TrovioDatePicker — the design-system wrapper around HeroUI's DatePicker, with
 * a flat ISO-string API instead of the compound children (mirrors TrovioSelect).
 *
 * The value is a **calendar day** ("YYYY-MM-DD") — never a `Date`, never an
 * instant. A delivery date is a square on a calendar, not a moment in time; the
 * moment you round-trip one through a timestamp it starts landing on the wrong
 * day either side of UTC. `@internationalized/date` models the day itself, so
 * what gets picked is what gets stored.
 */
declare function TrovioDatePicker({ value, onChange, minValue, label, helperText, ariaLabel, isDisabled, placeholder, className, }: TrovioDatePickerProps): react.JSX.Element;

interface OfferFieldProps {
    /** The offer in whole dollars; null when unset. Never seeded — the brand
     *  names its own number. */
    value: number | null;
    onChange: (value: number | null) => void;
    /** Field label. Default "Offer amount". */
    label?: string;
    /**
     * The creator's stated bounds, in whole dollars. Independently nullable, and
     * most creators have neither. They are context only: they feed the caption
     * and the meter, and never restrict what can be entered.
     */
    rangeMin?: number | null;
    rangeMax?: number | null;
    /** Lead-in for the range caption. Default "Accepts". */
    rangeLabel?: string;
    helperText?: string;
    ariaLabel?: string;
    isDisabled?: boolean;
    className?: string;
}
/**
 * OfferField — the campaign builder's offer control: a number field, plus a
 * read-only meter showing the range the creator said they accept.
 *
 * The brand's input and the creator's range are kept strictly apart. The range
 * is *data the creator gave us*, so it is rendered as context and nothing more:
 * it never becomes the input's domain, never seeds a default, and never blocks
 * a number. Trovio does not compute a price, and a control whose limits come
 * from the creator's bounds would be quietly doing exactly that — as well as
 * having nothing to show for the many creators who have stated no range at all.
 * That case is the ordinary one: no caption, no meter, just the field.
 */
declare function OfferField({ value, onChange, label, rangeMin, rangeMax, rangeLabel, helperText, ariaLabel, isDisabled, className, }: OfferFieldProps): react.JSX.Element;

type TimelineItem = {
    /** Primary line — what happened. */
    title: string;
    /** Muted secondary line, e.g. a relative time. */
    meta?: string;
    /** Accent chip after the title, e.g. "Trovio" on a step Trovio owns. */
    note?: string;
    /** Dot color (hex or `var(--…)`). Defaults to the primary token. */
    color?: string;
};
type TimelineProps = {
    /** Items, rendered in the order given — the component does not sort. */
    items: TimelineItem[];
    className?: string;
};
/**
 * Timeline — a compact vertical list with a connecting rail and a dot per
 * entry, rendered in the order supplied. Presentation-only; used for the
 * brand-workspace activity card, any "what happened" log, and forward-looking
 * schedules where `note` marks who owns each step.
 */
declare function Timeline({ items, className }: TimelineProps): react.JSX.Element;

type MediaKitPreviewProps = {
    /**
     * Live media-kit URL, rendered as a scaled, non-interactive iframe preview.
     * When absent, a branded gradient fallback is shown instead.
     */
    url?: string | null;
    /** Gradient fallback colors when there's no `url`. First color wins. */
    colors?: string[];
    /** Top-right badge, e.g. "Published" / "Draft". */
    badge?: string;
    /** Optional caption overlaid along the bottom (e.g. the creator name). */
    caption?: string | null;
    /**
     * Aspect ratio as width/height. Defaults to a portrait `5/6` because the kit
     * itself is a mobile-optimized one-pager — it fits a rail naturally.
     */
    aspect?: number;
    /**
     * The width the kit is laid out at before being scaled to fit. The media kit
     * is mobile-optimized, so the default renders its MOBILE layout (390px) —
     * pass a larger value to preview the desktop layout instead.
     */
    sourceWidth?: number;
    className?: string;
};
/**
 * MediaKitPreview — a scaled, non-interactive thumbnail of a creator's media
 * kit (or a branded gradient when there's no published kit yet). Presentation-
 * only: actions and status text live in the composing surface (e.g. the brand
 * page's media-kit rail). Measures its own width so the preview fills its column
 * at any size, from the desktop rail to the compact mobile bar.
 */
declare function MediaKitPreview({ url, colors, badge, caption, aspect, sourceWidth, className, }: MediaKitPreviewProps): react.JSX.Element;

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

interface OnboardingBrandHeaderProps {
    /** Brand logo, rendered centered (e.g. an <Image>/<svg> logo element). */
    logo: react__default.ReactNode;
    /** Optional left-aligned slot (e.g. a back button). */
    left?: react__default.ReactNode;
    /** Optional right-aligned slot (e.g. a sign-out button). */
    right?: react__default.ReactNode;
    className?: string;
}
/**
 * OnboardingBrandHeader — a minimal top bar with the brand logo centered and
 * optional left/right action slots. Used by full-page onboarding-style screens
 * (e.g. the stranger transition takeover) that want the centered-logo chrome
 * without the dashboard nav.
 *
 * Presentation-only: the caller passes the logo and any actions as slots, so
 * this primitive stays free of app dependencies (routing, auth, analytics).
 */
declare const OnboardingBrandHeader: react__default.FC<OnboardingBrandHeaderProps>;

interface BrandLogoProps {
    /** Image source shown in light mode. */
    lightSrc: string;
    /** Image source shown in dark mode. */
    darkSrc: string;
    /** Accessible alt text (applied to whichever variant is visible). */
    alt?: string;
    /**
     * Class applied to BOTH `<img>` elements — use it to size the logo. Prefer a
     * single dimension so the aspect ratio is preserved, e.g. `h-8 w-auto`.
     */
    className?: string;
}
/**
 * BrandLogo — renders a brand logo image with automatic light/dark switching.
 *
 * Both sources render and are toggled with Tailwind `dark:` utilities (CSS, not
 * JS theme state), so it is SSR-safe, has no theme-provider coupling, and never
 * flashes the wrong variant on hydration. Only the visible `<img>` is announced
 * by screen readers (the hidden one is `display:none`).
 *
 * Presentation-only: the consumer hosts the asset bytes and passes their URLs
 * (mirrors how Avatar/PortraitHero take an image src). trovio-ui ships no raster
 * assets, so the brand PNGs live in each app's `public/`.
 */
declare const BrandLogo: react__default.FC<BrandLogoProps>;

interface GoalCardProps extends react__default.HTMLAttributes<HTMLDivElement> {
    /** Ranking number shown in the badge (1-based). */
    rank: number;
    /** Icon element rendered inside the gradient circle. */
    icon: react__default.ReactNode;
    /** Goal title. */
    title: string;
    /** Goal description. */
    description: string;
    /** CSS background for the icon circle (e.g. a `linear-gradient(...)`). */
    iconGradient: string;
    /** Visually emphasize the card while it is being dragged. */
    isDragging?: boolean;
}
/**
 * GoalCard — presentation-only goal card: a ranking badge, a drag-affordance dot
 * grid, a gradient icon circle, and a title/description.
 *
 * Intentionally free of drag-and-drop logic so it stays a pure primitive.
 * Callers that want reordering wrap it (e.g. with @dnd-kit's `useSortable`) and
 * forward the resulting ref, listeners, `style`, and `isDragging` through the
 * spread props — the root element accepts everything `<div>` does.
 */
declare const GoalCard: react__default.ForwardRefExoticComponent<GoalCardProps & react__default.RefAttributes<HTMLDivElement>>;

interface QuoteCardProps {
    /** The quotation itself (rendered emphasized). */
    quote: ReactNode;
    /** Who said it, e.g. "Abigail Hannah". */
    attribution?: ReactNode;
    /** Where it's from, e.g. a course or publication name. Shown after the
     *  attribution, separated by a dot. */
    source?: ReactNode;
    /** Categorical label above the quote (e.g. "From the course"). */
    eyebrow?: ReactNode;
    /** Optional call-to-action label (e.g. "Learn more"). Omitted → no CTA. */
    ctaLabel?: ReactNode;
    /** External destination for the CTA. When set the CTA renders as a link. */
    ctaHref?: string;
    /** Presentation-only click hook — wire analytics/tracking in the consumer.
     *  Fires for both the link and button forms of the CTA. */
    onCtaClick?: () => void;
    className?: string;
}
/**
 * QuoteCard — a compact card that surfaces a single expert quote at a relevant
 * moment (e.g. a coaching tip beside the tool it applies to). Optional eyebrow,
 * attribution/source line, and a CTA that links out to learn more.
 *
 * Presentation-only: the consumer owns any click tracking via `onCtaClick`, and
 * the quote/attribution are passed verbatim (this component never transforms
 * them).
 */
declare function QuoteCard({ quote, attribution, source, eyebrow, ctaLabel, ctaHref, onCtaClick, className, }: QuoteCardProps): react.JSX.Element;

/**
 * Carousel (Primitive) — a generic horizontal scroll-snap rail with directional
 * edge-fades, arrow controls, and a slim progress indicator. Presentation-only
 * and content-agnostic: it knows nothing about what it scrolls, so it works for
 * any row of fixed-width items (creator cards, media kits, campaigns, …).
 *
 * Chrome is self-managing: fades, arrows, and the progress bar appear only when
 * there is actually more to scroll, and the arrows disable at each end. The
 * scroll-state math is encapsulated here so consumers never re-implement it.
 *
 * For layouts that place the prev/next controls outside the rail (e.g. in a
 * section header), pass `showArrows={false}` and drive scrolling through the
 * imperative `ref` (`scrollPrev` / `scrollNext`) using live state from
 * `onScrollStateChange`.
 */
interface CarouselScrollState {
    canLeft: boolean;
    canRight: boolean;
    scrollable: boolean;
}
interface CarouselHandle {
    scrollPrev: () => void;
    scrollNext: () => void;
}
interface CarouselProps {
    children: react__default.ReactNode;
    /** Gap between items, in px. Default 14. */
    gap?: number;
    /**
     * The color the edge-fades blend into — MUST match the surrounding page
     * background or the fade will look like a smudge. Default `var(--background)`
     * (the theme-aware HeroUI surface token, flips for dark mode).
     */
    fadeColor?: string;
    /** Render the built-in overlay arrows. Default true. Auto-hidden when content fits. */
    showArrows?: boolean;
    /** Render the slim progress indicator. Default true. */
    showProgress?: boolean;
    /**
     * When false, suppresses all chrome (arrows/fades/progress) regardless of
     * scrollability — use while the rail is loading skeletons. Default true.
     */
    chromeActive?: boolean;
    /** Accessible label for the scroll region (e.g. the section name). */
    ariaLabel?: string;
    /** Fires on every scroll-state change — use to drive externally-placed controls. */
    onScrollStateChange?: (state: CarouselScrollState) => void;
    className?: string;
}
declare const Carousel: react__default.ForwardRefExoticComponent<CarouselProps & react__default.RefAttributes<CarouselHandle>>;

/**
 * A single top post surfaced on a creator card. `thumbnailUrl` and `href` are
 * populated from the matches payload; when the thumbnail is absent — or its URL
 * fails to load, e.g. an expired signed URL — a neutral placeholder tile renders
 * so the strip keeps its shape.
 */
interface CreatorPost {
    thumbnailUrl?: string | null;
    caption?: string;
    views?: number;
    isVideo?: boolean;
    /** Real post URL — consumers may open this directly or handle `onOpenPost`. */
    href?: string;
}
interface TopPostsStripProps {
    /** 0–`columns` posts; renders as many as present, nothing at 0. */
    posts: CreatorPost[];
    /** Fired when a thumbnail is activated — open the real post. */
    onOpenPost?: (post: CreatorPost, index: number) => void;
    /** Grid columns. Default 3. */
    columns?: number;
    className?: string;
}
/**
 * TopPostsStrip — a compact N-up grid of a creator's top posts on a theme.
 * Turns a one-liner claim into a receipt; each tile taps through to the real
 * post. Presentation-only.
 */
declare function TopPostsStrip({ posts, onOpenPost, columns, className, }: TopPostsStripProps): react.JSX.Element | null;

/**
 * CreatorCard — one creator inside a conversation on the brand Explore surface:
 * avatar + name/@handle, the genuine match one-liner (the hero copy), a strip of
 * top posts on this theme, and Save / Start-campaign actions.
 *
 * Presentation-only: it holds no state. The consumer owns `saved` and reacts to
 * `onSave` (a toggle — the button reads "Save" when unsaved, "Unsave" when
 * saved, so the same control saves on Explore and unsaves on the Saved tab).
 * `onStartCampaign` is a one-shot action, not a toggle: it opens the campaign
 * builder for this creator, so the card has no selected state of its own. The
 * avatar resolves a real photo when `avatarUrl` is present and falls back to
 * initials. Post enrichment is additive — the top-posts strip only renders when
 * `topPosts` is supplied, so the card is valid at every data completeness level.
 *
 * The private note editor (Saved tab only) renders when `onNoteChange` is set;
 * `note` is the controlled value.
 */
interface CreatorCardProps {
    name: string;
    /** Handle without the leading "@". */
    handle: string;
    /** The match rationale — the star of the card. Clamped with an expand toggle. */
    oneLiner: string;
    /** Lines the one-liner clamps to before a "More" toggle appears. Default 3. */
    oneLinerLines?: number;
    /**
     * Optional prominent label rendered directly above the one-liner (e.g.
     * "Why they fit"). Uses the `SectionLabel size="label"` token in the brand
     * primary color. Omit to render no label (default).
     */
    oneLinerLabel?: string;
    /** Real profile photo; falls back to initials when absent. */
    avatarUrl?: string | null;
    /**
     * Composite brand-fit score, 0–100. When set, a small color-tinted fit ring
     * renders in the card's top-right corner. Omit (or `null`) to hide it — the
     * card stays valid with no ring, so legacy matches with no score just don't
     * show one.
     */
    score?: number | null;
    /** Top posts on this theme (0–3). Strip + eyebrow hide when empty. */
    topPosts?: CreatorPost[];
    /** Eyebrow above the top-posts strip. Default "Top posts · this theme". */
    topPostsLabel?: string;
    onOpenPost?: (post: CreatorPost, index: number) => void;
    /**
     * Saved state + toggle. The Save button renders only when `onSave` is set and
     * reads "Save" when `saved` is false, "Unsave" when true.
     */
    saved?: boolean;
    onSave?: () => void;
    /** "Start campaign" action. Button renders only when `onStartCampaign` is set. */
    onStartCampaign?: () => void;
    /**
     * Private per-creator note (Saved tab). The editor renders only when
     * `onNoteChange` is provided; `note` is the controlled value.
     */
    note?: string;
    onNoteChange?: (value: string) => void;
    onNoteBlur?: () => void;
    /** Placeholder for the note editor. Default "Add a private note…". */
    notePlaceholder?: string;
    /** Fixed rail-column width (default 300) or e.g. "100%" in a grid. */
    width?: number | string;
    className?: string;
}
declare function CreatorCard({ name, handle, oneLiner, oneLinerLines, oneLinerLabel, avatarUrl, score, topPosts, topPostsLabel, onOpenPost, saved, onSave, onStartCampaign, note, onNoteChange, onNoteBlur, notePlaceholder, width, className, }: CreatorCardProps): react.JSX.Element;

/** Conversation lifecycle, mirroring the brands-API conversation status. */
type ConversationStatus = "active" | "paused" | "archived" | "rejected";
/**
 * ConversationCard — one conversation in a brand's manage-conversations list:
 * the theme name, its description (the section blurb creators get matched
 * against), a status badge, and the Edit / Pause·Resume / Remove actions.
 *
 * The conversation is a brand's unit of intent ("a theme, not a campaign"), so
 * this is its presentation analog to CreatorCard on the Explore surface.
 *
 * Presentation-only: it holds no state. The consumer owns the data and reacts
 * to the callbacks; each action button renders only when its handler is given,
 * so the card is valid read-only (no handlers) or fully editable. `isBusy`
 * disables the actions while a mutation is in flight.
 */
interface ConversationCardProps {
    /** Theme name — the card's heading. */
    name: string;
    /** The conversation description / blurb. Clamped with an inline expand. */
    description: string;
    /** Lifecycle status; drives the badge. Omit to hide the badge. */
    status?: ConversationStatus;
    /** Lines the description clamps to before a "More" toggle. Default 2. */
    descriptionLines?: number;
    /** Show an Edit button wired to this handler. */
    onEdit?: () => void;
    /** Show a Remove button wired to this handler. */
    onDelete?: () => void;
    /**
     * Show a Pause/Resume button wired to this handler. The label follows
     * `status` (Pause when active, Resume when paused); hidden for
     * archived/rejected conversations.
     */
    onTogglePause?: () => void;
    /** Disable the action buttons (e.g. while saving/deleting). */
    isBusy?: boolean;
    /** Extra content rendered below the description (e.g. metadata). */
    children?: ReactNode;
    className?: string;
}
declare function ConversationCard({ name, description, status, descriptionLines, onEdit, onDelete, onTogglePause, isBusy, children, className, }: ConversationCardProps): react.JSX.Element;

/**
 * CreatorCardSkeleton — the loading placeholder for CreatorCard, shaped to match
 * so the async "finding your creators…" populate doesn't shift layout. Composes
 * TrovioSkeleton (brand shimmer, reduced-motion aware). Toggle `showPosts` /
 * `showActions` to mirror whichever card variant is loading.
 */
interface CreatorCardSkeletonProps {
    /** Match the card's width. Default 300. */
    width?: number | string;
    showPosts?: boolean;
    showActions?: boolean;
    /** Reserve the same one-liner slot as CreatorCard so there's no swap shift. Default 3. */
    oneLinerLines?: number;
    className?: string;
}
declare function CreatorCardSkeleton({ width, showPosts, showActions, oneLinerLines, className, }: CreatorCardSkeletonProps): react.JSX.Element;

interface BreadcrumbItem {
    label: ReactNode;
    /** When set, the crumb is a link. The last item is treated as the current page. */
    href?: string;
}
type LinkLike$2 = ComponentType<{
    href: string;
    className?: string;
    children: ReactNode;
}>;
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    /**
     * Link renderer. Pass your router's link (e.g. Next's `Link`) for client-side
     * navigation; defaults to a plain `<a>` so the primitive stays framework-free.
     */
    linkComponent?: LinkLike$2;
    className?: string;
}
/**
 * Breadcrumbs — a back/wayfinding trail. The last item is the current page
 * (muted, not a link). Built for the brand workspace ("Brands / Glossier") and
 * meant to be reused across deeper pages.
 */
declare function Breadcrumbs({ items, linkComponent, className }: BreadcrumbsProps): react.JSX.Element;

type LinkLike$1 = ComponentType<{
    href: string;
    className?: string;
    children?: ReactNode;
}>;
interface BackButtonProps {
    label?: string;
    /** In-place back (e.g. collapse an inline editor). */
    onClick?: () => void;
    /** Or navigate back to a route. Pass your router's link via `linkComponent`. */
    href?: string;
    linkComponent?: LinkLike$1;
    className?: string;
}
/**
 * BackButton — the one consistent "← Back" affordance. Muted to match the
 * Breadcrumbs trail (wayfinding reads as one quiet family, not a loud button),
 * with a clean (non-duotone) arrow so there's no icon background. Works as an
 * in-place action (`onClick`) or a route link (`href` + `linkComponent`).
 */
declare function BackButton({ label, onClick, href, linkComponent, className, }: BackButtonProps): react.JSX.Element;

interface EmailMessageProps {
    /** Subject line. Omitted for non-email channels (renders body-only). */
    subject?: string;
    body: string;
    /** Sender display name (e.g. the creator's name or "You"). */
    fromName?: string;
    /** Sender email, shown muted next to the name. */
    fromEmail?: string;
    /** Optional avatar image for the sender; falls back to an initial. */
    fromAvatarUrl?: string;
    /** Recipient label, e.g. "partnerships@glossier.com" or "Glossier team". */
    to?: string;
    /** Small eyebrow above the subject — e.g. the angle name or a "Recommended" tag. */
    tag?: ReactNode;
    /** Action row (Send / Copy / Rewrite). Rendered in the email "footer". */
    actions?: ReactNode;
    /** Emphasize as the primary/recommended draft. */
    highlighted?: boolean;
    className?: string;
}
/**
 * EmailMessage — renders a drafted pitch the way it'll actually land in an
 * inbox: a Gmail-style card with a sender row, subject, body, and an actions
 * footer. Presentation-only; the consumer supplies copy + action buttons.
 */
declare function EmailMessage({ subject, body, fromName, fromEmail, fromAvatarUrl, to, tag, actions, highlighted, className, }: EmailMessageProps): react.JSX.Element;

type LinkLike = ComponentType<{
    href: string;
    className?: string;
    "aria-label"?: string;
    children?: ReactNode;
}>;
interface BrandCardProps {
    brandName: string;
    description?: string;
    /** Logo URL; falls back to brand initials. */
    logoUrl?: string;
    /** Lines to clamp the description to. Default 2. */
    descriptionLines?: number;
    /**
     * Make the whole card navigate via the overlay-anchor pattern. Pass your
     * router's link (e.g. Next's `Link`) as `linkComponent` for client-side nav.
     */
    href?: string;
    linkComponent?: LinkLike;
    /** When set, a small "x" shows top-right (dismiss). Lifted above the overlay. */
    onDismiss?: () => void;
    dismissLabel?: string;
    className?: string;
}
/**
 * BrandCard — the shared brand tile for the pipeline kanban (and anywhere a
 * compact brand needs to read + link). Intentionally minimal: logo, name, a
 * clamped description, and an optional dismiss "x". The whole card links to the
 * brand workspace; the "x" sits above the overlay so it stays clickable.
 */
declare function BrandCard({ brandName, description, logoUrl, descriptionLines, href, linkComponent, onDismiss, dismissLabel, className, }: BrandCardProps): react.JSX.Element;

/**
 * Type-scale sizes the headline can render at. Mirrors the `text-*` utilities
 * defined in tokens.css — each applies size + line-height + tracking + weight
 * together.
 */
type HeadlineBlockSize = "display" | "hero" | "section" | "body-lg" | "body";
/**
 * Optional font-weight override. Each `size` token ships a built-in weight
 * (e.g. section is 500, hero is 400); set `weight` to decouple the two — handy
 * for a large-but-light editorial headline.
 */
type HeadlineBlockWeight = "extralight" | "light" | "normal" | "medium" | "semibold";
interface HeadlineBlockProps {
    /**
     * The headline content — plain text, or a pre-rendered node (e.g. the
     * consumer's markdown renderer). HeadlineBlock is markdown-agnostic.
     */
    children: ReactNode;
    /** Type-scale size for the headline. Defaults to "section". */
    size?: HeadlineBlockSize;
    /**
     * Font-weight override. Defaults to the size token's built-in weight when
     * unset — pass this to make a headline lighter or heavier than its size.
     */
    weight?: HeadlineBlockWeight;
    /**
     * Optional call to action rendered as a primary button. Presentation-only:
     * the consumer owns the click behavior (client-side nav, opening a
     * messenger, analytics, etc.) — wire it up in `onClick`.
     */
    cta?: {
        label: ReactNode;
        onClick: () => void;
        /** Optional leading icon node rendered before the label. */
        icon?: ReactNode;
    };
    className?: string;
}
/**
 * HeadlineBlock — a prominent single message: large text plus an optional CTA.
 * Built for lead surfaces (e.g. the dashboard "today" block) where one line
 * carries the moment. Size is configurable so the same block works as a hero
 * statement or a quieter section lead.
 */
declare function HeadlineBlock({ children, size, weight, cta, className, }: HeadlineBlockProps): react.JSX.Element;

interface TitledPanelProps {
    /**
     * Panel title, rendered via HeadlineBlock. Optional so the same component
     * works inside a section that already has a shared heading.
     */
    title?: ReactNode;
    /** Title type-scale size. Defaults to "hero" — larger than typical body content. */
    titleSize?: HeadlineBlockSize;
    /** Title font-weight override (defaults to the size token's built-in weight). */
    titleWeight?: HeadlineBlockWeight;
    /** Panel body — anything below the title. */
    children: ReactNode;
    className?: string;
}
/**
 * TitledPanel — a generic titled region: a large title over a content slot.
 * Built to be laid out side by side (e.g. a 2-up grid on desktop) and reused
 * across surfaces. Presentation-only; borderless by default so it fits the
 * flat editorial direction — add card styling via `className` if needed.
 */
declare function TitledPanel({ title, titleSize, titleWeight, children, className, }: TitledPanelProps): react.JSX.Element;

interface LinkCardProps {
    /** Categorical label above the title (e.g. "Trovio Tip", "Course"). */
    eyebrow?: ReactNode;
    title: ReactNode;
    /** Optional hero image, rendered grayscale edge-to-edge at the top. */
    imageUrl?: string;
    /** Destination URL. */
    href: string;
    /** Open in a new tab (default true — these are usually external resources). */
    newTab?: boolean;
    /** Presentation-only click hook — wire analytics/tracking in the consumer. */
    onClick?: () => void;
    className?: string;
}
/**
 * LinkCard — a generic clickable resource card: optional grayscale hero image,
 * an eyebrow label, and a title, wrapping a link. Framing-agnostic so the same
 * shape carries a Trovio tip, a course, an article, etc. Presentation-only;
 * the consumer owns any click tracking via `onClick`.
 */
declare function LinkCard({ eyebrow, title, imageUrl, href, newTab, onClick, className, }: LinkCardProps): react.JSX.Element;

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
 *
 * An optional `note` renders a small, centered momentum chip beneath the rail —
 * a calm, designed-in status badge (sparkle + soft surface pill, not a button)
 * for "you're almost there"-style encouragement. Keep it short; it sits as part
 * of the stepper's composition, not as free-floating text.
 */
type JourneyStepStatus = "completed" | "current" | "upcoming";
interface JourneyStep {
    label: string;
    status: JourneyStepStatus;
    /** Only meaningful on a `current` step: shows a spinning ring (work in progress). */
    loading?: boolean;
}
declare function JourneyStepper({ steps, onCurrentClick, note, }: {
    steps: JourneyStep[];
    onCurrentClick?: () => void;
    /** Short momentum line rendered as a chip below the rail (e.g. "You're almost there"). */
    note?: string;
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
    /** @deprecated No longer rendered — Media Kit dropped its "top pillar" line
     *  and Brand Matcher now uses fixed value-prop rows. Kept so existing payloads
     *  parse. */
    pillars?: LockedFeaturePillar[];
    /** @deprecated No longer rendered — the Post Analyzer preview dropped its
     *  "{n} videos analyzed" line. Kept so existing payloads parse. */
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
    /** Right-aligned call-to-action label, written per feature by the consumer
     *  (e.g. "Create my media kit", "See my matches"). Omitted → no CTA shown.
     *  Visual only — the whole card already triggers `onActivate` on tap. */
    ctaLabel?: string;
    /** Show the card's identity (icon + title + lock) over a breathing skeleton
     *  preview — for the living screen while the rest of the page is generating. */
    loading?: boolean;
}
declare function LockedFeatureCard({ item, portraitUrl, creatorName, onActivate, ctaLabel, loading, }: LockedFeatureCardProps): react.JSX.Element;

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

interface CourseCalloutProps {
    /** Categorical label above the title (e.g. "Partner course"). */
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    /** Full-color hero image, shown when no `media` slot is supplied. */
    imageUrl?: string;
    /** Rich media rendered edge-to-edge at the top (e.g. an inline video player
     *  supplied by the consumer). Takes precedence over `imageUrl`. */
    media?: ReactNode;
    /** Discounted price, e.g. "$399". */
    priceLabel?: ReactNode;
    /** Original price, struck through, e.g. "$549". */
    originalPriceLabel?: ReactNode;
    /** Discount badge, e.g. "20% off". */
    discountLabel?: ReactNode;
    /** Call-to-action label (e.g. "Enroll with your Trovio discount"). */
    ctaLabel: ReactNode;
    /** External destination for the CTA. When set the CTA renders as a link
     *  (used post-paywall to deep-link the sales page). */
    ctaHref?: string;
    /** Presentation-only click hook — wire analytics/tracking in the consumer.
     *  Pre-paywall consumers also open the paywall from here. */
    onCtaClick?: () => void;
    /** Pre-paywall treatment: shows a lock affordance and frames the price as an
     *  after-activation incentive. The consumer still owns the CTA behavior. */
    locked?: boolean;
    className?: string;
}
/**
 * CourseCallout — a featured partner-course card: hero media (or image), an
 * eyebrow, headline, description, a discounted-price row, and a CTA. Used both
 * post-paywall (unlocked, CTA links out to enroll) and pre-paywall (`locked`,
 * CTA opens the activation paywall).
 *
 * Presentation-only: all copy/pricing/media are passed in verbatim and the
 * consumer owns the CTA behavior + analytics via `ctaHref` / `onCtaClick`.
 */
declare function CourseCallout({ eyebrow, title, description, imageUrl, media, priceLabel, originalPriceLabel, discountLabel, ctaLabel, ctaHref, onCtaClick, locked, className, }: CourseCalloutProps): react.JSX.Element;

interface CoursePromoBannerProps {
    /** Small accent label above the headline (e.g. "Trovio-exclusive"). */
    eyebrow?: ReactNode;
    headline: ReactNode;
    /** Optional supporting line under the headline. */
    subhead?: ReactNode;
    /** Portrait/lifestyle image; shown full-bleed alongside the copy (not cropped
     *  to a thin banner — a tall column on desktop, a 4:5 crop on mobile). */
    imageUrl?: string;
    /** Short proof points, rendered as a row of chips. */
    highlights?: ReactNode[];
    priceLabel?: ReactNode;
    originalPriceLabel?: ReactNode;
    discountLabel?: ReactNode;
    ctaLabel: ReactNode;
    /** External destination for the CTA. When set the CTA renders as a link. */
    ctaHref?: string;
    /** Presentation-only click hook — wire analytics/tracking in the consumer. */
    onCtaClick?: () => void;
    className?: string;
}
/**
 * CoursePromoBanner — a bold, image-forward promo hero for a partner course.
 * Distinct from the calmer CourseCallout: a tinted gradient panel with the
 * creator's photo shown large (portrait column on desktop, 4:5 on mobile),
 * a punchy headline, proof chips, a discounted-price row, and a prominent
 * full-width CTA spanning the base of the card. Meant to grab attention
 * pre-paywall.
 *
 * Presentation-only: all copy/pricing/image pass through verbatim; the consumer
 * owns CTA behavior + analytics via `ctaHref` / `onCtaClick`.
 */
declare function CoursePromoBanner({ eyebrow, headline, subhead, imageUrl, highlights, priceLabel, originalPriceLabel, discountLabel, ctaLabel, ctaHref, onCtaClick, className, }: CoursePromoBannerProps): react.JSX.Element;

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

export { Avatar, type AvatarProps, BackButton, type BackButtonProps, BrandCard, type BrandCardProps, BrandLogo, type BrandLogoProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Carousel, type CarouselHandle, type CarouselProps, type CarouselScrollState, ClampText, type ClampTextProps, ConversationCard, type ConversationCardProps, type ConversationStatus, CourseCallout, type CourseCalloutProps, CoursePromoBanner, type CoursePromoBannerProps, CreatorCard, type CreatorCardProps, CreatorCardSkeleton, type CreatorCardSkeletonProps, type CreatorPost, Drawer, type DrawerProps, EmailMessage, type EmailMessageProps, GeneratingBlock, type GeneratingBlockProps, GoalCard, type GoalCardProps, HeadlineBlock, type HeadlineBlockProps, type HeadlineBlockSize, type HeadlineBlockWeight, type JourneyStep, type JourneyStepStatus, JourneyStepper, LinkCard, type LinkCardProps, LockChip, LockedFeatureCard, type LockedFeatureCardProps, type LockedFeatureItem, type LockedFeatureTreatment, type LockedFeatureVariant, MediaKitPreview, type MediaKitPreviewProps, OfferField, type OfferFieldProps, OnboardingBrandHeader, type OnboardingBrandHeaderProps, type PillarChipItem, PillarChips, PlatformIcon, type PortraitHandle, PortraitHero, type PortraitHeroProps, QuoteCard, type QuoteCardProps, RingGauge, type RingGaugeProps, ScoreRing, type ScoreRingProps, SectionHeading, SectionLabel, SegmentedToggle, type SegmentedToggleOption, type SegmentedToggleProps, Sparkline, type SparklineProps, StatStrip, type StatStripProps, Timeline, type TimelineItem, type TimelineProps, TitledPanel, type TitledPanelProps, TopPostsStrip, type TopPostsStripProps, TrovioBadge, type TrovioBadgeProps, TrovioButton, type TrovioButtonProps, TrovioCheckbox, type TrovioCheckboxProps, TrovioDatePicker, type TrovioDatePickerProps, TrovioIcon, type TrovioIconProps, TrovioInput, type TrovioInputProps, TrovioModal, type TrovioModalProps, TrovioProgressBar, type TrovioProgressBarProps, TrovioSelect, type TrovioSelectOption, type TrovioSelectProps, TrovioSkeleton, type TrovioSkeletonProps, TrovioSpinner, TrovioSwitch, type TrovioSwitchProps, TrovioTextArea, type TrovioTextAreaProps, WidgetCard, type WidgetCardProps, formatCompactNumber, platformLabel };
