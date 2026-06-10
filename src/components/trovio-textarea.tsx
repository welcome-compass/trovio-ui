"use client";

import React from "react";
import { TextArea } from "@heroui/react";
import { tv } from "tailwind-variants";

// Trovio textarea variants using tv() pattern
const trovioTextAreaVariants = tv({
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
    "min-h-20 p-3",
  ],
  variants: {
    variant: {
      default: "",
      dynamic: "min-h-32",
    },
    hasError: {
      true: "!border-trovio-secondary-2 !bg-red-50 dark:!bg-[rgba(255,51,102,0.1)] focus-within:!ring-trovio-secondary-2/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TrovioTextAreaProps {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: "default" | "dynamic";
  className?: string;
  placeholder?: string;
  value?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TrovioTextArea: React.FC<TrovioTextAreaProps> = ({
  label,
  helperText,
  error,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-left block text-xs font-semibold text-trovio-light-text-muted dark:text-trovio-dark-text-muted mb-1.5">
          {label}
        </label>
      )}

      <TextArea
        {...props}
        className={trovioTextAreaVariants({
          variant,
          hasError: !!error,
          className,
        })}
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
