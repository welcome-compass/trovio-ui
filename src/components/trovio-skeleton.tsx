"use client";

import React from "react";
import { Skeleton } from "@heroui/react";
import clsx from "clsx";

export interface TrovioSkeletonProps {
  isLoaded?: boolean;
  disableAnimation?: boolean;
  className?: string;
  children?: React.ReactNode;
  usePrimaryColor?: boolean;
}

export const TrovioSkeleton = ({
  isLoaded = false,
  disableAnimation = false,
  className = "",
  children,
  usePrimaryColor = true,
}: TrovioSkeletonProps) => {
  if (isLoaded) {
    return <>{children}</>;
  }

  return (
    <Skeleton
      animationType={disableAnimation ? "none" : "pulse"}
      className={clsx(
        className,
        usePrimaryColor && "bg-trovio-primary/15 dark:bg-trovio-primary/15",
      )}
    />
  );
};

export default TrovioSkeleton;
