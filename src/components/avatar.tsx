"use client";

import { useState } from "react";
import clsx from "clsx";

/**
 * Avatar — a round profile image with an initials fallback. Presentation-only
 * primitive (plain `<img>`; consumers using next/image can wrap their own).
 */
function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0]!.toUpperCase();

  return (parts[0][0]! + parts[parts.length - 1]![0]!).toUpperCase();
}

export interface AvatarProps {
  imageUrl?: string | null;
  /** Used for the initials fallback + alt text. */
  name?: string;
  /** Pixel size (width = height). Default 32. */
  size?: number;
  className?: string;
}

export function Avatar({
  imageUrl,
  name = "",
  size = 32,
  className,
}: AvatarProps) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(imageUrl) && !errored;

  return (
    <span
      className={clsx(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-trovio-light-bg font-bold text-trovio-light-text dark:bg-trovio-dark-bg dark:text-trovio-dark-text",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={name ? `${name} avatar` : ""}
          className="h-full w-full object-cover"
          src={imageUrl as string}
          onError={() => setErrored(true)}
        />
      ) : (
        <span style={{ fontSize: Math.round(size * 0.4) }}>
          {initialsOf(name)}
        </span>
      )}
    </span>
  );
}
