"use client";

import type { IconType } from "react-icons";

import {
  PiIdentificationCardDuotone,
  PiHandshakeDuotone,
  PiSparkleDuotone,
  PiLockSimpleDuotone,
} from "react-icons/pi";

import { PlatformIcon } from "./platform-icon";
import { Avatar } from "./avatar";
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
  /** Recent content image URLs to illustrate the Media Kit. */
  sampleImages?: string[];
  /** Real content pillars → Media Kit "top pillar" + Brand Matcher rows
   *  (grounded categories; no fabricated match scores until matching runs). */
  pillars?: LockedFeaturePillar[];
  /** Count of already-analyzed posts → real Post Analyzer teaser line. */
  analyzedCount?: number;
}

export interface LockedFeatureCardProps {
  item: LockedFeatureItem;
  /** Creator portrait for the Media Kit headshot. */
  portraitUrl?: string | null;
  /** Invoked on tap (e.g. open the upsell). Analytics live in the consumer. */
  onActivate?: () => void;
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
const EYEBROW = "text-micro uppercase text-trovio-primary";
const META_TEXT =
  "text-[11px] text-trovio-light-text-muted dark:text-trovio-dark-text-muted";

function PlaceholderTile({ className }: { className?: string }) {
  return (
    <div
      className={`bg-gradient-to-br from-trovio-primary/15 to-trovio-primary/5 ${className ?? ""}`}
    />
  );
}

/**
 * Media Kit — a miniature one-pager: identity + the cross-platform metrics
 * brands ask for + (real top pillar | illustrative audience) + a content strip.
 */
function MediaKitPreview({
  portraitUrl,
  images,
  followers,
  platforms,
  engagementRate,
  avgViews,
  topPillar,
}: {
  portraitUrl?: string | null;
  images?: string[];
  followers?: number | null;
  platforms?: string[];
  engagementRate?: number | null;
  avgViews?: number | null;
  topPillar?: string;
}) {
  const tiles = (images ?? []).slice(0, 3);
  const metrics = [
    {
      label: "Followers",
      value: followers != null ? formatCompactNumber(followers) : "—",
    },
    {
      label: "Eng. rate",
      value:
        engagementRate != null
          ? `${(engagementRate * 100).toFixed(1)}%`
          : "5.2%",
    },
    {
      label: "Avg. views",
      value: avgViews != null ? formatCompactNumber(avgViews) : "8.4K",
    },
  ];

  return (
    <div className={PREVIEW_SHELL}>
      <div className="flex items-center gap-2.5">
        <Avatar imageUrl={portraitUrl} size={36} />
        <div className="min-w-0 flex-1">
          <p className={EYEBROW}>Media Kit</p>
          {platforms && platforms.length > 0 && (
            <span className="mt-0.5 flex items-center gap-1.5 text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              {platforms.map((p) => (
                <PlatformIcon key={p} platform={p} size={13} />
              ))}
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 border-y border-trovio-light-border py-2.5 dark:border-trovio-dark-border">
        {metrics.map((m) => (
          <div key={m.label}>
            <p className="text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text">
              {m.value}
            </p>
            <p className={META_TEXT}>{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-2.5">
        <div className={`mb-1 flex justify-between ${META_TEXT}`}>
          <span>{topPillar ? "Top pillar" : "Audience"}</span>
          <span className="truncate pl-2">
            {topPillar ?? "65% women · 25–34"}
          </span>
        </div>
        <div className="flex h-1.5 overflow-hidden rounded-full">
          <div
            className="bg-trovio-primary/70"
            style={{ width: topPillar ? "100%" : "65%" }}
          />
          {!topPillar && <div className="flex-1 bg-trovio-primary/25" />}
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) =>
          tiles[i] ? (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                src={tiles[i]}
              />
            </div>
          ) : (
            <PlaceholderTile key={i} className="aspect-square rounded" />
          ),
        )}
      </div>
    </div>
  );
}

/**
 * Brand Matcher — personalized rows. With real pillars we show the creator's own
 * brand "spaces" + why (no fabricated scores until matching runs); without them
 * we fall back to illustrative category + score rows.
 */
function BrandMatcherPreview({
  categories,
}: {
  categories?: LockedFeaturePillar[];
}) {
  const hasReal = Boolean(categories && categories.length);
  const rows = hasReal
    ? categories!.slice(0, 3).map((c) => ({
        category: c.label,
        reason: c.reason ?? "A natural fit for your content",
        score: null as number | null,
      }))
    : [
        {
          category: "Beauty & Skincare",
          reason: "Aligns with your skincare content",
          score: 94,
        },
        {
          category: "Health & Wellness",
          reason: "Strong fit for your audience",
          score: 89,
        },
        {
          category: "Travel & Lifestyle",
          reason: "Matches your lifestyle pillar",
          score: 86,
        },
      ];

  return (
    <div className={PREVIEW_SHELL}>
      <p className={`mb-2.5 ${EYEBROW}`}>
        {hasReal ? "Brands in your spaces" : "12 potential matches"}
      </p>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div key={r.category} className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-trovio-primary/10">
              <PiHandshakeDuotone className="absolute inset-0 m-auto h-4 w-4 text-trovio-primary/40" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text">
                {r.category}
              </p>
              <p className={`truncate ${META_TEXT}`}>{r.reason}</p>
            </div>
            {r.score != null && (
              <span className="shrink-0 text-sm font-bold text-trovio-primary">
                {r.score}%
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Circular score ring (donut) for the Post Analyzer. */
function ScoreRing({ score, size = 52 }: { score: number; size?: number }) {
  const stroke = 5;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - score / 100);

  return (
    <svg
      className="shrink-0"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
    >
      <circle
        className="stroke-trovio-light-border dark:stroke-trovio-dark-border"
        cx={size / 2}
        cy={size / 2}
        fill="none"
        r={r}
        strokeWidth={stroke}
      />
      <circle
        className="stroke-trovio-primary"
        cx={size / 2}
        cy={size / 2}
        fill="none"
        r={r}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        strokeWidth={stroke}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        className="fill-trovio-light-text text-sm font-bold dark:fill-trovio-dark-text"
        dominantBaseline="central"
        textAnchor="middle"
        x="50%"
        y="50%"
      >
        {score}
      </text>
    </svg>
  );
}

/**
 * Post Analyzer — score ring + AI insight + dimension bars. The score/bars stay
 * illustrative until the eval scorer runs; a real "{n} videos analyzed" line is
 * shown when the consumer supplies analyzedCount.
 */
function PostAnalyzerPreview({
  thumbnailUrl,
  analyzedCount,
}: {
  thumbnailUrl?: string | null;
  analyzedCount?: number;
}) {
  const metrics = [
    { label: "Hook", pct: 86 },
    { label: "Pacing", pct: 72 },
    { label: "Pillar fit", pct: 64 },
  ];

  return (
    <div className={PREVIEW_SHELL}>
      <div className="flex items-center gap-3">
        <div className="relative aspect-[9/16] w-14 shrink-0 overflow-hidden rounded">
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
          <p className={EYEBROW}>Overall score</p>
          <p className="mt-0.5 text-sm font-medium text-trovio-light-text dark:text-trovio-dark-text">
            Strong hook — tighten the middle.
          </p>
          {analyzedCount != null && analyzedCount > 0 && (
            <p className={`mt-1 ${META_TEXT}`}>
              {analyzedCount} of your videos analyzed
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <span className={`w-16 shrink-0 ${META_TEXT}`}>{m.label}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-trovio-light-border dark:bg-trovio-dark-border">
              <div
                className="h-full rounded-full bg-gradient-to-r from-trovio-primary/60 to-trovio-primary"
                style={{ width: `${m.pct}%` }}
              />
            </div>
            <span className="w-7 shrink-0 text-right text-[11px] font-medium text-trovio-light-text dark:text-trovio-dark-text">
              {m.pct}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LockedFeatureCard({
  item,
  portraitUrl,
  onActivate,
}: LockedFeatureCardProps) {
  const meta = VARIANT_META[item.variant];
  const description = item.description?.trim() || meta.value;

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
        {description}
      </p>

      {item.variant === "media_kit" && (
        <MediaKitPreview
          avgViews={item.stats?.avgViews}
          engagementRate={item.stats?.engagementRate}
          followers={item.stats?.followers}
          images={item.sampleImages}
          platforms={item.stats?.platforms}
          portraitUrl={portraitUrl}
          topPillar={item.pillars?.[0]?.label}
        />
      )}
      {item.variant === "post_analyzer" && (
        <PostAnalyzerPreview
          analyzedCount={item.analyzedCount}
          thumbnailUrl={item.sampleThumbnailUrl}
        />
      )}
      {item.variant === "brand_matcher" && (
        <BrandMatcherPreview categories={item.pillars} />
      )}
    </button>
  );
}
