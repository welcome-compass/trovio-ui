"use client";

import type { ComponentType, ReactNode } from "react";

import { useState } from "react";
import { PiXBold } from "react-icons/pi";
import clsx from "clsx";

type LinkLike = ComponentType<{
  href: string;
  className?: string;
  "aria-label"?: string;
  children?: ReactNode;
}>;

const DefaultLink: LinkLike = ({ href, className, children, ...rest }) => (
  <a className={className} href={href} {...rest}>
    {children}
  </a>
);

export interface BrandCardProps {
  brandName: string;
  description?: string;
  /** Logo URL; falls back to brand initials. */
  logoUrl?: string;
  /** Lines to clamp the description to. Default 2. */
  descriptionLines?: number;
  /**
   * Make the whole card navigate via the overlay-anchor pattern. Pass your
   * router's link (e.g. Next's `Link`) as `linkComponent` for client-side nav.
   */
  href?: string;
  linkComponent?: LinkLike;
  /** When set, a small "x" shows top-right (dismiss). Lifted above the overlay. */
  onDismiss?: () => void;
  dismissLabel?: string;
  className?: string;
}

/**
 * BrandCard — the shared brand tile for the pipeline kanban (and anywhere a
 * compact brand needs to read + link). Intentionally minimal: logo, name, a
 * clamped description, and an optional dismiss "x". The whole card links to the
 * brand workspace; the "x" sits above the overlay so it stays clickable.
 */
export function BrandCard({
  brandName,
  description,
  logoUrl,
  descriptionLines = 2,
  href,
  linkComponent,
  onDismiss,
  dismissLabel,
  className,
}: BrandCardProps) {
  const Link = linkComponent ?? DefaultLink;
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = !!logoUrl && !logoFailed;

  return (
    <div
      className={clsx(
        "relative flex flex-col gap-2 rounded-lg border border-trovio-light-border bg-trovio-light-surface p-3 transition-colors hover:border-trovio-primary/40 dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className,
      )}
    >
      {href ? (
        <Link
          aria-label={`Open ${brandName}`}
          className="absolute inset-0 z-0 rounded-lg"
          href={href}
        />
      ) : null}

      <div className="flex items-start gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-trovio-light-bg text-micro font-bold text-trovio-light-text-muted dark:bg-trovio-dark-bg dark:text-trovio-dark-text-muted">
          {showLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt=""
              className="h-full w-full object-cover"
              src={logoUrl}
              onError={() => setLogoFailed(true)}
            />
          ) : (
            brandName.slice(0, 2)
          )}
        </div>
        <span className="min-w-0 flex-1 truncate pt-1 text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          {brandName}
        </span>
        {onDismiss ? (
          <button
            aria-label={dismissLabel ?? `Dismiss ${brandName}`}
            className="relative z-[1] -mr-1 -mt-0.5 rounded-md p-1 text-trovio-light-text-muted transition-colors hover:bg-trovio-light-bg hover:text-trovio-light-text dark:text-trovio-dark-text-muted dark:hover:bg-trovio-dark-bg dark:hover:text-trovio-dark-text"
            type="button"
            onClick={onDismiss}
          >
            <PiXBold className="h-3 w-3" />
          </button>
        ) : null}
      </div>

      {description ? (
        <p
          className="text-caption leading-snug text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: descriptionLines,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
