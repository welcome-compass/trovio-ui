"use client";

import type { ReactNode } from "react";

import { PlatformIcon } from "./platform-icon";
import { formatCompactNumber } from "../utils/format-number";

/**
 * StatStrip — grounded vitals as a single borderless, muted inline line
 * (e.g. "24.3K followers · 312 posts · IG TikTok"). No container, no boxes
 * (refresh direction: "not everything has to have a container"). Only data we
 * already have at acquainted; never engagement % or score. Each part hides if
 * its value is missing.
 */
export interface StatStripProps {
  followers?: number | null;
  posts?: number | null;
  platforms?: string[];
  className?: string;
}

export function StatStrip({
  followers,
  posts,
  platforms,
  className,
}: StatStripProps) {
  const parts: ReactNode[] = [];

  if (followers != null) {
    parts.push(
      <span key="followers">
        <span className="font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          {formatCompactNumber(followers)}
        </span>{" "}
        followers
      </span>,
    );
  }

  if (posts != null) {
    parts.push(
      <span key="posts">
        <span className="font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          {formatCompactNumber(posts)}
        </span>{" "}
        posts
      </span>,
    );
  }

  if (platforms && platforms.length > 0) {
    parts.push(
      <span key="platforms" className="inline-flex items-center gap-1.5">
        {platforms.map((p) => (
          <PlatformIcon key={p} platform={p} size={15} />
        ))}
      </span>,
    );
  }

  if (parts.length === 0) return null;

  return (
    <p
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted ${className ?? ""}`}
    >
      {parts.map((part, idx) => (
        <span key={idx} className="inline-flex items-center gap-2">
          {idx > 0 && <span aria-hidden>·</span>}
          {part}
        </span>
      ))}
    </p>
  );
}
