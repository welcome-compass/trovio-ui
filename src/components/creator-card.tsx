"use client";

import { PiBookmarkSimple, PiBookmarkSimpleFill } from "react-icons/pi";
import clsx from "clsx";

import { Avatar } from "./avatar";
import { ClampText } from "./clamp-text";
import { RingGauge } from "./ring-gauge";
import { SectionLabel } from "./section-label";
import { TrovioButton } from "./trovio-button";
import { TrovioTextArea } from "./trovio-textarea";
import { TopPostsStrip, type CreatorPost } from "./top-posts-strip";

export type { CreatorPost };

/**
 * Composite brand-fit score (0–100) → arc color. Strong ≥75 (success),
 * moderate ≥50 (warning), weak below (error). Same thresholds the admin
 * dashboard buckets by, so both surfaces read the score the same way.
 */
function fitArcColor(score: number): string {
  if (score >= 75) return "var(--color-trovio-success)";
  if (score >= 50) return "var(--color-trovio-warning)";
  return "var(--color-trovio-error)";
}

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
export interface CreatorCardProps {
  name: string;
  /** Handle without the leading "@". */
  handle: string;
  /** The match rationale — the star of the card. Clamped with an expand toggle. */
  oneLiner: string;
  /** Lines the one-liner clamps to before a "More" toggle appears. Default 3. */
  oneLinerLines?: number;
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

export function CreatorCard({
  name,
  handle,
  oneLiner,
  oneLinerLines = 3,
  avatarUrl,
  score,
  topPosts,
  topPostsLabel = "Top posts · this theme",
  onOpenPost,
  saved = false,
  onSave,
  onStartCampaign,
  note = "",
  onNoteChange,
  onNoteBlur,
  notePlaceholder = "Add a private note…",
  width = 300,
  className,
}: CreatorCardProps) {
  const showPosts = Boolean(topPosts && topPosts.length > 0);
  const showActions = Boolean(onSave || onStartCampaign);
  const showNote = Boolean(onNoteChange);
  const showScore = typeof score === "number";

  return (
    <article
      aria-label={name}
      className={clsx(
        "relative flex flex-col gap-3 rounded-2xl border bg-trovio-light-surface p-4 shadow-sm transition-all duration-150 dark:bg-trovio-dark-surface",
        "border-trovio-light-border hover:-translate-y-0.5 hover:border-trovio-primary/40 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-trovio-dark-border",
        className,
      )}
      style={{ width }}
    >
      <div className="flex items-center gap-3">
        <Avatar imageUrl={avatarUrl} name={name} size={44} />
        <div className="min-w-0 flex-1">
          <div className="truncate text-caption font-semibold text-trovio-light-text dark:text-trovio-dark-text">
            {name}
          </div>
          {handle ? (
            <div className="text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              @{handle}
            </div>
          ) : null}
        </div>
        {showScore ? (
          <div
            aria-label={`Brand fit: ${score} out of 100`}
            className="shrink-0"
            role="img"
            title={`Brand fit: ${score}/100`}
          >
            <RingGauge color={fitArcColor(score!)} size={40} stroke={4} value={score! / 100}>
              <span className="text-[13px] font-bold text-trovio-light-text dark:text-trovio-dark-text">
                {score}
              </span>
            </RingGauge>
          </div>
        ) : null}
      </div>

      {/* Reserve the full clamp height (oneLinerLines × the caption line box) so
          every card lines its posts strip + actions up at the same offset —
          shorter one-liners simply leave whitespace below. Keeps a rail of cards
          the same height without a hard-coded card min-height. */}
      <div className="text-caption" style={{ minHeight: `calc(${oneLinerLines} * 1.5em)` }}>
        <ClampText
          className="leading-normal text-trovio-light-text dark:text-trovio-dark-text"
          lines={oneLinerLines}
        >
          {oneLiner}
        </ClampText>
      </div>

      {showPosts && (
        <div className="flex flex-col gap-2">
          <SectionLabel>{topPostsLabel}</SectionLabel>
          <TopPostsStrip onOpenPost={onOpenPost} posts={topPosts!} />
        </div>
      )}

      {showActions && (
        <div className="mt-0.5 flex gap-2">
          {onSave && (
            <TrovioButton
              aria-label={saved ? "Unsave creator" : "Save creator"}
              className={clsx(
                "flex-none gap-1.5",
                saved && "border-trovio-primary/40 bg-trovio-primary/10 text-trovio-primary",
              )}
              size="sm"
              variant="secondary"
              onClick={onSave}
            >
              {saved ? <PiBookmarkSimpleFill size={14} /> : <PiBookmarkSimple size={14} />}
              {saved ? "Unsave" : "Save"}
            </TrovioButton>
          )}
          {onStartCampaign && (
            <TrovioButton
              className="flex-1"
              size="sm"
              variant="primary"
              onClick={onStartCampaign}
            >
              Start campaign
            </TrovioButton>
          )}
        </div>
      )}

      {showNote && (
        <div className="flex flex-col gap-1.5">
          <SectionLabel>Your note</SectionLabel>
          <TrovioTextArea
            className="min-h-16 text-caption"
            placeholder={notePlaceholder}
            value={note}
            onBlur={onNoteBlur}
            onChange={(e) => onNoteChange?.(e.target.value)}
          />
        </div>
      )}
    </article>
  );
}
