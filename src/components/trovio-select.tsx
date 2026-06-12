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
      {/* Rely on HeroUI's themed `select__trigger` layout (value + indicator in
          one row). Overriding the trigger's display utilities pushed the caret
          under the value — so we only pass cosmetic size via the wrapper. */}
      <Select
        aria-label={ariaLabel ?? label ?? placeholder}
        className={size === "sm" ? "text-caption" : undefined}
        isDisabled={isDisabled}
        placeholder={placeholder}
        selectedKey={selectedKey ?? null}
        onSelectionChange={(k) => onSelectionChange?.(k ? String(k) : "")}
      >
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {options.map((o) => (
              <ListBox.Item
                key={o.key}
                id={o.key}
                textValue={
                  o.textValue ?? (typeof o.label === "string" ? o.label : o.key)
                }
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
