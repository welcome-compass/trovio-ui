"use client";

import { RingGauge } from "./ring-gauge";

/**
 * ScoreRing (Primitive) — a 0–100 score inside a circular gauge, the number and
 * "/100" stacked in the middle. Used for the Post Analyzer's overall score and
 * the campaign builder's brand-fit score.
 *
 * `loading` is the beat before a score resolves: the arc stays empty and a
 * pulsing placeholder stands in for the number, so the ring holds its slot in
 * the layout instead of popping in once the value lands.
 */
export interface ScoreRingProps {
  /** Score out of 100. Ignored while `loading`. */
  score: number;
  size?: number;
  /** Calculating beat — empty arc + a pulsing placeholder instead of `score`. */
  loading?: boolean;
  className?: string;
}

export function ScoreRing({
  score,
  size = 56,
  loading = false,
  className,
}: ScoreRingProps) {
  return (
    <RingGauge className={className} size={size} value={loading ? 0 : score / 100}>
      <span className="flex flex-col items-center leading-none">
        {loading ? (
          <span className="h-4 w-5 animate-pulse rounded bg-trovio-light-text/10 dark:bg-trovio-dark-text/10" />
        ) : (
          <span className="text-base font-bold text-trovio-light-text dark:text-trovio-dark-text">
            {score}
          </span>
        )}
        <span className="mt-0.5 text-[9px] font-medium text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          /100
        </span>
      </span>
    </RingGauge>
  );
}
