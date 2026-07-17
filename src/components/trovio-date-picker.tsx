"use client";

import type { CalendarDate } from "@internationalized/date";

import { useRef } from "react";
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
  // HeroUI's DatePicker.Popover never forwards the trigger it captures in
  // context to the underlying react-aria Popover, so a Button-triggered popover
  // has no anchor and lands at (0,0). Hand it the trigger ourselves.
  const triggerRef = useRef<HTMLButtonElement>(null);

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
        <DatePicker.Trigger
          ref={triggerRef}
          // Read as a form field, not bare text — the default trigger gave no
          // affordance that it was clickable. Mirrors TrovioInput's treatment so
          // the picker sits consistently beside the other controls.
          className={clsx(
            "flex w-full items-center justify-between gap-2 text-left",
            "rounded-xl border-2 border-transparent px-4 py-3 shadow-sm transition-colors",
            "bg-[rgba(102,102,255,0.1)] hover:bg-[rgba(102,102,255,0.15)]",
            "dark:bg-[rgba(102,102,255,0.15)] dark:hover:bg-[rgba(102,102,255,0.2)]",
            "focus-visible:border-trovio-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trovio-primary/20",
          )}
        >
          {selected ? (
            formatCalendarDate(selected)
          ) : (
            <span className="text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              {placeholder}
            </span>
          )}
          <DatePicker.TriggerIndicator />
        </DatePicker.Trigger>
        <DatePicker.Popover triggerRef={triggerRef}>
          {/* The inner Calendar is a standalone react-aria Calendar; without its
              own minValue it falls back to HeroUI's 1900-01-01 default and lets
              past days be picked. Pass the bound through so it actually holds. */}
          <Calendar minValue={earliest ?? undefined}>
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
