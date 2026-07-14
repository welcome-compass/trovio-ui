"use client";

import { PiPlayFill } from "react-icons/pi";
import clsx from "clsx";

import { formatCompactNumber } from "../utils/format-number";

/**
 * A single top post surfaced on a creator card. `thumbnailUrl` and `href` are
 * populated from the matches payload; when the thumbnail is absent a neutral
 * placeholder tile renders so the strip keeps its shape.
 */
export interface CreatorPost {
  thumbnailUrl?: string | null;
  caption?: string;
  views?: number;
  isVideo?: boolean;
  /** Real post URL — consumers may open this directly or handle `onOpenPost`. */
  href?: string;
}

export interface TopPostsStripProps {
  /** 0–`columns` posts; renders as many as present, nothing at 0. */
  posts: CreatorPost[];
  /** Fired when a thumbnail is activated — open the real post. */
  onOpenPost?: (post: CreatorPost, index: number) => void;
  /** Grid columns. Default 3. */
  columns?: number;
  className?: string;
}

function PostThumbnail({
  post,
  onOpen,
}: {
  post: CreatorPost;
  onOpen?: () => void;
}) {
  const viewsLabel = post.views != null ? `${formatCompactNumber(post.views)} views` : undefined;
  const title = [post.caption, viewsLabel].filter(Boolean).join(" — ") || undefined;

  return (
    <button
      aria-label={post.caption ?? "Open post"}
      className="group relative aspect-square overflow-hidden rounded-lg bg-trovio-light-bg ring-1 ring-black/5 transition-transform duration-100 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-trovio-primary dark:bg-trovio-dark-bg"
      title={title}
      type="button"
      onClick={onOpen}
    >
      {post.thumbnailUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt=""
          className="h-full w-full object-cover"
          src={post.thumbnailUrl}
        />
      ) : null}

      {post.isVideo && (
        <span className="absolute inset-0 grid place-items-center text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]">
          <PiPlayFill size={13} />
        </span>
      )}

      {post.views != null && (
        <span className="absolute bottom-1 left-1.5 text-[10px] font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
          {formatCompactNumber(post.views)}
        </span>
      )}
    </button>
  );
}

/**
 * TopPostsStrip — a compact N-up grid of a creator's top posts on a theme.
 * Turns a one-liner claim into a receipt; each tile taps through to the real
 * post. Presentation-only.
 */
export function TopPostsStrip({
  posts,
  onOpenPost,
  columns = 3,
  className,
}: TopPostsStripProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div
      className={clsx("grid gap-2", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {posts.slice(0, columns).map((post, i) => (
        <PostThumbnail
          key={i}
          post={post}
          onOpen={onOpenPost ? () => onOpenPost(post, i) : undefined}
        />
      ))}
    </div>
  );
}
