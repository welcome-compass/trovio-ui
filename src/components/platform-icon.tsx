"use client";

import type { IconType } from "react-icons";

import {
  PiInstagramLogoDuotone,
  PiTiktokLogoDuotone,
  PiYoutubeLogoDuotone,
  PiGlobeDuotone,
} from "react-icons/pi";

/**
 * Maps a platform identifier (as emitted server-side, e.g. "instagram") to its
 * logo icon. Shared by StatStrip and the crisp Media Kit preview so platform
 * chips look identical everywhere. Unknown platforms fall back to a globe.
 */
const PLATFORM_ICONS: Record<string, IconType> = {
  instagram: PiInstagramLogoDuotone,
  tiktok: PiTiktokLogoDuotone,
  youtube: PiYoutubeLogoDuotone,
};

export function PlatformIcon({
  platform,
  className,
  size = 16,
}: {
  platform: string;
  className?: string;
  size?: number;
}) {
  const Icon = PLATFORM_ICONS[platform.toLowerCase()] ?? PiGlobeDuotone;

  return <Icon aria-label={platform} className={className} size={size} />;
}

const PLATFORM_LABELS: Record<string, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
};

/** Human-readable platform name, e.g. "instagram" -> "Instagram". */
export function platformLabel(platform: string): string {
  const key = platform.toLowerCase();

  return (
    PLATFORM_LABELS[key] ?? platform.charAt(0).toUpperCase() + platform.slice(1)
  );
}
