"use client";

import type { InputProps } from "@heroui/react";

import React from "react";
import { Input } from "@heroui/react";
import { tv } from "tailwind-variants";

// Trovio input variants using tv() pattern
const trovioInputVariants = tv({
  base: [
    "w-full",
    "bg-[rgba(102,102,255,0.1)] dark:bg-[rgba(102,102,255,0.15)]",
    "hover:bg-[rgba(102,102,255,0.15)] dark:hover:bg-[rgba(102,102,255,0.2)]",
    "rounded-xl border-2 border-transparent",
    "shadow-sm",
    "transition-all duration-200",
    "focus-within:border-trovio-primary focus-within:shadow-md focus-within:ring-2 focus-within:ring-trovio-primary/20",
    "text-trovio-light-text dark:text-trovio-dark-text",
    "placeholder:text-trovio-light-text-muted/60 dark:placeholder:text-trovio-dark-text-muted/60",
  ],
  variants: {
    size: {
      sm: "h-10 px-3 py-2 text-sm",
      md: "h-12 px-4 py-3 text-base",
      lg: "h-14 px-5 py-3.5 text-base",
    },
    variant: {
      default: "",
      dynamic: "min-h-12",
    },
    hasError: {
      true: "!border-trovio-secondary-2 !bg-red-50 dark:!bg-[rgba(255,51,102,0.1)] focus-within:!ring-trovio-secondary-2/20",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export interface TrovioInputProps extends Omit<InputProps, "variant" | "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "dynamic";
}

export const TrovioInput: React.FC<TrovioInputProps> = ({
  label,
  helperText,
  error,
  size = "md",
  variant = "default",
  className,
  ...props
}) => {
  // HeroUI v3 (react-aria-components) allows `className` to be a string OR a render-prop
  // function. `tailwind-variants` expects a concrete className string, so we normalize here.
  const baseClassName = trovioInputVariants({
    size,
    variant,
    hasError: !!error,
  });

  return (
    <div className="w-full">
      {label && (
        <label className="text-left block text-xs font-semibold text-trovio-light-text-muted dark:text-trovio-dark-text-muted mb-1.5">
          {label}
        </label>
      )}

      <Input
        {...props}
        className={
          typeof className === "function"
            ? (renderProps: any) =>
                trovioInputVariants({
                  size,
                  variant,
                  hasError: !!error,
                  className: [baseClassName, className(renderProps)]
                    .filter(Boolean)
                    .join(" "),
                })
            : trovioInputVariants({
                size,
                variant,
                hasError: !!error,
                className: [baseClassName, className].filter(Boolean).join(" "),
              })
        }
      />

      {error ? (
        <p className="text-left mt-1 text-xs text-trovio-secondary-2">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-left mt-1 text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
