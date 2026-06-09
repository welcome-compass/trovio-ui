"use client";

import clsx from "clsx";

/**
 * Sparkline (Primitive) — a tiny inline trend line (no axes, no labels).
 *
 * Pure SVG, no deps. Renders nothing when there are fewer than 2 points
 * (graceful degrade — callers can pass `points={[]}` until data exists).
 */
export interface SparklineProps {
  /** Series values in chronological order. */
  points: number[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

export function Sparkline({
  points,
  width = 90,
  height = 34,
  strokeWidth = 2,
  color = "var(--color-trovio-primary)",
  className,
}: SparklineProps) {
  if (!points || points.length < 2) return null;

  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const pad = strokeWidth;
  const innerW = width - pad * 2;
  const innerH = height - pad * 2;

  const coords = points.map((p, i) => {
    const x = pad + (i / (points.length - 1)) * innerW;
    // higher value → higher on screen (smaller y)
    const y = pad + innerH - ((p - min) / span) * innerH;

    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  return (
    <svg
      aria-hidden="true"
      className={clsx("shrink-0", className)}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      <polyline
        fill="none"
        points={coords.join(" ")}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
