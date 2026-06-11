"use client";

import clsx from "clsx";

export type TimelineItem = {
  /** Primary line — what happened. */
  title: string;
  /** Muted secondary line, e.g. a relative time. */
  meta?: string;
  /** Dot color (hex or `var(--…)`). Defaults to the primary token. */
  color?: string;
};

export type TimelineProps = {
  /** Items, newest-first by the caller's convention. */
  items: TimelineItem[];
  className?: string;
};

/**
 * Timeline — a compact vertical activity list with a connecting rail and a dot
 * per entry. Presentation-only; used for the brand-workspace activity card and
 * any future "what happened" log.
 */
export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol
      className={clsx(
        "relative ml-1 border-l border-trovio-light-border pl-4 dark:border-trovio-dark-border",
        className,
      )}
    >
      {items.map((it, i) => (
        <li key={i} className="relative pb-3.5 last:pb-0">
          <span
            className="absolute -left-5 top-1 h-2 w-2 rounded-full"
            style={{ background: it.color ?? "var(--color-trovio-primary)" }}
          />
          <div className="text-caption font-medium text-trovio-light-text dark:text-trovio-dark-text">
            {it.title}
          </div>
          {it.meta ? (
            <div className="text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              {it.meta}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
