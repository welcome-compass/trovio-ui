import * as react from 'react';
import react__default, { ReactNode } from 'react';
import { ChipProps } from '@heroui/react';
export { DesignTokens, brandColors, darkColors, designTokens, fonts, lightColors, radius, semanticColors, shadow, typeScale } from './tokens.cjs';

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

declare function PlatformIcon({ platform, className, size, }: {
    platform: string;
    className?: string;
    size?: number;
}): react.JSX.Element;
/** Human-readable platform name, e.g. "instagram" -> "Instagram". */
declare function platformLabel(platform: string): string;

/**
 * LockChip — the small "locked" badge used on locked feature cards. Shared so
 * the acquainted locked cards (and any future locked surfaces) read identically.
 */
declare function LockChip({ label }: {
    label?: string;
}): react.JSX.Element;

/**
 * JourneyStepper — numbered step indicator for "where you stand". Simple,
 * editorial styling (matches the mock): larger numbered circles + labels below,
 * a single indigo accent for done/current, neutral for upcoming.
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

interface TrovioBadgeProps extends Omit<ChipProps, "color"> {
    status: "published" | "draft" | "archived" | "success" | "warning" | "error" | "info";
}
declare const TrovioBadge: react__default.FC<TrovioBadgeProps>;

interface TrovioSpinnerProps {
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}
declare const TrovioSpinner: ({ size, className, }: TrovioSpinnerProps) => react.JSX.Element;

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

export { type JourneyStep, type JourneyStepStatus, JourneyStepper, LockChip, type PillarChipItem, PillarChips, PlatformIcon, SectionHeading, SectionLabel, StatStrip, type StatStripProps, TrovioBadge, type TrovioBadgeProps, TrovioSpinner, formatCompactNumber, platformLabel };
