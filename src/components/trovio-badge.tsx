"use client";

import type { ChipProps } from "@heroui/react";

import React from "react";
import { Chip } from "@heroui/react";
import { tv } from "tailwind-variants";

// Trovio badge variants using tv() pattern
const trovioBadgeVariants = tv({
  base: "text-xs font-medium",
  variants: {
    status: {
      published:
        "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
      success:
        "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
      draft:
        "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300",
      warning:
        "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300",
      archived: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300",
      error: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300",
      info: "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300",
    },
  },
  defaultVariants: {
    status: "info",
  },
});

// Map status to HeroUI color for accessibility
const statusToChipColor = {
  published: "success",
  success: "success",
  draft: "warning",
  warning: "warning",
  archived: "danger",
  error: "danger",
  info: "accent",
} as const;

export interface TrovioBadgeProps extends Omit<ChipProps, "color"> {
  status:
    | "published"
    | "draft"
    | "archived"
    | "success"
    | "warning"
    | "error"
    | "info";
}

export const TrovioBadge: React.FC<TrovioBadgeProps> = ({
  children,
  status,
  className,
  ...props
}) => {
  return (
    <Chip
      {...props}
      className={trovioBadgeVariants({ status, className })}
      color={statusToChipColor[status]}
      variant="soft"
    >
      {children}
    </Chip>
  );
};
