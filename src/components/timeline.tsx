"use client";

import clsx from "clsx";

export type TimelineItem = {
  /** Primary line — what happened. */
  title: string;
  /** Muted secondary line, e.g. a relative time. */
  meta?: string;
  /** Accent chip after the title, e.g. "Trovio" on a step Trovio owns. */
  note?: string;
  /** Dot color (hex or `var(--…)`). Defaults to the primary token. */
  color?: string;
};

export type TimelineProps = {
  /** Items, rendered in the order given — the component does not sort. */
  items: TimelineItem[];
  className?: string;
};

/**
 * Timeline — a compact vertical list with a connecting rail and a dot per
 * entry, rendered in the order supplied. Presentation-only; used for the
 * brand-workspace activity card, any "what happened" log, and forward-looking
 * schedules where `note` marks who owns each step.
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
            {it.note ? (
              <span className="ml-1.5 inline-flex rounded-full bg-trovio-primary/10 px-1.5 py-0.5 align-middle text-micro font-medium text-trovio-primary">
                {it.note}
              </span>
            ) : null}
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
