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
 * activation. Media Kit / Post Analyzer render ILLUSTRATIVE visual examples
 * (real imagery where the consumer provides it, mock numbers); Brand Matcher is
 * veiled. Presentation-only: tap behavior is injected via `onActivate` (the app
 * decides what activation means / fires analytics).
 */
export type LockedFeatureVariant =
  | "media_kit"
  | "brand_matcher"
  | "post_analyzer";
export type LockedFeatureTreatment = "crisp" | "veiled";

export interface LockedFeatureItem {
  variant: LockedFeatureVariant;
  treatment: LockedFeatureTreatment;
  /** Real stats for the crisp Media Kit preview. */
  stats?: { followers?: number | null; platforms?: string[] };
  /** Personalized teaser copy; falls back to the built-in line. */
  description?: string;
  /** Recent post thumbnail to illustrate Post Analyzer. */
  sampleThumbnailUrl?: string | null;
  /** Recent content image URLs to illustrate the Media Kit. */
  sampleImages?: string[];
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

function PlaceholderTile({ className }: { className?: string }) {
  return (
    <div
      className={`bg-gradient-to-br from-trovio-primary/15 to-trovio-primary/5 ${className ?? ""}`}
    />
  );
}

function MediaKitPreview({
  portraitUrl,
  images,
  followers,
  platforms,
}: {
  portraitUrl?: string | null;
  images?: string[];
  followers?: number | null;
  platforms?: string[];
}) {
  const tiles = (images ?? []).slice(0, 3);

  return (
    <div className="rounded-lg border border-trovio-light-border bg-trovio-light-bg p-3 dark:border-trovio-dark-border dark:bg-trovio-dark-bg">
      <div className="flex items-center gap-3">
        <Avatar imageUrl={portraitUrl} size={48} />
        <div className="min-w-0">
          {followers != null && (
            <p className="text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text">
              {formatCompactNumber(followers)} followers
            </p>
          )}
          {platforms && platforms.length > 0 && (
            <span className="mt-0.5 flex items-center gap-1.5 text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              {platforms.map((p) => (
                <PlatformIcon key={p} platform={p} size={14} />
              ))}
            </span>
          )}
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) =>
          tiles[i] ? (
            <div key={i} className="relative aspect-square overflow-hidden rounded">
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

function PostAnalyzerPreview({
  thumbnailUrl,
}: {
  thumbnailUrl?: string | null;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-trovio-light-border bg-trovio-light-bg p-3 dark:border-trovio-dark-border dark:bg-trovio-dark-bg">
      <div className="relative aspect-[9/16] w-16 shrink-0 overflow-hidden rounded">
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
        <span className="absolute bottom-1 left-1 rounded bg-black/70 px-1 text-[10px] font-bold text-white">
          92
        </span>
      </div>
      {/* Illustrative metric bars — example, not a real analysis */}
      <div className="flex-1 space-y-2">
        {[
          { label: "Hook", pct: 86 },
          { label: "Pacing", pct: 72 },
          { label: "Pillar fit", pct: 64 },
        ].map((m) => (
          <div key={m.label}>
            <div className="mb-1 flex justify-between text-[11px] text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              <span>{m.label}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-trovio-light-border dark:bg-trovio-dark-border">
              <div
                className="h-full rounded-full bg-trovio-primary/70"
                style={{ width: `${m.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandMatcherPreview() {
  return (
    <div className="space-y-2 rounded-lg border border-trovio-light-border bg-trovio-light-bg p-3 dark:border-trovio-dark-border dark:bg-trovio-dark-bg">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-6 w-6 shrink-0 rounded-full bg-trovio-primary/15" />
          <span
            aria-hidden
            className="h-2.5 flex-1 rounded-full bg-trovio-light-text/10 blur-[2px] dark:bg-trovio-dark-text/15"
            style={{ maxWidth: `${72 - i * 14}%` }}
          />
        </div>
      ))}
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
          followers={item.stats?.followers}
          images={item.sampleImages}
          platforms={item.stats?.platforms}
          portraitUrl={portraitUrl}
        />
      )}
      {item.variant === "post_analyzer" && (
        <PostAnalyzerPreview thumbnailUrl={item.sampleThumbnailUrl} />
      )}
      {item.variant === "brand_matcher" && <BrandMatcherPreview />}
    </button>
  );
}
