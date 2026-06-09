"use client";

import type { ReactNode } from "react";

import clsx from "clsx";

/**
 * RingGauge (Primitive) — a small circular (donut) progress gauge.
 *
 * Renders an SVG donut: a muted track + a primary-colored arc filled to
 * `value` (0–1), with optional centered content (an icon, a number).
 * Used for the Insights score factors and the Post Analyzer score ring.
 */
export interface RingGaugeProps {
  /** Fill fraction, 0–1. */
  value: number;
  size?: number;
  stroke?: number;
  /** Arc color (CSS color). Defaults to the brand primary. */
  color?: string;
  /** Tailwind text-color class for the track ring. */
  trackClassName?: string;
  className?: string;
  children?: ReactNode;
}

export function RingGauge({
  value,
  size = 56,
  stroke = 5,
  color = "var(--color-trovio-primary)",
  trackClassName = "text-trovio-light-border dark:text-trovio-dark-border",
  className,
  children,
}: RingGaugeProps) {
  const clamped = Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = clamped * c;

  return (
    <div
      className={clsx("relative inline-flex shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <svg height={size} width={size}>
        <circle
          className={trackClassName}
          cx={size / 2}
          cy={size / 2}
          fill="none"
          r={r}
          stroke="currentColor"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          fill="none"
          r={r}
          stroke={color}
          strokeDasharray={`${dash} ${c - dash}`}
          strokeLinecap="round"
          strokeWidth={stroke}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {children ? (
        <span className="absolute inset-0 flex items-center justify-center text-trovio-primary">
          {children}
        </span>
      ) : null}
    </div>
  );
}
