"use client";

import React from "react";
import clsx from "clsx";

export interface GoalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ranking number shown in the badge (1-based). */
  rank: number;
  /** Icon element rendered inside the gradient circle. */
  icon: React.ReactNode;
  /** Goal title. */
  title: string;
  /** Goal description. */
  description: string;
  /** CSS background for the icon circle (e.g. a `linear-gradient(...)`). */
  iconGradient: string;
  /** Visually emphasize the card while it is being dragged. */
  isDragging?: boolean;
}

/**
 * GoalCard — presentation-only goal card: a ranking badge, a drag-affordance dot
 * grid, a gradient icon circle, and a title/description.
 *
 * Intentionally free of drag-and-drop logic so it stays a pure primitive.
 * Callers that want reordering wrap it (e.g. with @dnd-kit's `useSortable`) and
 * forward the resulting ref, listeners, `style`, and `isDragging` through the
 * spread props — the root element accepts everything `<div>` does.
 */
export const GoalCard = React.forwardRef<HTMLDivElement, GoalCardProps>(
  function GoalCard(
    { rank, icon, title, description, iconGradient, isDragging = false, className, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={clsx(
          "relative select-none rounded-2xl bg-white shadow-sm dark:bg-trovio-dark-surface",
          "border border-trovio-light-border dark:border-trovio-dark-border",
          "transition-shadow duration-200",
          isDragging && "shadow-lg ring-2 ring-trovio-primary ring-opacity-50",
          className,
        )}
        {...rest}
      >
        {/* Ranking badge */}
        <div className="absolute -left-2 -top-2 z-10 flex size-8 items-center justify-center rounded-full border-2 border-white bg-trovio-primary shadow-md dark:border-trovio-dark-bg">
          <span className="select-none text-sm font-black text-white">{rank}</span>
        </div>

        {/* Card content */}
        <div className="flex items-center gap-3 p-4">
          {/* Drag affordance (purely visual) */}
          <div className="-my-4 -ml-4 flex flex-col gap-1 px-3 py-4 opacity-70">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="size-1.5 rounded-full bg-trovio-light-border dark:bg-trovio-dark-border"
              />
            ))}
          </div>

          {/* Icon */}
          <div
            className="flex size-12 select-none items-center justify-center rounded-2xl shadow-sm"
            style={{ background: iconGradient }}
          >
            <div className="pointer-events-none text-2xl text-white">{icon}</div>
          </div>

          {/* Text content */}
          <div className="min-w-0 flex-1 select-none">
            <h3 className="text-base font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text">
              {title}
            </h3>
            <p className="mt-0.5 text-xs leading-snug text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  },
);

export default GoalCard;
