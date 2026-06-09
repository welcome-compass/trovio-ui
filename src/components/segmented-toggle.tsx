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
}

export function SegmentedToggle<T extends string>({
  options,
  value,
  onChange,
  className,
}: {
  options: SegmentedToggleOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-wrap gap-2", className)} role="tablist">
      {options.map((opt) => {
        const active = opt.value === value;

        return (
          <button
            key={opt.value}
            aria-selected={active}
            className={clsx(
              "rounded-full border px-3 py-1.5 text-caption font-semibold transition-colors",
              active
                ? "border-trovio-primary bg-trovio-primary text-white"
                : "border-trovio-light-border text-trovio-light-text-muted hover:border-trovio-primary/50 dark:border-trovio-dark-border dark:text-trovio-dark-text-muted",
            )}
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
