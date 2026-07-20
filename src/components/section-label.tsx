"use client";

import type { ReactNode } from "react";

import clsx from "clsx";

/**
 * SectionLabel — the one uppercase eyebrow used across dashboard states.
 *
 * Consolidates the ad-hoc `text-micro uppercase` labels that were scattered
 * inline (my-agent-landing, create/brands/insights views, trovio-card
 * `bodyEyebrow`, agent-upsell-sheet). Use this for every "TODAY'S DRAFT" /
 * "YOUR WORKSPACES" style header so the stranger / acquainted / friendly
 * dashboards stay visually consistent.
 *
 * Tone: `muted` (default) is the standard page eyebrow. `primary` is reserved
 * for emphasis inside previews/teasers (e.g. the locked-feature mini-pages).
 *
 * Size: `micro` (default) is the standard small eyebrow. `label` is the
 * body-sized, bolder variant (the `--text-label` token) for a heading-weight
 * label like the Explore card's "Why they fit" (usually with `tone="primary"`).
 */
export function SectionLabel({
  children,
  tone = "muted",
  size = "micro",
  className,
}: {
  children: ReactNode;
  tone?: "muted" | "primary";
  size?: "micro" | "label";
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "uppercase",
        size === "label" ? "text-label" : "text-micro",
        tone === "primary"
          ? "text-trovio-primary"
          : "text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
