"use client";

import type { IconType } from "react-icons";
import type { ReactNode } from "react";

import {
  PiIdentificationCardDuotone,
  PiHandshakeDuotone,
  PiSparkleDuotone,
  PiLockSimpleDuotone,
  PiUsersThreeDuotone,
  PiTrendUpDuotone,
  PiEyeDuotone,
  PiStarDuotone,
  PiLightningDuotone,
  PiHeartDuotone,
  PiClockDuotone,
  PiMagnetDuotone,
  PiWaveSineDuotone,
  PiTargetDuotone,
  PiArrowRightBold,
} from "react-icons/pi";

import { PlatformIcon } from "./platform-icon";
import { Avatar } from "./avatar";
import { RingGauge } from "./ring-gauge";
import { SectionLabel } from "./section-label";
import { formatCompactNumber } from "../utils/format-number";

/**
 * LockedFeatureCard (Component) — pre-paywall teaser for a tool that unlocks on
 * activation. Each preview sells the OUTCOME (a polished media kit, personalized
 * brand matches, an AI post score). Every preview uses REAL data when the
 * consumer supplies it and falls back to illustrative example data when absent,
 * so the cards are correct the moment the backend starts passing real fields —
 * no LLM call required. Presentation-only: tap behavior is injected via
 * `onActivate`.
 */
export type LockedFeatureVariant =
  | "media_kit"
  | "brand_matcher"
  | "post_analyzer";
export type LockedFeatureTreatment = "crisp" | "veiled";

export interface LockedFeaturePillar {
  label: string;
  reason?: string;
}

