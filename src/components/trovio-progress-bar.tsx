"use client";

import clsx from "clsx";

export interface TrovioProgressBarProps {
  /** Current value */
  value: number;
  /** Maximum value */
  max: number;
  /** Fill color (hex string, e.g. "#FF00AA") */
  color?: string;
  /** Size variant */
  size?: "sm" | "md";
  /** Additional class names */
  className?: string;
  /** Accessible label (e.g. "Fitness: 3 of 5 posts") */
  label?: string;
}

/**
 * Trovio Progress Bar
 * -------------------
 * Linear progress bar with customizable fill color.
 * Used primarily in the pillar challenge widget to show posting progress.
 *
 * - Pillar-colored fill with border-colored background
 * - Rounded ends (rounded-full)
 * - Accessible with role="progressbar" and aria attributes
 */
export function TrovioProgressBar({
  value,
  max,
  color = "var(--color-trovio-primary)",
  size = "md",
  className,
  label,
}: TrovioProgressBarProps) {
  const percentage = max > 0 ? Math.min((value / max) * 100, 100) : 0;

  return (
    <div
      aria-label={label}
      aria-valuemax={max}
      aria-valuemin={0}
      aria-valuenow={value}
      className={clsx(
        "w-full rounded-full bg-trovio-light-border dark:bg-trovio-dark-border",
        size === "sm" ? "h-1.5" : "h-2.5",
        className,
      )}
      role="progressbar"
    >
      <div
        className={clsx(
          "rounded-full transition-all duration-500 ease-out",
          size === "sm" ? "h-1.5" : "h-2.5",
        )}
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
