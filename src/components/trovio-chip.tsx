"use client";

import type { ChipProps } from "@heroui/react";

import React from "react";
import { Chip } from "@heroui/react";
import { tv } from "tailwind-variants";

/**
 * TrovioChip — the generic, rounded inline chip / pill.
 *
 * Use this for any small labelled token that isn't a status: tags, filters,
 * community / member / audience chips, etc. Keeping them on one primitive means
 * chips read identically across the dashboard and adjacent products (creator +
 * admin). For status labels (published / draft / …) use `TrovioBadge` instead.
 */
const trovioChipVariants = tv({
  base: "rounded-full font-semibold border",
  variants: {
    variant: {
      soft: "bg-trovio-primary/10 border-trovio-primary/15 text-trovio-light-text dark:text-trovio-dark-text",
      solid: "bg-trovio-primary border-trovio-primary text-white",
      outline: "bg-transparent border-trovio-primary/40 text-trovio-primary",
      neutral:
        "bg-trovio-light-surface dark:bg-trovio-dark-surface border-trovio-light-border dark:border-trovio-dark-border text-trovio-light-text dark:text-trovio-dark-text",
    },
  },
  defaultVariants: {
    variant: "soft",
  },
});

export interface TrovioChipProps extends Omit<ChipProps, "color" | "variant"> {
  /**
   * Visual style:
   * - `soft` (default) — primary-tinted pill
   * - `solid` — filled primary
   * - `outline` — primary outline
   * - `neutral` — surface + border, no brand color
   */
  variant?: "soft" | "solid" | "outline" | "neutral";
}

export const TrovioChip: React.FC<TrovioChipProps> = ({
  children,
  variant = "soft",
  className,
  ...props
}) => {
  return (
    <Chip
      {...props}
      className={trovioChipVariants({ variant, className })}
      variant="soft"
    >
      {children}
    </Chip>
  );
};
