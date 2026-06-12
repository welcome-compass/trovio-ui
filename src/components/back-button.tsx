"use client";

import type { ComponentType, ReactNode } from "react";

import { PiArrowLeftBold } from "react-icons/pi";
import clsx from "clsx";

type LinkLike = ComponentType<{
  href: string;
  className?: string;
  children?: ReactNode;
}>;

export interface BackButtonProps {
  label?: string;
  /** In-place back (e.g. collapse an inline editor). */
  onClick?: () => void;
  /** Or navigate back to a route. Pass your router's link via `linkComponent`. */
  href?: string;
  linkComponent?: LinkLike;
  className?: string;
}

/**
 * BackButton — the one consistent "← Back" affordance. Muted to match the
 * Breadcrumbs trail (wayfinding reads as one quiet family, not a loud button),
 * with a clean (non-duotone) arrow so there's no icon background. Works as an
 * in-place action (`onClick`) or a route link (`href` + `linkComponent`).
 */
export function BackButton({
  label = "Back",
  onClick,
  href,
  linkComponent,
  className,
}: BackButtonProps) {
  const cls = clsx(
    "inline-flex items-center gap-1.5 text-caption font-medium text-trovio-light-text-muted transition-colors hover:text-trovio-light-text dark:text-trovio-dark-text-muted dark:hover:text-trovio-dark-text",
    className,
  );
  const inner = (
    <>
      <PiArrowLeftBold className="h-3 w-3" />
      {label}
    </>
  );

  if (href) {
    const Link = linkComponent ?? (("a" as unknown) as LinkLike);

    return (
      <Link className={cls} href={href}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} type="button" onClick={onClick}>
      {inner}
    </button>
  );
}
