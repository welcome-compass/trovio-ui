"use client";

import { PiBookmarkSimple, PiBookmarkSimpleFill, PiCheckBold } from "react-icons/pi";
import clsx from "clsx";

import { Avatar } from "./avatar";
import { ClampText } from "./clamp-text";
import { SectionLabel } from "./section-label";
import { TrovioButton } from "./trovio-button";
import { TopPostsStrip, type CreatorPost } from "./top-posts-strip";

export type { CreatorPost };

/**
 * CreatorCard — one creator inside a conversation on the brand Explore surface:
 * avatar + name/@handle, the genuine match one-liner (the hero copy), a strip of
 * top posts on this theme, and Save / Use-in-Campaign actions.
 *
 * Presentation-only: it holds no selection state. The consumer owns
 * `saved`/`selected` and reacts to `onSave`/`onUseInCampaign`; the avatar
 * resolves a real photo when `avatarUrl` is present and falls back to initials.
 * Post/deal enrichment is additive — the top-posts strip only renders when
 * `topPosts` is supplied, so the card is valid at every data completeness level.
 */
export interface CreatorCardProps {
  name: string;
  /** Handle without the leading "@". */
  handle: string;
  /** The match rationale — the star of the card. Clamped with an expand toggle. */
  oneLiner: string;
  /** Real profile photo; falls back to initials when absent. */
  avatarUrl?: string | null;

  /** Top posts on this theme (0–3). Strip + eyebrow hide when empty. */
  topPosts?: CreatorPost[];
  onOpenPost?: (post: CreatorPost, index: number) => void;

  /** Personal-bookmark state + toggle. Save button shows only when `onSave` is set. */
  saved?: boolean;
  onSave?: () => void;
  /** In-campaign-list state + toggle. Adds the selected ring + check badge. */
  selected?: boolean;
  onUseInCampaign?: () => void;

  /** Fixed rail-column width (default 300) or e.g. "100%" in a grid. */
  width?: number | string;
  className?: string;
}

export function CreatorCard({
  name,
  handle,
  oneLiner,
  avatarUrl,
  topPosts,
  onOpenPost,
  saved = false,
  onSave,
  selected = false,
  onUseInCampaign,
  width = 300,
  className,
}: CreatorCardProps) {
  const showPosts = Boolean(topPosts && topPosts.length > 0);
  const showActions = Boolean(onSave || onUseInCampaign);

  return (
    <article
      aria-label={name}
      className={clsx(
        "relative flex flex-col gap-3 rounded-2xl border bg-trovio-light-surface p-4 shadow-sm transition-all duration-150 dark:bg-trovio-dark-surface",
        selected
          ? "border-trovio-primary ring-1 ring-trovio-primary"
          : "border-trovio-light-border hover:-translate-y-0.5 hover:border-trovio-primary/40 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-trovio-dark-border",
        className,
      )}
      style={{ width }}
    >
      {selected && (
        <span
          aria-hidden
          className="absolute right-3 top-3 grid h-[22px] w-[22px] place-items-center rounded-full bg-trovio-primary text-white shadow-sm"
        >
          <PiCheckBold size={12} />
        </span>
      )}

      <div className="flex items-center gap-3">
        <Avatar imageUrl={avatarUrl} name={name} size={44} />
        <div className="min-w-0">
          <div className="truncate text-caption font-semibold text-trovio-light-text dark:text-trovio-dark-text">
            {name}
          </div>
          <div className="text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
            @{handle}
          </div>
        </div>
      </div>

      <ClampText
        className="text-caption leading-normal text-trovio-light-text dark:text-trovio-dark-text"
        lines={3}
      >
        {oneLiner}
      </ClampText>

      {showPosts && (
        <div className="flex flex-col gap-2">
          <SectionLabel>Top posts · this theme</SectionLabel>
          <TopPostsStrip onOpenPost={onOpenPost} posts={topPosts!} />
        </div>
      )}

      {showActions && (
        <div className="mt-0.5 flex gap-2">
          {onSave && (
            <TrovioButton
              aria-label={saved ? "Saved" : "Save creator"}
              className={clsx(
                "flex-none gap-1.5",
                saved && "border-trovio-primary/40 bg-trovio-primary/10 text-trovio-primary",
              )}
              size="sm"
              variant="secondary"
              onClick={onSave}
            >
              {saved ? <PiBookmarkSimpleFill size={14} /> : <PiBookmarkSimple size={14} />}
              {saved ? "Saved" : "Save"}
            </TrovioButton>
          )}
          {onUseInCampaign && (
            <TrovioButton
              className="flex-1"
              size="sm"
              variant="primary"
              onClick={onUseInCampaign}
            >
              {selected ? "In list ✓" : "Use in Campaign"}
            </TrovioButton>
          )}
        </div>
      )}
    </article>
  );
}
