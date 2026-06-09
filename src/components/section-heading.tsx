"use client";

import type { ReactNode } from "react";

import clsx from "clsx";

/**
 * SectionHeading — the open, editorial section heading for the refreshed
 * dashboard typography system (Barlow). Large, sentence-case, lighter weight,
 * with an optional hairline rule beneath — NOT a tiny uppercase eyebrow.
 *
 * Type scale (see DESIGN.md §1 Typography):
 *   hero  → ~text-4xl, font-normal   ("Here's what your agent learned")
 *   h2    → ~text-2xl, font-medium   ("Your content pillars", section titles)
 */
export function SectionHeading({
  children,
  divider = false,
  hero = false,
  className,
}: {
  children: ReactNode;
  /** Render the hairline rule beneath the heading (section dividers). */
  divider?: boolean;
  /** Hero size for the lead heading on the screen. */
  hero?: boolean;
  className?: string;
}) {
  const Tag = hero ? "h1" : "h2";

  return (
    <Tag
      className={clsx(
        "tracking-tight text-trovio-light-text dark:text-trovio-dark-text",
        hero
          ? "text-3xl font-normal md:text-4xl"
          : "text-2xl font-medium md:text-[26px]",
        divider &&
          "border-b border-trovio-light-border pb-3 dark:border-trovio-dark-border",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
