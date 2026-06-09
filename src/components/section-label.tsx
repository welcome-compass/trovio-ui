"use client";

import type { ReactNode } from "react";

import clsx from "clsx";

/**
 * SectionLabel — the one uppercase eyebrow used across dashboard states.
 *
 * Consolidates the ad-hoc `text-xs uppercase tracking` labels that were
 * scattered inline (e.g. trovio-card `bodyEyebrow`, agent-upsell-sheet). Use
 * this for every "WHERE YOU STAND" / "YOUR CONTENT PILLARS" style header so the
 * stranger / acquainted / friendly dashboards stay visually consistent.
 */
export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "text-micro uppercase text-trovio-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}
