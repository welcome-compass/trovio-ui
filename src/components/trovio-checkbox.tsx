"use client";

import clsx from "clsx";
import { Checkbox } from "@heroui/react";

export interface TrovioCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  "aria-label": string;
  className?: string;
  size?: "md" | "lg";
  isDisabled?: boolean;
}

/**
 * Trovio Checkbox
 * --------------
 * Thin wrapper around HeroUI v3 Checkbox.
 * We keep the default square checkbox visuals and only apply minimal Trovio theming.
 */
export function TrovioCheckbox({
  checked,
  onChange,
  className,
  size = "md",
  isDisabled = false,
  ...ariaProps
}: TrovioCheckboxProps) {
  // Presentation-only: analytics are the consumer's concern (wrap onChange).
  const wrappedOnChange = (isChecked: boolean) => {
    onChange(isChecked);
  };

  // Slightly larger targets for mobile tapping.
  const controlSize = size === "lg" ? "size-7" : "size-6";
  const checkmarkSize = size === "lg" ? "size-4" : "size-3.5";

  return (
    <Checkbox
      {...ariaProps}
      className={clsx(
        // Avoid extra spacing when used as an icon in a flex row
        "shrink-0 gap-0 group",
        className,
      )}
      isDisabled={isDisabled}
      isSelected={checked}
      onChange={wrappedOnChange}
    >
      <Checkbox.Control
        className={clsx(
          controlSize,
          // Keep default square checkbox; apply Trovio colors.
          "rounded-md shadow-none",
          // Default (unchecked)
          "bg-trovio-light-border/40 dark:bg-trovio-dark-border/40",
          "border-trovio-light-border dark:border-trovio-dark-border",
          // Hover
          "group-data-[hovered]:border-trovio-primary",
          // Selected: trovio fill + white checkmark
          "group-data-[selected]:border-transparent group-aria-[checked=true]:border-transparent",
          "before:opacity-0 group-data-[selected]:before:opacity-100 group-aria-[checked=true]:before:opacity-100",
          "group-data-[selected]:before:bg-trovio-primary group-aria-[checked=true]:before:bg-trovio-primary",
        )}
      >
        <Checkbox.Indicator
          className={clsx(
            "flex items-center justify-center",
            // keep the indicator container sized consistently
            `[&_[data-slot='checkbox-default-indicator--checkmark']]:${checkmarkSize}`,
          )}
        >
          {({ isSelected }: { isSelected: boolean }) => (
            <svg
              aria-hidden="true"
              className={clsx(
                checkmarkSize,
                isSelected
                  ? "text-white"
                  : "text-trovio-light-text-muted/40 dark:text-trovio-dark-text-muted/40",
              )}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
          )}
        </Checkbox.Indicator>
      </Checkbox.Control>
    </Checkbox>
  );
}
