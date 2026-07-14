"use client";

import clsx from "clsx";

import { TrovioSkeleton } from "./trovio-skeleton";

/**
 * CreatorCardSkeleton — the loading placeholder for CreatorCard, shaped to match
 * so the async "finding your creators…" populate doesn't shift layout. Composes
 * TrovioSkeleton (brand shimmer, reduced-motion aware). Toggle `showPosts` /
 * `showActions` to mirror whichever card variant is loading.
 */
export interface CreatorCardSkeletonProps {
  /** Match the card's width. Default 300. */
  width?: number | string;
  showPosts?: boolean;
  showActions?: boolean;
  className?: string;
}

export function CreatorCardSkeleton({
  width = 300,
  showPosts = true,
  showActions = true,
  className,
}: CreatorCardSkeletonProps) {
  return (
    <div
      aria-hidden
      className={clsx(
        "flex flex-col gap-3 rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-4 shadow-sm dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className,
      )}
      style={{ width }}
    >
      <div className="flex items-center gap-3">
        <TrovioSkeleton className="h-11 w-11 rounded-full" />
        <div className="flex-1 space-y-2">
          <TrovioSkeleton className="h-3 w-1/2 rounded" />
          <TrovioSkeleton className="h-2.5 w-1/3 rounded" />
        </div>
      </div>

      <div className="space-y-2">
        <TrovioSkeleton className="h-2.5 w-full rounded" />
        <TrovioSkeleton className="h-2.5 w-[88%] rounded" />
        <TrovioSkeleton className="h-2.5 w-3/5 rounded" />
      </div>

      {showPosts && (
        <div className="grid grid-cols-3 gap-2">
          <TrovioSkeleton className="aspect-square rounded-lg" />
          <TrovioSkeleton className="aspect-square rounded-lg" />
          <TrovioSkeleton className="aspect-square rounded-lg" />
        </div>
      )}

      {showActions && (
        <div className="mt-0.5 flex gap-2">
          <TrovioSkeleton className="h-9 w-20 rounded-2xl" />
          <TrovioSkeleton className="h-9 flex-1 rounded-2xl" />
        </div>
      )}
    </div>
  );
}
