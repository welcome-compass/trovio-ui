"use client";

import React from "react";

export interface OnboardingBrandHeaderProps {
  /** Brand logo, rendered centered (e.g. an <Image>/<svg> logo element). */
  logo: React.ReactNode;
  /** Optional left-aligned slot (e.g. a back button). */
  left?: React.ReactNode;
  /** Optional right-aligned slot (e.g. a sign-out button). */
  right?: React.ReactNode;
  className?: string;
}

/**
 * OnboardingBrandHeader — a minimal top bar with the brand logo centered and
 * optional left/right action slots. Used by full-page onboarding-style screens
 * (e.g. the stranger transition takeover) that want the centered-logo chrome
 * without the dashboard nav.
 *
 * Presentation-only: the caller passes the logo and any actions as slots, so
 * this primitive stays free of app dependencies (routing, auth, analytics).
 */
export const OnboardingBrandHeader: React.FC<OnboardingBrandHeaderProps> = ({
  logo,
  left,
  right,
  className = "",
}) => {
  return (
    <header
      className={`w-full border-b border-trovio-light-border dark:border-trovio-dark-border ${className}`}
    >
      <div className="relative flex h-16 items-center justify-center px-4">
        {left ? <div className="absolute left-4">{left}</div> : null}
        {logo}
        {right ? <div className="absolute right-4">{right}</div> : null}
      </div>
    </header>
  );
};

export default OnboardingBrandHeader;
