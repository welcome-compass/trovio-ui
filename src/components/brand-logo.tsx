"use client";

import React from "react";

export interface BrandLogoProps {
  /** Image source shown in light mode. */
  lightSrc: string;
  /** Image source shown in dark mode. */
  darkSrc: string;
  /** Accessible alt text (applied to whichever variant is visible). */
  alt?: string;
  /**
   * Class applied to BOTH `<img>` elements — use it to size the logo. Prefer a
   * single dimension so the aspect ratio is preserved, e.g. `h-8 w-auto`.
   */
  className?: string;
}

/**
 * BrandLogo — renders a brand logo image with automatic light/dark switching.
 *
 * Both sources render and are toggled with Tailwind `dark:` utilities (CSS, not
 * JS theme state), so it is SSR-safe, has no theme-provider coupling, and never
 * flashes the wrong variant on hydration. Only the visible `<img>` is announced
 * by screen readers (the hidden one is `display:none`).
 *
 * Presentation-only: the consumer hosts the asset bytes and passes their URLs
 * (mirrors how Avatar/PortraitHero take an image src). trovio-ui ships no raster
 * assets, so the brand PNGs live in each app's `public/`.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  lightSrc,
  darkSrc,
  alt = "",
  className = "",
}) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={alt} className={`block dark:hidden ${className}`} src={lightSrc} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={alt} className={`hidden dark:block ${className}`} src={darkSrc} />
    </>
  );
};

export default BrandLogo;