export interface LockedFeatureItem {
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

export interface LockedFeatureCardProps {
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

const VARIANT_META: Record<
  LockedFeatureVariant,
  { title: string; value: string; Icon: IconType }
> = {
  media_kit: {
    title: "Media Kit",
    value: "One link that makes brands take you seriously.",
    Icon: PiIdentificationCardDuotone,
  },
  brand_matcher: {
    title: "Brand Matcher",
    value: "Real brands matched to your pillars, after you activate.",
    Icon: PiHandshakeDuotone,
  },
  post_analyzer: {
    title: "Post Analyzer",
    value: "Score your next post before you publish.",
    Icon: PiSparkleDuotone,
  },
};

const PREVIEW_SHELL =
  "rounded-lg border border-trovio-light-border bg-trovio-light-bg p-3 dark:border-trovio-dark-border dark:bg-trovio-dark-bg";
const META_TEXT =
  "text-[11px] text-trovio-light-text-muted dark:text-trovio-dark-text-muted";

/**
 * Render inline `**bold**` emphasis from the teaser copy (which is markdown)
 * without pulling in a full markdown parser.
 */
function renderEmphasis(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong
        key={i}
        className="font-semibold text-trovio-light-text dark:text-trovio-dark-text"
      >
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

function PlaceholderTile({ className }: { className?: string }) {
  return (
    <div
      className={`bg-gradient-to-br from-trovio-primary/15 to-trovio-primary/5 ${className ?? ""}`}
    />
  );
}

/**
 * Media Kit — the kit's own cover, mirroring the real one-pager: a tinted
 * identity masthead (portrait + name + platforms, with a soft dotted motif)
 * over an icon-tile stat strip of the cross-platform metrics brands ask for.
 * A portfolio cover, not a post grid.
 */
function MediaKitPreview({
  portraitUrl,
  name,
  followers,
  platforms,
  engagementRate,
  avgViews,
}: {
  portraitUrl?: string | null;
  name?: string;
  followers?: number | null;
  platforms?: string[];
  engagementRate?: number | null;
  avgViews?: number | null;
}) {
  const metrics = [
    {
      label: "Followers",
      value: followers != null ? formatCompactNumber(followers) : "—",
      Icon: PiUsersThreeDuotone,
    },
    {
      label: "Eng. rate",
      value:
        engagementRate != null
          ? `${(engagementRate * 100).toFixed(1)}%`
          : "5.2%",
      Icon: PiTrendUpDuotone,
    },
    {
      label: "Avg. views",
      value: avgViews != null ? formatCompactNumber(avgViews) : "8.4K",
      Icon: PiEyeDuotone,
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-trovio-light-border bg-trovio-light-bg dark:border-trovio-dark-border dark:bg-trovio-dark-bg">
      {/* Masthead band — tinted cover with a soft dotted motif, top-right */}
      <div className="relative overflow-hidden bg-gradient-to-br from-trovio-primary/[0.07] to-trovio-primary/[0.03] px-4 py-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-3 top-1/2 h-20 w-36 -translate-y-1/2 text-trovio-primary/30"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "13px 13px",
            maskImage: "linear-gradient(to left, black 35%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 35%, transparent 100%)",
          }}
        />
        <div className="relative flex items-center gap-3.5">
          <Avatar imageUrl={portraitUrl} name={name ?? ""} size={56} />
          <div className="min-w-0 flex-1">
            <SectionLabel tone="primary">Media Kit</SectionLabel>
            {name ? (
              <p className="truncate text-lg font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text">
                {name}
              </p>
            ) : null}
            {platforms && platforms.length > 0 && (
              <span className="mt-1 flex items-center gap-1.5 text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
                {platforms.map((p) => (
                  <PlatformIcon key={p} platform={p} size={14} />
                ))}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Stat strip — the cross-platform numbers brands ask for */}
      <div className="grid grid-cols-3 divide-x divide-trovio-light-border dark:divide-trovio-dark-border">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2 px-3 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-trovio-primary/10 text-trovio-primary">
              <m.Icon size={17} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text">
                {m.value}
              </p>
              <p className={`truncate ${META_TEXT}`}>{m.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Brand Matcher — the value the tool delivers, in three fixed rows (icon +
 * headline + supporting line + an outcome badge). The copy is intentionally
 * static marketing text about the feature itself (not creator data), so it's
 * hardcoded here rather than threaded from pillars or the backend.
 */
const BRAND_MATCHER_ROWS: {
  Tile: IconType;
  Badge: IconType;
  title: string;
  description: string;
  badgeLabel: string;
}[] = [
  {
    Tile: PiStarDuotone,
    Badge: PiTrendUpDuotone,
    title: "Practical. Helpful. Relevant.",
    description:
      "You share real solutions that make a difference. We match you with brands that do too.",
    badgeLabel: "High alignment",
  },
  {
    Tile: PiUsersThreeDuotone,
    Badge: PiHeartDuotone,
    title: "Built for Trust & Authenticity",
    description:
      "We look beyond keywords to find partners who fit your voice and values.",
    badgeLabel: "Audience-first",
  },
  {
    Tile: PiLightningDuotone,
    Badge: PiClockDuotone,
    title: "Opportunities Worth Your Time",
    description:
      "Get matched with brands that are ready, relevant, and a great fit.",
    badgeLabel: "Save time",
  },
];

function BrandMatcherPreview() {
  return (
    <div className="divide-y divide-trovio-light-border overflow-hidden rounded-lg border border-trovio-light-border bg-trovio-light-bg dark:divide-trovio-dark-border dark:border-trovio-dark-border dark:bg-trovio-dark-bg">
      {BRAND_MATCHER_ROWS.map((row) => (
        <div key={row.title} className="flex items-center gap-3 p-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-trovio-primary/10 text-trovio-primary">
            <row.Tile size={22} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text">
              {row.title}
            </p>
            <p className="mt-0.5 text-xs leading-snug text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              {row.description}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-lg bg-trovio-primary/10 px-2.5 py-1 text-trovio-primary">
            <row.Badge className="shrink-0" size={13} />
            <span className="whitespace-nowrap text-xs font-medium">
              {row.badgeLabel}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

/** Circular score ring for the Post Analyzer — RingGauge with the score + "/100"
 *  stacked inside. */
function ScoreRing({ score, size = 56 }: { score: number; size?: number }) {
  return (
    <RingGauge size={size} value={score / 100}>
      <span className="flex flex-col items-center leading-none">
        <span className="text-base font-bold text-trovio-light-text dark:text-trovio-dark-text">
          {score}
        </span>
        <span className="mt-0.5 text-[9px] font-medium text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          /100
        </span>
      </span>
    </RingGauge>
  );
}

/** Benchmark all three dimensions are measured against (illustrative). */
const POST_ANALYZER_BENCHMARK = 80;
const POST_ANALYZER_METRICS: {
  Icon: IconType;
  title: string;
  subtitle: string;
  pct: number;
}[] = [
  {
    Icon: PiMagnetDuotone,
    title: "Hook",
    subtitle: "Grab attention early.",
    pct: 86,
  },
  {
    Icon: PiWaveSineDuotone,
    title: "Pacing",
    subtitle: "Keep momentum going.",
    pct: 72,
  },
  {
    Icon: PiTargetDuotone,
    title: "Pillar fit",
    subtitle: "Aligns with your core topics.",
    pct: 64,
  },
];

/**
 * Post Analyzer — an overall-score masthead (thumbnail + ring + AI verdict) over
 * per-dimension sliders, each scored against an 80 benchmark. The score/verdict/
 * dimensions are illustrative until the eval scorer runs.
 */
function PostAnalyzerPreview({
  thumbnailUrl,
}: {
  thumbnailUrl?: string | null;
}) {
  return (
    <div className={PREVIEW_SHELL}>
      {/* Masthead — thumbnail + overall score ring + AI verdict */}
      <div className="flex items-center gap-3.5">
        <div className="relative aspect-[4/5] w-16 shrink-0 overflow-hidden rounded-lg">
          {thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src={thumbnailUrl}
            />
          ) : (
            <PlaceholderTile className="h-full w-full" />
          )}
        </div>
        <ScoreRing score={92} />
        <div className="min-w-0 flex-1">
          <span className="inline-flex rounded-md bg-trovio-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-trovio-primary">
            Overall score
          </span>
          <p className="mt-1.5 text-sm font-bold leading-snug text-trovio-light-text dark:text-trovio-dark-text">
            Strong hook — tighten the middle.
          </p>
          <p className={`mt-1 leading-snug ${META_TEXT}`}>
            Great start — your post is well-structured. A few tweaks will make it
            even stronger.
          </p>
        </div>
      </div>

      {/* Per-dimension sliders, each measured against the 80 benchmark tick */}
      <div className="mt-4 space-y-1 border-t border-trovio-light-border pt-3 dark:border-trovio-dark-border">
        {POST_ANALYZER_METRICS.map((m) => (
          <div key={m.title} className="flex items-center gap-3 py-1.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-trovio-primary/10 text-trovio-primary">
              <m.Icon size={18} />
            </span>
            <div className="w-24 shrink-0">
              <p className="text-sm font-semibold leading-tight text-trovio-light-text dark:text-trovio-dark-text">
                {m.title}
              </p>
              <p className={`line-clamp-2 leading-snug ${META_TEXT}`}>
                {m.subtitle}
              </p>
            </div>
            <div className="relative flex-1">
              <div className="relative h-1.5 w-full rounded-full bg-trovio-light-border dark:bg-trovio-dark-border">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-trovio-primary/60 to-trovio-primary"
                  style={{ width: `${m.pct}%` }}
                />
                {/* 80 benchmark tick */}
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 h-3.5 -translate-x-1/2 -translate-y-1/2 border-l border-dashed border-trovio-light-text-muted/50 dark:border-trovio-dark-text-muted/50"
                  style={{ left: `${POST_ANALYZER_BENCHMARK}%` }}
                />
                {/* draggable-style knob at the score position */}
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-trovio-primary bg-white shadow-sm dark:bg-trovio-dark-surface"
                  style={{ left: `${m.pct}%` }}
                />
              </div>
            </div>
            <div className="w-9 shrink-0 text-right">
              <p className="text-sm font-bold leading-none text-trovio-light-text dark:text-trovio-dark-text">
                {m.pct}
              </p>
              <p className={`mt-0.5 ${META_TEXT}`}>/100</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Card identity (icon + title + lock) over breathing skeletons — shown while
 *  the living screen is still assembling, so the card is present but reads as
 *  "coming" rather than a finished upsell. */
function LockedFeatureCardSkeleton({ variant }: { variant: LockedFeatureVariant }) {
  const meta = VARIANT_META[variant];

  return (
    <div className="w-full rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-4 dark:border-trovio-dark-border dark:bg-trovio-dark-surface">
      <div className="mb-2 flex items-center gap-2">
        <meta.Icon
          className="shrink-0 text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
          size={22}
        />
        <h3 className="flex-1 text-base font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          {meta.title}
        </h3>
        <PiLockSimpleDuotone
          className="shrink-0 text-trovio-light-text-muted/60 dark:text-trovio-dark-text-muted/60"
          size={18}
        />
      </div>
      <div className="mb-3 space-y-1.5">
        <div className="h-3 w-full animate-pulse rounded bg-trovio-light-text/10 dark:bg-trovio-dark-text/10" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-trovio-light-text/10 dark:bg-trovio-dark-text/10" />
      </div>
      <div className="h-24 w-full animate-pulse rounded-lg bg-trovio-light-text/5 dark:bg-trovio-dark-text/5" />
    </div>
  );
}

export function LockedFeatureCard({
  item,
  portraitUrl,
  creatorName,
  onActivate,
  ctaLabel,
  loading,
}: LockedFeatureCardProps) {
  const meta = VARIANT_META[item.variant];
  const description = item.description?.trim() || meta.value;
  const cta = ctaLabel?.trim();

  if (loading) return <LockedFeatureCardSkeleton variant={item.variant} />;

  return (
    <button
      className="group w-full rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-4 text-left transition-colors hover:border-trovio-light-text-muted/40 dark:border-trovio-dark-border dark:bg-trovio-dark-surface"
      type="button"
      onClick={onActivate}
    >
      <div className="mb-2 flex items-center gap-2">
        <meta.Icon
          className="shrink-0 text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
          size={22}
        />
        <h3 className="flex-1 text-base font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          {meta.title}
        </h3>
        <PiLockSimpleDuotone
          className="shrink-0 text-trovio-light-text-muted/60 dark:text-trovio-dark-text-muted/60"
          size={18}
        />
      </div>

      <p className="mb-3 text-sm leading-relaxed text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
        {renderEmphasis(description)}
      </p>

      {item.variant === "media_kit" && (
        <MediaKitPreview
          avgViews={item.stats?.avgViews}
          engagementRate={item.stats?.engagementRate}
          followers={item.stats?.followers}
          name={creatorName}
          platforms={item.stats?.platforms}
          portraitUrl={portraitUrl}
        />
      )}
      {item.variant === "post_analyzer" && (
        <PostAnalyzerPreview thumbnailUrl={item.sampleThumbnailUrl} />
      )}
      {item.variant === "brand_matcher" && <BrandMatcherPreview />}

      {cta ? (
        <div className="mt-3 flex justify-end">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-trovio-primary">
            {cta}
            <PiArrowRightBold
              className="transition-transform group-hover:translate-x-0.5"
              size={13}
            />
          </span>
        </div>
      ) : null}
    </button>
  );
}
