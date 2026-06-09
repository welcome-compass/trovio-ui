"use client";

import type { ElementType, ReactNode } from "react";

import clsx from "clsx";

/**
 * Text — semantic typography primitive. Variants map 1:1 to the type scale in
 * `tokens/design-tokens.ts` (the non-heading entries). Use `SectionHeading` for
 * hero/section headings and `SectionLabel` for the micro-label eyebrow; use
 * `Text` for everything else so sizes stay consistent and named (not ad-hoc
 * `text-*` classes).
 */
export type TextVariant = "display" | "body-lg" | "body" | "caption";

const VARIANT_CLASS: Record<TextVariant, string> = {
  // Display — portrait / creator name (leading-none so it can overlap a hero)
  display: "text-5xl md:text-6xl font-light leading-none tracking-tight",
  // Body large — emphasized body copy
  "body-lg": "text-base md:text-lg leading-relaxed",
  // Body — findings, descriptions, list items
  body: "text-base leading-relaxed",
  // Caption / meta — stat lines, tool descriptions
  caption: "text-sm",
};

export interface TextProps {
  variant?: TextVariant;
  /** Element to render (default `p`). */
  as?: ElementType;
  /** Use the muted text color instead of the default. */
  muted?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Text({
  variant = "body",
  as,
  muted = false,
  className,
  children,
}: TextProps) {
  const Tag = as ?? "p";

  return (
    <Tag
      className={clsx(
        VARIANT_CLASS[variant],
        muted
          ? "text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
          : "text-trovio-light-text dark:text-trovio-dark-text",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
