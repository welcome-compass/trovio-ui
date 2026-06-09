"use client";

import React from "react";
import { Switch } from "@heroui/react";
import clsx from "clsx";

export interface TrovioSwitchProps {
  label?: string;
  helperText?: string;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  isDisabled?: boolean;
  name?: string;
  id?: string;
}

/**
 * Trovio Switch Component
 * -----------------------
 * Themed toggle switch using HeroUI v3 Switch
 * Uses Trovio primary color and larger size for better visibility
 */
export const TrovioSwitch: React.FC<TrovioSwitchProps> = ({
  label,
  helperText,
  className,
  checked,
  defaultChecked,
  onChange,
  isDisabled,
  name,
  id,
}) => {
  // Presentation-only: analytics are the consumer's concern (wrap onChange).
  const wrappedOnChange = (isChecked: boolean) => {
    onChange?.(isChecked);
  };

  // HeroUI v3 puts `data-selected` on the Switch root, not the Control, so
  // Tailwind's `data-[selected=true]:*` modifier on Switch.Control never
  // matches. Mark the root as a `group` and use `group-data-*` on the
  // Control instead. Without this, the selected state is invisible.
  const switchElement = (
    <Switch
      className={clsx("group", !label ? className : undefined)}
      defaultSelected={checked === undefined ? defaultChecked : undefined}
      id={id}
      isDisabled={isDisabled}
      isSelected={checked}
      name={name}
      size="lg"
      onChange={wrappedOnChange}
    >
      <Switch.Control
        className={clsx(
          // Default state
          "bg-trovio-light-border dark:bg-trovio-dark-border",
          // Hover state
          "hover:bg-trovio-light-border/80 dark:hover:bg-trovio-dark-border/80",
          // Selected state - use Trovio primary color
          "group-data-[selected=true]:bg-trovio-primary",
          "group-data-[selected=true]:hover:bg-trovio-primary/90",
        )}
      >
        <Switch.Thumb />
      </Switch.Control>
    </Switch>
  );

  if (!label) {
    return switchElement;
  }

  return (
    <div className={clsx("flex items-center gap-4", className)}>
      <div className="flex-1">
        <div className="text-sm font-medium text-trovio-light-text dark:text-trovio-dark-text">
          {label}
        </div>
        {helperText && (
          <p className="text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
            {helperText}
          </p>
        )}
      </div>
      {switchElement}
    </div>
  );
};
