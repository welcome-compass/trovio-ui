"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import { PiSparkleFill } from "react-icons/pi";

import { SectionLabel } from "./section-label";
import { TrovioButton } from "./trovio-button";

export interface CoursePromoBannerProps {
  /** Small accent label above the headline (e.g. "Trovio-exclusive"). */
  eyebrow?: ReactNode;
  headline: ReactNode;
  /** Optional supporting line under the headline. */
  subhead?: ReactNode;
  /** Portrait/lifestyle image; shown full-bleed alongside the copy (not cropped
   *  to a thin banner — a tall column on desktop, a 4:5 crop on mobile). */
  imageUrl?: string;
  /** Short proof points, rendered as a row of chips. */
  highlights?: ReactNode[];
  priceLabel?: ReactNode;
  originalPriceLabel?: ReactNode;
  discountLabel?: ReactNode;
  ctaLabel: ReactNode;
  /** External destination for the CTA. When set the CTA renders as a link. */
  ctaHref?: string;
  /** Presentation-only click hook — wire analytics/tracking in the consumer. */
  onCtaClick?: () => void;
  className?: string;
}

/**
 * CoursePromoBanner — a bold, image-forward promo hero for a partner course.
 * Distinct from the calmer CourseCallout: a tinted gradient panel with the
 * creator's photo shown large (portrait column on desktop, 4:5 on mobile),
 * a punchy headline, proof chips, a discounted-price row, and a prominent
 * full-width CTA spanning the base of the card. Meant to grab attention
 * pre-paywall.
 *
 * Presentation-only: all copy/pricing/image pass through verbatim; the consumer
 * owns CTA behavior + analytics via `ctaHref` / `onCtaClick`.
 */
export function CoursePromoBanner({
  eyebrow,
  headline,
  subhead,
  imageUrl,
  highlights,
  priceLabel,
  originalPriceLabel,
  discountLabel,
  ctaLabel,
  ctaHref,
  onCtaClick,
  className,
}: CoursePromoBannerProps) {
  const hasPrice =
    priceLabel != null || originalPriceLabel != null || discountLabel != null;

  return (
    <div
      className={clsx(
        "flex flex-col overflow-hidden rounded-3xl border border-trovio-light-border bg-gradient-to-br from-trovio-primary/10 via-trovio-primary/[0.04] to-transparent dark:border-trovio-dark-border dark:from-trovio-primary/20 dark:via-trovio-primary/[0.06]",
        className,
      )}
    >
      {/* Image + copy row (image left on desktop, on top on mobile). */}
      <div className="flex flex-col lg:flex-row">
        {imageUrl ? (
          <div className="relative aspect-[5/4] w-full shrink-0 sm:aspect-[16/9] lg:aspect-auto lg:w-[42%]">
            {/* object-top keeps faces in frame across the responsive crops. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
              src={imageUrl}
            />
          </div>
        ) : null}

        <div className="flex flex-1 flex-col justify-center gap-4 px-6 pt-6 lg:px-8 lg:pt-8">
          {eyebrow != null ? (
            <span className="flex items-center gap-1.5">
              <PiSparkleFill aria-hidden="true" className="text-trovio-primary" size={15} />
              <SectionLabel tone="primary">{eyebrow}</SectionLabel>
            </span>
          ) : null}

          <div>
            <h3 className="text-2xl font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text lg:text-3xl">
              {headline}
            </h3>
            {subhead != null ? (
              <p className="mt-2 text-sm leading-relaxed text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
                {subhead}
              </p>
            ) : null}
          </div>

          {highlights && highlights.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {highlights.map((h, i) => (
                <li
                  key={i}
                  className="rounded-full bg-trovio-primary/10 px-3 py-1 text-xs font-semibold text-trovio-primary"
                >
                  {h}
                </li>
              ))}
            </ul>
          ) : null}

          {hasPrice ? (
            <div className="flex items-center gap-2">
              {priceLabel != null ? (
                <span className="text-2xl font-bold text-trovio-light-text dark:text-trovio-dark-text">
                  {priceLabel}
                </span>
              ) : null}
              {originalPriceLabel != null ? (
                <span className="text-sm text-trovio-light-text-muted line-through dark:text-trovio-dark-text-muted">
                  {originalPriceLabel}
                </span>
              ) : null}
              {discountLabel != null ? (
                <span className="rounded-md bg-trovio-primary px-2 py-0.5 text-xs font-semibold text-white">
                  {discountLabel}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {/* Full-width CTA spanning the base of the whole card. */}
      <div className="px-6 pb-6 pt-5 lg:px-8 lg:pb-8">
        <TrovioButton
          fullWidth
          href={ctaHref}
          rel={ctaHref ? "noopener noreferrer" : undefined}
          size="lg"
          target={ctaHref ? "_blank" : undefined}
          onClick={onCtaClick}
        >
          {ctaLabel}
        </TrovioButton>
      </div>
    </div>
  );
}
