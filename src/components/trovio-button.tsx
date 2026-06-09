"use client";

import type { ButtonProps } from "@heroui/react";

import React, { forwardRef } from "react";
import { Button, Spinner, buttonVariants } from "@heroui/react";
import { tv } from "tailwind-variants";

// Extend HeroUI's button variants with Trovio-specific styling
const trovioButtonVariants = tv({
  extend: buttonVariants,
  base: "font-bold rounded-2xl transition-all duration-200",
  variants: {
    fullWidth: {
      true: "w-full",
    },
    tone: {
      blue: "",
      yellow: "",
    },
    variant: {
      primary: "shadow-sm",
      secondary: "shadow-sm border-2",
      tertiary: "bg-transparent",
      dashed: "border border-dashed bg-transparent",
      /**
       * Custom variant for brand-colored buttons where the caller provides the
       * full color surface (bg/text/hover/active) via className.
       *
       * Purpose: avoid inheriting Trovio blue/yellow hover overlays that can
       * clash with third-party brand colors (e.g. Instagram/TikTok).
       */
      custom:
        "shadow-sm hover:shadow-md active:scale-[0.98] bg-transparent hover:bg-transparent active:bg-transparent data-[hover=true]:bg-transparent data-[pressed=true]:bg-transparent before:bg-transparent after:bg-transparent data-[hover=true]:before:bg-transparent data-[pressed=true]:before:bg-transparent data-[hover=true]:after:bg-transparent data-[pressed=true]:after:bg-transparent",
    },
    size: {
      sm: "h-10 px-4 text-sm",
      md: "h-11 px-5 text-base",
      lg: "h-12 px-6 text-base",
    },
  },
  compoundVariants: [
    // Primary variants
    {
      variant: "primary",
      tone: "blue",
      class:
        "bg-trovio-primary text-white hover:bg-trovio-primary-dark hover:shadow-md active:scale-[0.98] dark:bg-trovio-primary dark:text-white dark:hover:bg-trovio-primary/90",
    },
    {
      variant: "primary",
      tone: "yellow",
      class:
        "bg-trovio-primary-light text-trovio-primary-dark hover:brightness-95 hover:shadow-md active:scale-[0.98] dark:bg-trovio-primary-light dark:text-trovio-primary-dark dark:hover:brightness-95",
    },

    // Secondary variants
    {
      variant: "secondary",
      tone: "blue",
      class:
        "bg-white border-trovio-light-border text-trovio-light-text hover:border-trovio-primary hover:bg-[rgba(102,102,255,0.05)] active:scale-[0.98] dark:bg-trovio-dark-surface dark:border-trovio-dark-border dark:text-trovio-dark-text dark:hover:border-trovio-primary dark:hover:bg-[rgba(102,102,255,0.1)]",
    },
    {
      variant: "secondary",
      tone: "yellow",
      class:
        "bg-white border-trovio-primary-light text-trovio-primary-dark hover:bg-[rgba(225,225,40,0.1)] active:scale-[0.98] dark:bg-trovio-dark-surface dark:border-trovio-primary-light dark:text-trovio-primary-light dark:hover:bg-[rgba(225,225,40,0.15)]",
    },

    // Tertiary variants
    {
      variant: "tertiary",
      tone: "blue",
      class:
        "text-trovio-primary hover:underline active:scale-[0.98] dark:text-trovio-primary dark:hover:underline",
    },
    {
      variant: "tertiary",
      tone: "yellow",
      class:
        "text-trovio-primary-dark hover:underline active:scale-[0.98] dark:text-trovio-primary-light dark:hover:underline",
    },

    // Dashed variants
    {
      variant: "dashed",
      tone: "blue",
      class:
        "border-trovio-light-border text-trovio-light-text hover:border-trovio-primary hover:bg-[rgba(102,102,255,0.05)] active:scale-[0.98] dark:border-trovio-dark-border dark:text-trovio-dark-text dark:hover:border-trovio-primary dark:hover:bg-[rgba(102,102,255,0.1)]",
    },
    {
      variant: "dashed",
      tone: "yellow",
      class:
        "border-trovio-primary-light text-trovio-primary-dark hover:bg-[rgba(225,225,40,0.1)] active:scale-[0.98] dark:border-trovio-primary-light dark:text-trovio-primary-light dark:hover:bg-[rgba(225,225,40,0.15)]",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    tone: "blue",
  },
});

export interface TrovioButtonProps
  extends Omit<ButtonProps, "color" | "variant" | "className"> {
  variant?: "primary" | "secondary" | "tertiary" | "dashed" | "custom";
  color?: "blue" | "yellow";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  isPending?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
  className?: string;
}

export const TrovioButton = forwardRef<HTMLButtonElement, TrovioButtonProps>(
  (propsFromArgs, _ref) => {
    const {
      children,
      variant = "primary",
      color = "blue",
      fullWidth = false,
      size = "md",
      className,
      isLoading = false,
      isPending: isPendingProp,
      isDisabled = false,
      href,
      target,
      rel,
      onPress,
      onClick,
      ...props
    } = propsFromArgs;

    // Map isLoading to HeroUI's isPending
    const isPending = isLoading || isPendingProp || false;
    const disabled = isDisabled || isPending;

    // Compute spinner size based on button size
    const spinnerSize = size === "lg" ? "md" : "sm";

    // Render prop content - HeroUI v3 pattern for loading state.
    // Spinner uses `color="current"` so it inherits the button's text color
    // (e.g. white on primary) — HeroUI's default `accent` color blends into
    // the primary button background and disappears, especially when the
    // button is both disabled and loading.
    const renderContent = (state: { isPending?: boolean }) => (
      <>
        {state.isPending && <Spinner color="current" size={spinnerSize} />}
        {children}
      </>
    );

    // Compute button className using tv() variants
    const buttonClassName = trovioButtonVariants({
      variant,
      size,
      fullWidth,
      tone: color,
      className,
    });

    // Presentation-only: pass interaction handlers straight through. Analytics
    // are the CONSUMER's concern — wrap onPress/onClick in your app to track.
    const wrappedOnPress = (evt: unknown) => {
      onPress?.(evt as any);
    };

    const wrappedOnClick = (evt: unknown) => {
      onClick?.(evt as any);
    };

    // Render a plain anchor with button styling when href is provided (HeroUI v3
    // no longer has asChild). No framework router dependency — the consumer can
    // wrap this in their <Link> if they need client-side nav.
    if (href) {
      return (
        <a
          aria-disabled={disabled}
          className={buttonClassName}
          data-pending={isPending ? "" : undefined}
          href={href}
          rel={rel}
          style={{ pointerEvents: disabled ? "none" : undefined }}
          target={target}
          onClick={(e) => {
            if (disabled) e.preventDefault();
            else wrappedOnClick(e);
          }}
        >
          {renderContent({ isPending })}
        </a>
      );
    }

    // Standard button without link
    return (
      <Button
        {...props}
        className={buttonClassName}
        isDisabled={disabled}
        isPending={isPending}
        onClick={wrappedOnClick as any}
        onPress={wrappedOnPress as any}
      >
        {renderContent({ isPending })}
      </Button>
    );
  },
);

TrovioButton.displayName = "TrovioButton";
