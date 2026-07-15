"use client";

import type { CalendarDate } from "@internationalized/date";

import { Calendar, DatePicker } from "@heroui/react";
import { parseDate } from "@internationalized/date";
import clsx from "clsx";

/** Trigger display, e.g. "Jul 28, 2026". */
const DISPLAY_FORMAT: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
};

/**
 * Parse an ISO calendar day. An absent or malformed value reads as "no day
 * picked" rather than throwing — the primitives here tolerate bad input instead
 * of taking the page down with them (cf. RingGauge's non-finite guard).
 */
function toCalendarDate(iso: string | null | undefined): CalendarDate | null {
  if (!iso) return null;

  try {
    return parseDate(iso);
  } catch {
    return null;
  }
}

/**
 * Format a calendar day for display. The instant is built in UTC and formatted
 * in UTC, so the two agree by construction and the day rendered is always the
 * day stored — in every timezone, on both sides of a DST boundary.
 */
function formatCalendarDate(date: CalendarDate): string {
  return new Intl.DateTimeFormat(undefined, DISPLAY_FORMAT).format(
    new Date(Date.UTC(date.year, date.month - 1, date.day)),
  );
}

export interface TrovioDatePickerProps {
  /** Controlled value — an ISO calendar day, "YYYY-MM-DD". null when unset. */
  value?: string | null;
  /** Fires with an ISO calendar day, or null when the day is cleared. */
  onChange?: (value: string | null) => void;
  /** Earliest selectable day, "YYYY-MM-DD". Earlier days render unclickable. */
  minValue?: string;
  /** Field label rendered above the trigger. */
  label?: string;
  helperText?: string;
  ariaLabel?: string;
  isDisabled?: boolean;
  /** Trigger text when no day is picked. */
  placeholder?: string;
  className?: string;
}

/**
 * TrovioDatePicker — the design-system wrapper around HeroUI's DatePicker, with
 * a flat ISO-string API instead of the compound children (mirrors TrovioSelect).
 *
 * The value is a **calendar day** ("YYYY-MM-DD") — never a `Date`, never an
 * instant. A delivery date is a square on a calendar, not a moment in time; the
 * moment you round-trip one through a timestamp it starts landing on the wrong
 * day either side of UTC. `@internationalized/date` models the day itself, so
 * what gets picked is what gets stored.
 */
export function TrovioDatePicker({
  value,
  onChange,
  minValue,
  label,
  helperText,
  ariaLabel,
  isDisabled,
  placeholder = "Select a date…",
  className,
}: TrovioDatePickerProps) {
  const selected = toCalendarDate(value);
  const earliest = toCalendarDate(minValue);

  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>
      {label ? (
        <label className="text-xs font-semibold text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          {label}
        </label>
      ) : null}
      <DatePicker
        aria-label={ariaLabel ?? label ?? placeholder}
        isDisabled={isDisabled}
        minValue={earliest ?? undefined}
        value={selected}
        onChange={(next) => onChange?.(next ? next.toString() : null)}
      >
        <DatePicker.Trigger>
          {selected ? (
            formatCalendarDate(selected)
          ) : (
            <span className="text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              {placeholder}
            </span>
          )}
          <DatePicker.TriggerIndicator />
        </DatePicker.Trigger>
        <DatePicker.Popover>
          <Calendar>
            <Calendar.Header>
              <Calendar.NavButton slot="previous" />
              <Calendar.Heading />
              <Calendar.NavButton slot="next" />
            </Calendar.Header>
            <Calendar.Grid>
              <Calendar.GridHeader>
                {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
              </Calendar.GridHeader>
              <Calendar.GridBody>
                {(date) => <Calendar.Cell date={date} />}
              </Calendar.GridBody>
            </Calendar.Grid>
          </Calendar>
        </DatePicker.Popover>
      </DatePicker>
      {helperText ? (
        <p className="text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
