"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import { PiQuotesFill } from "react-icons/pi";

import { SectionLabel } from "./section-label";

export interface QuoteCardProps {
  /** The quotation itself (rendered emphasized). */
  quote: ReactNode;
  /** Who said it, e.g. "Abigail Hannah". */
  attribution?: ReactNode;
  /** Where it's from, e.g. a course or publication name. Shown after the
   *  attribution, separated by a dot. */
  source?: ReactNode;
  /** Categorical label above the quote (e.g. "From the course"). */
  eyebrow?: ReactNode;
  /** Optional call-to-action label (e.g. "Learn more"). Omitted → no CTA. */
  ctaLabel?: ReactNode;
  /** External destination for the CTA. When set the CTA renders as a link. */
  ctaHref?: string;
  /** Presentation-only click hook — wire analytics/tracking in the consumer.
   *  Fires for both the link and button forms of the CTA. */
  onCtaClick?: () => void;
  className?: string;
}

/**
 * QuoteCard — a compact card that surfaces a single expert quote at a relevant
 * moment (e.g. a coaching tip beside the tool it applies to). Optional eyebrow,
 * attribution/source line, and a CTA that links out to learn more.
 *
 * Presentation-only: the consumer owns any click tracking via `onCtaClick`, and
 * the quote/attribution are passed verbatim (this component never transforms
 * them).
 */
export function QuoteCard({
  quote,
  attribution,
  source,
  eyebrow,
  ctaLabel,
  ctaHref,
  onCtaClick,
  className,
}: QuoteCardProps) {
  const hasCta = ctaLabel != null;

  return (
    <div
      className={clsx(
        "rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-4 dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className,
      )}
    >
      <PiQuotesFill
        aria-hidden="true"
        className="mb-2 text-trovio-primary/40"
        size={20}
      />

      <blockquote className="text-sm font-medium leading-relaxed text-trovio-light-text dark:text-trovio-dark-text">
        {quote}
      </blockquote>

      {(attribution != null || source != null) && (
        <SectionLabel className="mt-3">
          {attribution}
          {attribution != null && source != null ? " · " : null}
          {source}
        </SectionLabel>
      )}

      {hasCta ? (
        <div className="mt-3">
          {ctaHref ? (
            <a
              className="inline-flex items-center text-sm font-semibold text-trovio-primary hover:underline"
              href={ctaHref}
              rel="noopener noreferrer"
              target="_blank"
              onClick={onCtaClick}
            >
              {ctaLabel}
            </a>
          ) : (
            <button
              className="inline-flex items-center text-sm font-semibold text-trovio-primary hover:underline"
              type="button"
              onClick={onCtaClick}
            >
              {ctaLabel}
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
