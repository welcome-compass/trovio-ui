"use client";

import type { ReactNode } from "react";

import { useState } from "react";

import { PlatformIcon } from "./platform-icon";

/**
 * PortraitHero (Component) — editorial creator portrait shown as a tall image
 * that FADES into the page at the bottom; the name sits below in light-weight
 * display type with the creator's social handles. Composes the PlatformIcon
 * primitive. Presentation-only: pass `action` (e.g. a share button) and the
 * image URL; behavior/optimization is the consumer's.
 *
 * Resilience: missing/404 portrait → gradient with initials.
 */
function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 1).toUpperCase();

  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
}

export interface PortraitHandle {
  platform: string;
  username: string;
}

export interface PortraitHeroProps {
  imageUrl?: string | null;
  name: string;
  /** Small uppercase role/niche line under the name (e.g. "Lifestyle creator"). */
  role?: string | null;
  /** Social handles rendered as an icon + @username row. */
  handles?: PortraitHandle[];
  /** Optional top-right action (e.g. a share button) injected by the consumer. */
  action?: ReactNode;
}

export function PortraitHero({
  imageUrl,
  name,
  role,
  handles,
  action,
}: PortraitHeroProps) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(imageUrl) && !errored;

  return (
    <div>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-trovio-primary/30 to-trovio-primary-dark/30">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={`${name} portrait`}
            className="absolute inset-0 h-full w-full object-cover"
            src={imageUrl as string}
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-light text-white/90">
              {initials(name)}
            </span>
          </div>
        )}

        {action && <div className="absolute right-3 top-3 z-10">{action}</div>}

        {/* Fade the image bottom into the page background so the name reads as
            part of the page, not boxed in the image. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-trovio-light-surface to-transparent dark:from-trovio-dark-bg" />
      </div>

      {/* Name overlaps the fade and continues into the page */}
      <div className="relative -mt-10 px-1">
        <p className="text-5xl font-light leading-none tracking-tight text-trovio-light-text dark:text-trovio-dark-text md:text-6xl">
          {name}
        </p>
        {role && (
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
            {role}
          </p>
        )}
        {handles && handles.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {handles.map((h) => (
              <span
                key={h.platform + h.username}
                className="inline-flex items-center gap-1.5 text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
              >
                <PlatformIcon platform={h.platform} size={16} />@{h.username}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
