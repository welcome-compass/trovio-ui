"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import { TrovioButton } from "./trovio-button";

/**
 * Type-scale sizes the headline can render at. Mirrors the `text-*` utilities
 * defined in tokens.css — each applies size + line-height + tracking + weight
 * together.
 */
export type HeadlineBlockSize =
  | "display"
  | "hero"
  | "section"
  | "body-lg"
  | "body";

const SIZE_CLASS: Record<HeadlineBlockSize, string> = {
  display: "text-display",
  hero: "text-hero",
  section: "text-section",
  "body-lg": "text-body-lg",
  body: "text-body",
};

/**
 * Optional font-weight override. Each `size` token ships a built-in weight
 * (e.g. section is 500, hero is 400); set `weight` to decouple the two — handy
 * for a large-but-light editorial headline.
 */
export type HeadlineBlockWeight =
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold";

const WEIGHT_CLASS: Record<HeadlineBlockWeight, string> = {
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

export interface HeadlineBlockProps {
  /**
   * The headline content — plain text, or a pre-rendered node (e.g. the
   * consumer's markdown renderer). HeadlineBlock is markdown-agnostic.
   */
  children: ReactNode;
  /** Type-scale size for the headline. Defaults to "section". */
  size?: HeadlineBlockSize;
  /**
   * Font-weight override. Defaults to the size token's built-in weight when
   * unset — pass this to make a headline lighter or heavier than its size.
   */
  weight?: HeadlineBlockWeight;
  /**
   * Optional call to action rendered as a primary button. Presentation-only:
   * the consumer owns the click behavior (client-side nav, opening a
   * messenger, analytics, etc.) — wire it up in `onClick`.
   */
  cta?: {
    label: ReactNode;
    onClick: () => void;
    /** Optional leading icon node rendered before the label. */
    icon?: ReactNode;
  };
  className?: string;
}

/**
 * HeadlineBlock — a prominent single message: large text plus an optional CTA.
 * Built for lead surfaces (e.g. the dashboard "today" block) where one line
 * carries the moment. Size is configurable so the same block works as a hero
 * statement or a quieter section lead.
 */
export function HeadlineBlock({
  children,
  size = "section",
  weight,
  cta,
  className,
}: HeadlineBlockProps) {
  return (
    <div className={className}>
      <h2
        className={clsx(
          SIZE_CLASS[size],
          weight ? WEIGHT_CLASS[weight] : null,
          "text-trovio-light-text dark:text-trovio-dark-text",
        )}
      >
        {children}
      </h2>
      {cta ? (
        <div className="mt-4">
          <TrovioButton size="md" variant="primary" onPress={cta.onClick}>
            <span className="inline-flex items-center gap-2">
              {cta.icon}
              {cta.label}
            </span>
          </TrovioButton>
        </div>
      ) : null}
    </div>
  );
}
