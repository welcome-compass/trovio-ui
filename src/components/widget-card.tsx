"use client";

import { Card, CardProps } from "@heroui/react";
import clsx from "clsx";

export interface WidgetCardProps extends CardProps {
  /**
   * Remove default padding from card content
   * Useful for cards with full-bleed backgrounds or custom layouts
   */
  noPadding?: boolean;
  /**
   * Minimum height for the card
   * @default "300px"
   */
  minHeight?: string;
}

/**
 * Widget Card Base Component
 * --------------------------
 * Simple container card for dashboard widgets
 * Uses HeroUI v3 Card with minimal styling for maximum flexibility
 *
 * Features:
 * - Consistent card styling across widgets
 * - Optional padding control
 * - Configurable minimum height
 * - Dark mode support
 */
export function WidgetCard({
  children,
  className,
  noPadding = false,
  minHeight = "auto",
  ...props
}: WidgetCardProps) {
  return (
    <Card
      className={clsx("w-full overflow-hidden", !noPadding && "p-6", className)}
      style={{ minHeight }}
      {...props}
    >
      {children}
    </Card>
  );
}
