"use client";

import { NumberField } from "@heroui/react";
import clsx from "clsx";

/**
 * A range the creator actually stated. Modelled as a union so the two half-open
 * shapes are real types: there is no case where both bounds are absent, and no
 * branch that has to invent a number for a missing one.
 */
type StatedRange =
  | { min: number; max: number }
  | { min: number; max: null }
  | { min: null; max: number };

type Verdict = "below" | "within" | "above";

const VERDICT_COPY: Record<Verdict, string> = {
  below: "your offer is below it",
  within: "your offer is inside it",
  above: "your offer is above it",
};

/** Below-range is the one worth flagging — the creator has said in advance
 *  they'd turn it down. It warns; it never blocks. */
const VERDICT_TONE: Record<Verdict, string> = {
  below: "text-yellow-700 dark:text-yellow-400",
  within: "text-trovio-primary",
  above: "text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
};

const money = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

const toBound = (n: number | null | undefined): number | null =>
  typeof n === "number" && Number.isFinite(n) ? n : null;

/**
 * The creator's stated range, or null when they haven't given us a usable one.
 *
 * Most creators have no deal preferences at all, so "no range" is the ordinary
 * case rather than a fallback. An inverted range (min > max) resolves to null
 * as well: it can't be satisfied by any offer, so it is treated as unanswered
 * instead of being rendered as confident nonsense.
 */
function resolveRange(
  rangeMin: number | null | undefined,
  rangeMax: number | null | undefined,
): StatedRange | null {
  const min = toBound(rangeMin);
  const max = toBound(rangeMax);

  if (min !== null && max !== null) return min > max ? null : { min, max };
  if (min !== null) return { min, max: null };
  if (max !== null) return { min: null, max };

  return null;
}

/** "$250–$450" · "$250+" · "up to $450" — an absent bound renders as an open
 *  end, never as a number we filled in on the creator's behalf. */
function describeRange(range: StatedRange): string {
  if (range.min !== null && range.max !== null) {
    return `${money(range.min)}–${money(range.max)}`;
  }
  if (range.min !== null) return `${money(range.min)}+`;

  return `up to ${money(range.max)}`;
}

function verdictFor(value: number | null, range: StatedRange): Verdict | null {
  if (value === null) return null;
  if (range.min !== null && value < range.min) return "below";
  if (range.max !== null && value > range.max) return "above";

  return "within";
}

/**
 * Read-only meter: the stated band, plus a marker where the offer falls. The
 * scale is cosmetic and deliberately arbitrary — it exists to be read, not to
 * bound anything, so it stretches to fit whatever it is given.
 */
function RangeMeter({
  range,
  value,
}: {
  range: StatedRange;
  value: number | null;
}) {
  const points = [range.min, range.max, value].filter(
    (n): n is number => n !== null,
  );
  const lo = Math.min(...points);
  const hi = Math.max(...points);
  const span = hi - lo;
  // Pad so the band and the marker never sit flush against the ends. When every
  // point coincides there is no span to scale from, so fall back to a width
  // that keeps the divisor non-zero.
  const pad = span > 0 ? span * 0.25 : Math.max(hi * 0.25, 1);
  const domainLo = Math.max(0, lo - pad);
  const domainHi = hi + pad;
  const pct = (n: number) =>
    Math.max(0, Math.min(100, ((n - domainLo) / (domainHi - domainLo)) * 100));

  // A null bound is an open end: the band runs to the edge of the track instead
  // of to a bound we interpolated.
  const left = range.min !== null ? pct(range.min) : 0;
  const right = range.max !== null ? pct(range.max) : 100;

  return (
    <div
      aria-hidden
      className="relative h-1.5 w-full rounded-full bg-trovio-light-border dark:bg-trovio-dark-border"
    >
      <span
        className="absolute inset-y-0 rounded-full bg-trovio-primary/25"
        style={{ left: `${left}%`, width: `${right - left}%` }}
      />
      {value !== null ? (
        <span
          className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-trovio-light-surface bg-trovio-primary shadow-sm dark:border-trovio-dark-surface"
          style={{ left: `${pct(value)}%` }}
        />
      ) : null}
    </div>
  );
}

export interface OfferFieldProps {
  /** The offer in whole dollars; null when unset. Never seeded — the brand
   *  names its own number. */
  value: number | null;
  onChange: (value: number | null) => void;
  /** Field label. Default "Offer amount". */
  label?: string;
  /**
   * The creator's stated bounds, in whole dollars. Independently nullable, and
   * most creators have neither. They are context only: they feed the caption
   * and the meter, and never restrict what can be entered.
   */
  rangeMin?: number | null;
  rangeMax?: number | null;
  /** Lead-in for the range caption. Default "Accepts". */
  rangeLabel?: string;
  helperText?: string;
  ariaLabel?: string;
  isDisabled?: boolean;
  className?: string;
}

/**
 * OfferField — the campaign builder's offer control: a number field, plus a
 * read-only meter showing the range the creator said they accept.
 *
 * The brand's input and the creator's range are kept strictly apart. The range
 * is *data the creator gave us*, so it is rendered as context and nothing more:
 * it never becomes the input's domain, never seeds a default, and never blocks
 * a number. Trovio does not compute a price, and a control whose limits come
 * from the creator's bounds would be quietly doing exactly that — as well as
 * having nothing to show for the many creators who have stated no range at all.
 * That case is the ordinary one: no caption, no meter, just the field.
 */
export function OfferField({
  value,
  onChange,
  label = "Offer amount",
  rangeMin,
  rangeMax,
  rangeLabel = "Accepts",
  helperText,
  ariaLabel,
  isDisabled,
  className,
}: OfferFieldProps) {
  const range = resolveRange(rangeMin, rangeMax);
  const verdict = range ? verdictFor(value, range) : null;

  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>
      {label ? (
        <label className="text-xs font-semibold text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          {label}
        </label>
      ) : null}
      {/* `minValue` is 0 because a negative offer is meaningless — it is not
          derived from the creator's bounds. No `step`, so any whole dollar is
          reachable by typing or stepping. */}
      <NumberField
        aria-label={ariaLabel ?? label}
        formatOptions={{
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }}
        isDisabled={isDisabled}
        minValue={0}
        value={value ?? Number.NaN}
        onChange={(next) => onChange(Number.isNaN(next) ? null : next)}
      >
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>
      {range ? (
        <div className="flex flex-col gap-1.5 pt-1">
          <RangeMeter range={range} value={value} />
          <p className="text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
            {rangeLabel} {describeRange(range)}
            {verdict ? (
              <span className={clsx("ml-1 font-medium", VERDICT_TONE[verdict])}>
                · {VERDICT_COPY[verdict]}
              </span>
            ) : null}
          </p>
        </div>
      ) : null}
      {helperText ? (
        <p className="text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
