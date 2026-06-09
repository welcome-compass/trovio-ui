"use client";

import { Spinner } from "@heroui/react";
import clsx from "clsx";

export interface TrovioSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const TrovioSpinner = ({
  size = "md",
  className,
}: TrovioSpinnerProps) => {
  const sizeMap: Record<
    NonNullable<TrovioSpinnerProps["size"]>,
    "sm" | "md" | "lg"
  > = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "lg",
  };

  return (
    <Spinner
      className={clsx("text-trovio-primary", className)}
      color="current"
      size={sizeMap[size] || "md"}
    />
  );
};

export default TrovioSpinner;
