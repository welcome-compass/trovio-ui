"use client";

import clsx from "clsx";

/**
 * SegmentedToggle (Primitive) — a small pill-style single-select control.
 *
 * Token-driven: the selected pill is the brand primary, the rest are muted
 * outlines. Used e.g. for the Message Crafter channel picker.
 */
export interface SegmentedToggleOption<T extends string> {
  value: T;
  label: string;
  /**
   * Render the option muted and unclickable while keeping it visible — the
   * option stays part of the choice on offer, it just isn't available. Used
   * where a creator's stated deal preferences exclude one of the options.
   */
  disabled?: boolean;
}

export interface SegmentedToggleProps<T extends string> {
  options: SegmentedToggleOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /**
   * Stretch the options to share the full row width. Default false — options
   * size to their label and wrap.
   */
  fullWidth?: boolean;
  className?: string;
}

export function SegmentedToggle<T extends string>({
  options,
  value,
  onChange,
  fullWidth = false,
  className,
}: SegmentedToggleProps<T>) {
  return (
    <div
      className={clsx("flex gap-2", fullWidth ? "w-full" : "flex-wrap", className)}
      role="tablist"
    >
      {options.map((opt) => {
        const active = opt.value === value;

        return (
          <button
            key={opt.value}
            aria-selected={active}
            className={clsx(
              "rounded-full border px-3 py-1.5 text-caption font-semibold transition-colors disabled:pointer-events-none disabled:opacity-40",
              fullWidth && "flex-1",
              active
                ? "border-trovio-primary bg-trovio-primary text-white"
                : "border-trovio-light-border text-trovio-light-text-muted hover:border-trovio-primary/50 dark:border-trovio-dark-border dark:text-trovio-dark-text-muted",
            )}
            disabled={opt.disabled}
            role="tab"
            type="button"
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
