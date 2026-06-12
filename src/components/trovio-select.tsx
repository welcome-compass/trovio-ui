"use client";

import type { ReactNode } from "react";

import { Select, ListBox } from "@heroui/react";
import clsx from "clsx";

export interface TrovioSelectOption {
  key: string;
  label: ReactNode;
  /** Plain-text label for type-ahead + the trigger value when `label` is a node. */
  textValue?: string;
}

export interface TrovioSelectProps {
  options: TrovioSelectOption[];
  /** Controlled selected key. */
  selectedKey?: string | null;
  onSelectionChange?: (key: string) => void;
  placeholder?: string;
  /** Field label rendered above the trigger. */
  label?: string;
  helperText?: string;
  ariaLabel?: string;
  isDisabled?: boolean;
  size?: "sm" | "md";
  className?: string;
}

/**
 * TrovioSelect — the design-system wrapper around HeroUI's Select. A thin proxy
 * for now (so we stop reaching for raw `@heroui/react` Select and forgetting the
 * design system), with a simple `options` API instead of the compound children.
 * Gives us one place to restyle every dropdown later.
 */
export function TrovioSelect({
  options,
  selectedKey,
  onSelectionChange,
  placeholder = "Select…",
  label,
  helperText,
  ariaLabel,
  isDisabled,
  size = "md",
  className,
}: TrovioSelectProps) {
  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>
      {label ? (
        <label className="text-xs font-semibold text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          {label}
        </label>
      ) : null}
      <Select
        aria-label={ariaLabel ?? label ?? placeholder}
        isDisabled={isDisabled}
        placeholder={placeholder}
        selectedKey={selectedKey ?? null}
        onSelectionChange={(k) => onSelectionChange?.(k ? String(k) : "")}
      >
        <Select.Trigger
          className={clsx(
            "inline-flex items-center gap-2 rounded-lg border border-trovio-light-border bg-trovio-light-surface font-medium text-trovio-light-text outline-none transition-colors hover:border-trovio-light-text-muted focus-visible:border-trovio-primary focus-visible:ring-2 focus-visible:ring-trovio-primary/40 disabled:cursor-not-allowed disabled:opacity-60 dark:border-trovio-dark-border dark:bg-trovio-dark-surface dark:text-trovio-dark-text",
            size === "sm" ? "px-3 py-2 text-caption" : "px-3.5 py-2.5 text-sm",
          )}
        >
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className="rounded-xl border border-trovio-light-border bg-trovio-light-surface p-1.5 shadow-lg dark:border-trovio-dark-border dark:bg-trovio-dark-surface">
          <ListBox>
            {options.map((o) => (
              <ListBox.Item
                key={o.key}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-caption text-trovio-light-text outline-none data-[focused]:bg-trovio-light-bg dark:text-trovio-dark-text dark:data-[focused]:bg-trovio-dark-bg"
                id={o.key}
                textValue={o.textValue ?? (typeof o.label === "string" ? o.label : o.key)}
              >
                {o.label}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
      {helperText ? (
        <p className="text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
