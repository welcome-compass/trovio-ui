"use client";

import type { ComponentType, ReactNode } from "react";

import { Fragment } from "react";
import clsx from "clsx";

export interface BreadcrumbItem {
  label: ReactNode;
  /** When set, the crumb is a link. The last item is treated as the current page. */
  href?: string;
}

type LinkLike = ComponentType<{
  href: string;
  className?: string;
  children: ReactNode;
}>;

const DefaultLink: LinkLike = ({ href, className, children }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /**
   * Link renderer. Pass your router's link (e.g. Next's `Link`) for client-side
   * navigation; defaults to a plain `<a>` so the primitive stays framework-free.
   */
  linkComponent?: LinkLike;
  className?: string;
}

/**
 * Breadcrumbs — a back/wayfinding trail. The last item is the current page
 * (muted, not a link). Built for the brand workspace ("Brands / Glossier") and
 * meant to be reused across deeper pages.
 */
export function Breadcrumbs({ items, linkComponent, className }: BreadcrumbsProps) {
  const Link = linkComponent ?? DefaultLink;

  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx("flex items-center gap-1.5 text-caption", className)}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;

        return (
          <Fragment key={i}>
            {i > 0 ? (
              <span className="text-trovio-light-text-muted/50 dark:text-trovio-dark-text-muted/50">
                /
              </span>
            ) : null}
            {item.href && !isLast ? (
              <Link
                className="font-medium text-trovio-light-text-muted transition-colors hover:text-trovio-light-text dark:text-trovio-dark-text-muted dark:hover:text-trovio-dark-text"
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current={isLast ? "page" : undefined}
                className={
                  isLast
                    ? "font-medium text-trovio-light-text dark:text-trovio-dark-text"
                    : "text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
                }
              >
                {item.label}
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
