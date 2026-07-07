"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import { PiLockSimpleDuotone } from "react-icons/pi";

import { SectionLabel } from "./section-label";
import { TrovioButton } from "./trovio-button";

export interface CourseCalloutProps {
  /** Categorical label above the title (e.g. "Partner course"). */
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Full-color hero image, shown when no `media` slot is supplied. */
  imageUrl?: string;
  /** Rich media rendered edge-to-edge at the top (e.g. an inline video player
   *  supplied by the consumer). Takes precedence over `imageUrl`. */
  media?: ReactNode;
  /** Discounted price, e.g. "$399". */
  priceLabel?: ReactNode;
  /** Original price, struck through, e.g. "$549". */
  originalPriceLabel?: ReactNode;
  /** Discount badge, e.g. "20% off". */
  discountLabel?: ReactNode;
  /** Call-to-action label (e.g. "Enroll with your Trovio discount"). */
  ctaLabel: ReactNode;
  /** External destination for the CTA. When set the CTA renders as a link
   *  (used post-paywall to deep-link the sales page). */
  ctaHref?: string;
  /** Presentation-only click hook — wire analytics/tracking in the consumer.
   *  Pre-paywall consumers also open the paywall from here. */
  onCtaClick?: () => void;
  /** Pre-paywall treatment: shows a lock affordance and frames the price as an
   *  after-activation incentive. The consumer still owns the CTA behavior. */
  locked?: boolean;
  className?: string;
}

/**
 * CourseCallout — a featured partner-course card: hero media (or image), an
 * eyebrow, headline, description, a discounted-price row, and a CTA. Used both
 * post-paywall (unlocked, CTA links out to enroll) and pre-paywall (`locked`,
 * CTA opens the activation paywall).
 *
 * Presentation-only: all copy/pricing/media are passed in verbatim and the
 * consumer owns the CTA behavior + analytics via `ctaHref` / `onCtaClick`.
 */
export function CourseCallout({
  eyebrow,
  title,
  description,
  imageUrl,
  media,
  priceLabel,
  originalPriceLabel,
  discountLabel,
  ctaLabel,
  ctaHref,
  onCtaClick,
  locked = false,
  className,
}: CourseCalloutProps) {
  const hasPrice =
    priceLabel != null || originalPriceLabel != null || discountLabel != null;

  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl border border-trovio-light-border bg-trovio-light-surface dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className,
      )}
    >
      {media ? (
        <div className="w-full">{media}</div>
      ) : imageUrl ? (
        // Plain <img> keeps the library framework-agnostic (no next/image dep).
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt=""
          className="h-44 w-full object-cover"
          src={imageUrl}
        />
      ) : null}

      <div className="p-4">
        <div className="flex items-center gap-2">
          {eyebrow != null ? <SectionLabel tone="primary">{eyebrow}</SectionLabel> : null}
          {locked ? (
            <PiLockSimpleDuotone
              aria-hidden="true"
              className="ml-auto shrink-0 text-trovio-light-text-muted/60 dark:text-trovio-dark-text-muted/60"
              size={18}
            />
          ) : null}
        </div>

        <h3 className="mt-1 text-lg font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text">
          {title}
        </h3>

        {description != null ? (
          <p className="mt-1.5 text-sm leading-relaxed text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
            {description}
          </p>
        ) : null}

        {hasPrice ? (
          <div className="mt-3 flex items-center gap-2">
            {priceLabel != null ? (
              <span className="text-xl font-bold text-trovio-light-text dark:text-trovio-dark-text">
                {priceLabel}
              </span>
            ) : null}
            {originalPriceLabel != null ? (
              <span className="text-sm text-trovio-light-text-muted line-through dark:text-trovio-dark-text-muted">
                {originalPriceLabel}
              </span>
            ) : null}
            {discountLabel != null ? (
              <span className="rounded-md bg-trovio-primary/10 px-2 py-0.5 text-xs font-semibold text-trovio-primary">
                {discountLabel}
              </span>
            ) : null}
          </div>
        ) : null}

        <TrovioButton
          className="mt-4"
          fullWidth
          href={ctaHref}
          rel={ctaHref ? "noopener noreferrer" : undefined}
          target={ctaHref ? "_blank" : undefined}
          onClick={onCtaClick}
        >
          {ctaLabel}
        </TrovioButton>
      </div>
    </div>
  );
}
