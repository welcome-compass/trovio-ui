"use client";

import type { IconType, IconBaseProps } from "react-icons";

import clsx from "clsx";

/**
 * TrovioIcon — renders a Phosphor icon **flat by default**.
 *
 * Phosphor *Duotone* icons (`react-icons/pi` `*Duotone`) ship a translucent
 * background layer — a `<path opacity="0.2">` behind the glyph — that reads as a
 * stray tinted box behind utility icons (plus, pencil, trash, carets, refresh,
 * upload). This primitive zeroes that layer so action/utility icons render
 * clean, with no per-app `icon-flat` class to remember (and no way to get it
 * subtly wrong — the class-on-the-svg form of `icon-flat` silently no-ops).
 *
 * Flattening is a self-contained Tailwind arbitrary variant baked into the
 * class, so it works in any consumer that already sources `@trovio/ui/dist` —
 * no extra CSS import.
 *
 * Pass `duotone` to KEEP the fill for decorative / feature icons where the
 * duotone layer is intentional (hearts, sparkles, trophies, large hero checks).
 *
 * ```tsx
 * <TrovioIcon icon={PiPlusDuotone} className="text-base" />   // flat "+"
 * <TrovioIcon icon={PiHeartDuotone} duotone size={20} />      // keeps the fill
 * ```
 */
export interface TrovioIconProps extends IconBaseProps {
  /** The Phosphor icon component, e.g. `PiPlusDuotone` from `react-icons/pi`. */
  icon: IconType;
  /** Keep the Duotone background fill (decorative / feature icons). Default off. */
  duotone?: boolean;
}

/** Zeroes the Phosphor duotone background sublayer (`path[opacity="0.2"]`). */
const FLATTEN_DUOTONE = "[&_path[opacity]]:opacity-0";

export function TrovioIcon({
  icon: Icon,
  duotone = false,
  className,
  ...props
}: TrovioIconProps) {
  return (
    <Icon className={clsx(!duotone && FLATTEN_DUOTONE, className)} {...props} />
  );
}
