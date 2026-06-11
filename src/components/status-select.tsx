"use client";

import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

export type StatusOption = {
  /** Stable key returned to `onChange`. */
  key: string;
  /** Human label shown in the pill + menu. */
  label: string;
  /** CSS color for the status dot (hex or a `var(--…)` token). */
  color: string;
};

export type StatusSelectProps = {
  options: StatusOption[];
  /** Currently-selected option key. Falls back to the first option. */
  value: string;
  onChange: (key: string) => void;
  /** Disable the control (e.g. while a write is in flight). */
  disabled?: boolean;
  /** Accessible label for the trigger. */
  ariaLabel?: string;
  className?: string;
};

/**
 * StatusSelect — a compact pill that opens a menu of states, each tagged with a
 * colored dot. Presentation-only: the caller owns `value`, `onChange`, and
 * persistence. Built for the brand-workspace status selector but generic enough
 * for any small status workflow (pipeline columns share the same color map).
 *
 * Closes on outside-click and Escape. Not a full ARIA combobox — it's a menu of
 * mutually-exclusive actions — so it uses `listbox`/`option` roles for the
 * selected-state semantics without keyboard arrow navigation.
 */
export function StatusSelect({
  options,
  value,
  onChange,
  disabled,
  ariaLabel,
  className,
}: StatusSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.key === value) ?? options[0];

  useEffect(() => {
    if (!open) return;

    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={clsx("relative inline-block", className)}>
      <button
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        className="inline-flex items-center gap-2 rounded-lg border border-trovio-light-border bg-trovio-light-surface px-3.5 py-2 text-caption font-semibold text-trovio-light-text transition-colors hover:border-trovio-light-text-muted disabled:cursor-not-allowed disabled:opacity-60 dark:border-trovio-dark-border dark:bg-trovio-dark-surface dark:text-trovio-dark-text"
        disabled={disabled}
        type="button"
        onClick={() => setOpen((o) => !o)}
      >
        <span
          className="h-2 w-2 shrink-0 rounded-full"
          style={{ background: selected?.color }}
        />
        {selected?.label}
        <span className="text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          ▾
        </span>
      </button>

      {open ? (
        <ul
          className="absolute right-0 z-30 mt-2 min-w-[12rem] rounded-xl border border-trovio-light-border bg-trovio-light-surface p-1.5 shadow-lg dark:border-trovio-dark-border dark:bg-trovio-dark-surface"
          role="listbox"
        >
          {options.map((o) => {
            const isSel = o.key === selected?.key;

            return (
              <li key={o.key} aria-selected={isSel} role="option">
                <button
                  className={clsx(
                    "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-caption text-trovio-light-text hover:bg-trovio-light-bg dark:text-trovio-dark-text dark:hover:bg-trovio-dark-bg",
                    isSel && "font-semibold",
                  )}
                  type="button"
                  onClick={() => {
                    onChange(o.key);
                    setOpen(false);
                  }}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: o.color }}
                  />
                  {o.label}
                  {isSel ? (
                    <span className="ml-auto text-trovio-primary">✓</span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
