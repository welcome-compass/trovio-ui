"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import { HeadlineBlock } from "./headline-block";
import type { HeadlineBlockSize, HeadlineBlockWeight } from "./headline-block";

export interface TitledPanelProps {
  /**
   * Panel title, rendered via HeadlineBlock. Optional so the same component
   * works inside a section that already has a shared heading.
   */
  title?: ReactNode;
  /** Title type-scale size. Defaults to "hero" — larger than typical body content. */
  titleSize?: HeadlineBlockSize;
  /** Title font-weight override (defaults to the size token's built-in weight). */
  titleWeight?: HeadlineBlockWeight;
  /** Panel body — anything below the title. */
  children: ReactNode;
  className?: string;
}

/**
 * TitledPanel — a generic titled region: a large title over a content slot.
 * Built to be laid out side by side (e.g. a 2-up grid on desktop) and reused
 * across surfaces. Presentation-only; borderless by default so it fits the
 * flat editorial direction — add card styling via `className` if needed.
 */
export function TitledPanel({
  title,
  titleSize = "hero",
  titleWeight,
  children,
  className,
}: TitledPanelProps) {
  return (
    <section className={clsx("flex flex-col gap-4", className)}>
      {title != null ? (
        <HeadlineBlock size={titleSize} weight={titleWeight}>
          {title}
        </HeadlineBlock>
      ) : null}
      <div>{children}</div>
    </section>
  );
}
