"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import { SectionLabel } from "./section-label";

export interface LinkCardProps {
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
export function LinkCard({
  eyebrow,
  title,
  imageUrl,
  href,
  newTab = true,
  onClick,
  className,
}: LinkCardProps) {
  return (
    <a
      className={clsx(
        "block overflow-hidden rounded-2xl border border-trovio-light-border dark:border-trovio-dark-border",
        className,
      )}
      href={href}
      rel={newTab ? "noopener noreferrer" : undefined}
      target={newTab ? "_blank" : undefined}
      onClick={onClick}
    >
      {imageUrl ? (
        <div
          className="h-44 w-full bg-trovio-light-bg bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : null}
      <div className="px-4 py-3">
        {eyebrow != null ? <SectionLabel>{eyebrow}</SectionLabel> : null}
        <div className="mt-0.5 font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          {title}
        </div>
      </div>
    </a>
  );
}
