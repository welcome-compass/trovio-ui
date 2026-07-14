export { brandColors, darkColors, designTokens, fonts, lightColors, radius, semanticColors, shadow, typeScale } from './chunk-SMQSL3K6.js';
import React2, { forwardRef, useRef, useState, useCallback, useImperativeHandle, useEffect, Fragment as Fragment$1 } from 'react';
import { buttonVariants, Button, Spinner, Chip, Input, TextArea, Modal, Checkbox, Switch, Skeleton, Card, Select, ListBox } from '@heroui/react';
import { tv } from 'tailwind-variants';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import clsx32 from 'clsx';
import { PiCaretLeftBold, PiCaretRightBold, PiLockKeyDuotone, PiYoutubeLogoDuotone, PiTiktokLogoDuotone, PiInstagramLogoDuotone, PiGlobeDuotone, PiQuotesFill, PiCheckBold, PiBookmarkSimpleFill, PiBookmarkSimple, PiPencilSimple, PiPlay, PiPause, PiTrash, PiXBold, PiSparkleDuotone, PiHandshakeDuotone, PiIdentificationCardDuotone, PiLockSimpleDuotone, PiArrowRightBold, PiSparkleFill, PiArrowLeftBold, PiPlayFill, PiUsersThreeDuotone, PiTrendUpDuotone, PiEyeDuotone, PiMagnetDuotone, PiWaveSineDuotone, PiTargetDuotone, PiStarDuotone, PiHeartDuotone, PiClockDuotone, PiLightningDuotone } from 'react-icons/pi';
import { createPortal } from 'react-dom';

var trovioButtonVariants = tv({
  extend: buttonVariants,
  base: "font-bold rounded-2xl transition-all duration-200",
  variants: {
    fullWidth: {
      true: "w-full"
    },
    tone: {
      blue: "",
      yellow: ""
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
      custom: "shadow-sm hover:shadow-md active:scale-[0.98] bg-transparent hover:bg-transparent active:bg-transparent data-[hover=true]:bg-transparent data-[pressed=true]:bg-transparent before:bg-transparent after:bg-transparent data-[hover=true]:before:bg-transparent data-[pressed=true]:before:bg-transparent data-[hover=true]:after:bg-transparent data-[pressed=true]:after:bg-transparent"
    },
    size: {
      sm: "h-10 px-4 text-sm",
      md: "h-11 px-5 text-base",
      lg: "h-12 px-6 text-base"
    }
  },
  compoundVariants: [
    // Primary variants
    {
      variant: "primary",
      tone: "blue",
      class: "bg-trovio-primary text-white hover:bg-trovio-primary-dark hover:shadow-md active:scale-[0.98] dark:bg-trovio-primary dark:text-white dark:hover:bg-trovio-primary/90"
    },
    {
      variant: "primary",
      tone: "yellow",
      class: "bg-trovio-primary-light text-trovio-primary-dark hover:brightness-95 hover:shadow-md active:scale-[0.98] dark:bg-trovio-primary-light dark:text-trovio-primary-dark dark:hover:brightness-95"
    },
    // Secondary variants
    {
      variant: "secondary",
      tone: "blue",
      class: "bg-white border-trovio-light-border text-trovio-light-text hover:border-trovio-primary hover:bg-[rgba(102,102,255,0.05)] active:scale-[0.98] dark:bg-trovio-dark-surface dark:border-trovio-dark-border dark:text-trovio-dark-text dark:hover:border-trovio-primary dark:hover:bg-[rgba(102,102,255,0.1)]"
    },
    {
      variant: "secondary",
      tone: "yellow",
      class: "bg-white border-trovio-primary-light text-trovio-primary-dark hover:bg-[rgba(225,225,40,0.1)] active:scale-[0.98] dark:bg-trovio-dark-surface dark:border-trovio-primary-light dark:text-trovio-primary-light dark:hover:bg-[rgba(225,225,40,0.15)]"
    },
    // Tertiary variants
    {
      variant: "tertiary",
      tone: "blue",
      class: "text-trovio-primary hover:underline active:scale-[0.98] dark:text-trovio-primary dark:hover:underline"
    },
    {
      variant: "tertiary",
      tone: "yellow",
      class: "text-trovio-primary-dark hover:underline active:scale-[0.98] dark:text-trovio-primary-light dark:hover:underline"
    },
    // Dashed variants
    {
      variant: "dashed",
      tone: "blue",
      class: "border-trovio-light-border text-trovio-light-text hover:border-trovio-primary hover:bg-[rgba(102,102,255,0.05)] active:scale-[0.98] dark:border-trovio-dark-border dark:text-trovio-dark-text dark:hover:border-trovio-primary dark:hover:bg-[rgba(102,102,255,0.1)]"
    },
    {
      variant: "dashed",
      tone: "yellow",
      class: "border-trovio-primary-light text-trovio-primary-dark hover:bg-[rgba(225,225,40,0.1)] active:scale-[0.98] dark:border-trovio-primary-light dark:text-trovio-primary-light dark:hover:bg-[rgba(225,225,40,0.15)]"
    }
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    tone: "blue"
  }
});
var TrovioButton = forwardRef(
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
    const isPending = isLoading || isPendingProp || false;
    const disabled = isDisabled || isPending;
    const spinnerSize = size === "lg" ? "md" : "sm";
    const renderContent = (state) => /* @__PURE__ */ jsxs(Fragment, { children: [
      state.isPending && /* @__PURE__ */ jsx(Spinner, { color: "current", size: spinnerSize }),
      children
    ] });
    const buttonClassName = trovioButtonVariants({
      variant,
      size,
      fullWidth,
      tone: color,
      className
    });
    const wrappedOnPress = (evt) => {
      onPress?.(evt);
    };
    const wrappedOnClick = (evt) => {
      onClick?.(evt);
    };
    if (href) {
      return /* @__PURE__ */ jsx(
        "a",
        {
          "aria-disabled": disabled,
          className: buttonClassName,
          "data-pending": isPending ? "" : void 0,
          href,
          rel,
          style: { pointerEvents: disabled ? "none" : void 0 },
          target,
          onClick: (e) => {
            if (disabled) e.preventDefault();
            else wrappedOnClick(e);
          },
          children: renderContent({ isPending })
        }
      );
    }
    return /* @__PURE__ */ jsx(
      Button,
      {
        ...props,
        className: buttonClassName,
        isDisabled: disabled,
        isPending,
        onClick: wrappedOnClick,
        onPress: wrappedOnPress,
        children: renderContent({ isPending })
      }
    );
  }
);
TrovioButton.displayName = "TrovioButton";
var trovioBadgeVariants = tv({
  base: "text-xs font-medium",
  variants: {
    status: {
      published: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
      success: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
      draft: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300",
      warning: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300",
      archived: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300",
      error: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300",
      info: "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300"
    }
  },
  defaultVariants: {
    status: "info"
  }
});
var statusToChipColor = {
  published: "success",
  success: "success",
  draft: "warning",
  warning: "warning",
  archived: "danger",
  error: "danger",
  info: "accent"
};
var TrovioBadge = ({
  children,
  status,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    Chip,
    {
      ...props,
      className: trovioBadgeVariants({ status, className }),
      color: statusToChipColor[status],
      variant: "soft",
      children
    }
  );
};
var trovioInputVariants = tv({
  base: [
    "w-full",
    "bg-[rgba(102,102,255,0.1)] dark:bg-[rgba(102,102,255,0.15)]",
    "hover:bg-[rgba(102,102,255,0.15)] dark:hover:bg-[rgba(102,102,255,0.2)]",
    "rounded-xl border-2 border-transparent",
    "shadow-sm",
    "transition-all duration-200",
    "focus-within:border-trovio-primary focus-within:shadow-md focus-within:ring-2 focus-within:ring-trovio-primary/20",
    "text-trovio-light-text dark:text-trovio-dark-text",
    "placeholder:text-trovio-light-text-muted/60 dark:placeholder:text-trovio-dark-text-muted/60"
  ],
  variants: {
    size: {
      sm: "h-10 px-3 py-2 text-sm",
      md: "h-12 px-4 py-3 text-base",
      lg: "h-14 px-5 py-3.5 text-base"
    },
    variant: {
      default: "",
      dynamic: "min-h-12"
    },
    hasError: {
      true: "!border-trovio-secondary-2 !bg-red-50 dark:!bg-[rgba(255,51,102,0.1)] focus-within:!ring-trovio-secondary-2/20"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "default"
  }
});
var TrovioInput = ({
  label,
  helperText,
  error,
  size = "md",
  variant = "default",
  className,
  ...props
}) => {
  const baseClassName = trovioInputVariants({
    size,
    variant,
    hasError: !!error
  });
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    label && /* @__PURE__ */ jsx("label", { className: "text-left block text-xs font-semibold text-trovio-light-text-muted dark:text-trovio-dark-text-muted mb-1.5", children: label }),
    /* @__PURE__ */ jsx(
      Input,
      {
        ...props,
        className: typeof className === "function" ? (renderProps) => trovioInputVariants({
          size,
          variant,
          hasError: !!error,
          className: [baseClassName, className(renderProps)].filter(Boolean).join(" ")
        }) : trovioInputVariants({
          size,
          variant,
          hasError: !!error,
          className: [baseClassName, className].filter(Boolean).join(" ")
        })
      }
    ),
    error ? /* @__PURE__ */ jsx("p", { className: "text-left mt-1 text-xs text-trovio-secondary-2", children: error }) : helperText ? /* @__PURE__ */ jsx("p", { className: "text-left mt-1 text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: helperText }) : null
  ] });
};
var trovioTextAreaVariants = tv({
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
    "min-h-20 p-3"
  ],
  variants: {
    variant: {
      default: "",
      dynamic: "min-h-32"
    },
    hasError: {
      true: "!border-trovio-secondary-2 !bg-red-50 dark:!bg-[rgba(255,51,102,0.1)] focus-within:!ring-trovio-secondary-2/20"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var TrovioTextArea = ({
  label,
  helperText,
  error,
  variant = "default",
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    label && /* @__PURE__ */ jsx("label", { className: "text-left block text-xs font-semibold text-trovio-light-text-muted dark:text-trovio-dark-text-muted mb-1.5", children: label }),
    /* @__PURE__ */ jsx(
      TextArea,
      {
        ...props,
        className: trovioTextAreaVariants({
          variant,
          hasError: !!error,
          className
        })
      }
    ),
    error ? /* @__PURE__ */ jsx("p", { className: "text-left mt-1 text-xs text-trovio-secondary-2", children: error }) : helperText ? /* @__PURE__ */ jsx("p", { className: "text-left mt-1 text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: helperText }) : null
  ] });
};
var sizeClasses = {
  sm: "sm:min-w-sm sm:max-w-sm",
  md: "sm:min-w-md sm:max-w-md",
  lg: "sm:min-w-lg sm:max-w-lg"
};
var TrovioModal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  isDismissable = true,
  isKeyboardDismissDisabled = false,
  scroll = "inside",
  placement = "auto",
  hideHeader = false
}) => {
  return /* @__PURE__ */ jsx(
    Modal.Backdrop,
    {
      isDismissable,
      isKeyboardDismissDisabled,
      isOpen,
      variant: "blur",
      onOpenChange: (nextIsOpen) => {
        if (!nextIsOpen) onClose();
      },
      children: /* @__PURE__ */ jsx(Modal.Container, { placement, scroll, children: /* @__PURE__ */ jsxs(
        Modal.Dialog,
        {
          "aria-label": title,
          className: `${sizeClasses[size]} ${hideHeader ? "!p-0 !gap-0 [&_[data-slot=modal-close-trigger]]:hidden [&_[data-slot=modal-body]]:!p-0 [&_[data-slot=modal-header]]:!hidden [&_[data-slot=modal-footer]]:!px-5 [&_[data-slot=modal-footer]]:!pb-5" : ""}`,
          children: [
            /* @__PURE__ */ jsx(Modal.CloseTrigger, {}),
            !hideHeader && /* @__PURE__ */ jsx(Modal.Header, { children: /* @__PURE__ */ jsx(Modal.Heading, { className: "text-xl font-bold text-trovio-light-text dark:text-trovio-dark-text", children: title }) }),
            /* @__PURE__ */ jsx(Modal.Body, { className: "text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children }),
            footer && /* @__PURE__ */ jsx(Modal.Footer, { className: "flex justify-end gap-3", children: footer })
          ]
        }
      ) })
    }
  );
};
function TrovioCheckbox({
  checked,
  onChange,
  className,
  size = "md",
  isDisabled = false,
  ...ariaProps
}) {
  const wrappedOnChange = (isChecked) => {
    onChange(isChecked);
  };
  const controlSize = size === "lg" ? "size-7" : "size-6";
  const checkmarkSize = size === "lg" ? "size-4" : "size-3.5";
  return /* @__PURE__ */ jsx(
    Checkbox,
    {
      ...ariaProps,
      className: clsx32(
        // Avoid extra spacing when used as an icon in a flex row
        "shrink-0 gap-0 group",
        className
      ),
      isDisabled,
      isSelected: checked,
      onChange: wrappedOnChange,
      children: /* @__PURE__ */ jsx(
        Checkbox.Control,
        {
          className: clsx32(
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
            "group-data-[selected]:before:bg-trovio-primary group-aria-[checked=true]:before:bg-trovio-primary"
          ),
          children: /* @__PURE__ */ jsx(
            Checkbox.Indicator,
            {
              className: clsx32(
                "flex items-center justify-center",
                // keep the indicator container sized consistently
                `[&_[data-slot='checkbox-default-indicator--checkmark']]:${checkmarkSize}`
              ),
              children: ({ isSelected }) => /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": "true",
                  className: clsx32(
                    checkmarkSize,
                    isSelected ? "text-white" : "text-trovio-light-text-muted/40 dark:text-trovio-dark-text-muted/40"
                  ),
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M20 6L9 17l-5-5",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "3"
                    }
                  )
                }
              )
            }
          )
        }
      )
    }
  );
}
var TrovioSwitch = ({
  label,
  helperText,
  className,
  checked,
  defaultChecked,
  onChange,
  isDisabled,
  name,
  id
}) => {
  const wrappedOnChange = (isChecked) => {
    onChange?.(isChecked);
  };
  const switchElement = /* @__PURE__ */ jsx(
    Switch,
    {
      className: clsx32("group", !label ? className : void 0),
      defaultSelected: checked === void 0 ? defaultChecked : void 0,
      id,
      isDisabled,
      isSelected: checked,
      name,
      size: "lg",
      onChange: wrappedOnChange,
      children: /* @__PURE__ */ jsx(
        Switch.Control,
        {
          className: clsx32(
            // Default state
            "bg-trovio-light-border dark:bg-trovio-dark-border",
            // Hover state
            "hover:bg-trovio-light-border/80 dark:hover:bg-trovio-dark-border/80",
            // Selected state - use Trovio primary color
            "group-data-[selected=true]:bg-trovio-primary",
            "group-data-[selected=true]:hover:bg-trovio-primary/90"
          ),
          children: /* @__PURE__ */ jsx(Switch.Thumb, {})
        }
      )
    }
  );
  if (!label) {
    return switchElement;
  }
  return /* @__PURE__ */ jsxs("div", { className: clsx32("flex items-center gap-4", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-trovio-light-text dark:text-trovio-dark-text", children: label }),
      helperText && /* @__PURE__ */ jsx("p", { className: "text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: helperText })
    ] }),
    switchElement
  ] });
};
var TrovioSpinner = ({
  size = "md",
  className
}) => {
  const sizeMap = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "lg"
  };
  return /* @__PURE__ */ jsx(
    Spinner,
    {
      className: clsx32("text-trovio-primary", className),
      color: "current",
      size: sizeMap[size] || "md"
    }
  );
};
var TrovioSkeleton = ({
  isLoaded = false,
  disableAnimation = false,
  className = "",
  children,
  usePrimaryColor = true
}) => {
  if (isLoaded) {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
  return /* @__PURE__ */ jsx(
    Skeleton,
    {
      animationType: disableAnimation ? "none" : "pulse",
      className: clsx32(
        className,
        usePrimaryColor && "bg-trovio-primary/15 dark:bg-trovio-primary/15"
      )
    }
  );
};
function TrovioProgressBar({
  value,
  max,
  color = "var(--color-trovio-primary)",
  size = "md",
  className,
  label
}) {
  const percentage = max > 0 ? Math.min(value / max * 100, 100) : 0;
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-label": label,
      "aria-valuemax": max,
      "aria-valuemin": 0,
      "aria-valuenow": value,
      className: clsx32(
        "w-full rounded-full bg-trovio-light-border dark:bg-trovio-dark-border",
        size === "sm" ? "h-1.5" : "h-2.5",
        className
      ),
      role: "progressbar",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: clsx32(
            "rounded-full transition-all duration-500 ease-out",
            size === "sm" ? "h-1.5" : "h-2.5"
          ),
          style: {
            width: `${percentage}%`,
            backgroundColor: color
          }
        }
      )
    }
  );
}
function WidgetCard({
  children,
  className,
  noPadding = false,
  minHeight = "auto",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Card,
    {
      className: clsx32("w-full overflow-hidden", !noPadding && "p-6", className),
      style: { minHeight },
      ...props,
      children
    }
  );
}
function SectionLabel({
  children,
  tone = "muted",
  className
}) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: clsx32(
        "text-micro uppercase",
        tone === "primary" ? "text-trovio-primary" : "text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
        className
      ),
      children
    }
  );
}
function SectionHeading({
  children,
  divider = false,
  hero = false,
  className
}) {
  const Tag = hero ? "h1" : "h2";
  return /* @__PURE__ */ jsx(
    Tag,
    {
      className: clsx32(
        "text-trovio-light-text dark:text-trovio-dark-text",
        hero ? "text-hero" : "text-section",
        divider && "border-b border-trovio-light-border pb-3 dark:border-trovio-dark-border",
        className
      ),
      children
    }
  );
}
function LockChip({ label }) {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-trovio-light-bg px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-trovio-light-text-muted dark:bg-trovio-dark-bg dark:text-trovio-dark-text-muted", children: [
    /* @__PURE__ */ jsx(PiLockKeyDuotone, { size: 12 }),
    label ?? "Locked"
  ] });
}
var PLATFORM_ICONS = {
  instagram: PiInstagramLogoDuotone,
  tiktok: PiTiktokLogoDuotone,
  youtube: PiYoutubeLogoDuotone
};
function PlatformIcon({
  platform,
  className,
  size = 16
}) {
  const Icon = PLATFORM_ICONS[platform.toLowerCase()] ?? PiGlobeDuotone;
  return /* @__PURE__ */ jsx(Icon, { "aria-label": platform, className, size });
}
var PLATFORM_LABELS = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube"
};
function platformLabel(platform) {
  const key = platform.toLowerCase();
  return PLATFORM_LABELS[key] ?? platform.charAt(0).toUpperCase() + platform.slice(1);
}
function initialsOf(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  imageUrl,
  name = "",
  size = 32,
  className
}) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(imageUrl) && !errored;
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: clsx32(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-trovio-light-bg font-bold text-trovio-light-text dark:bg-trovio-dark-bg dark:text-trovio-dark-text",
        className
      ),
      style: { width: size, height: size },
      children: showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsx(
          "img",
          {
            alt: name ? `${name} avatar` : "",
            className: "h-full w-full object-cover",
            src: imageUrl,
            onError: () => setErrored(true)
          }
        )
      ) : /* @__PURE__ */ jsx("span", { style: { fontSize: Math.round(size * 0.4) }, children: initialsOf(name) })
    }
  );
}
function RingGauge({
  value,
  size = 56,
  stroke = 5,
  color = "var(--color-trovio-primary)",
  trackClassName = "text-trovio-light-border dark:text-trovio-dark-border",
  className,
  children
}) {
  const clamped = Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = clamped * c;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx32("relative inline-flex shrink-0", className),
      style: { width: size, height: size },
      children: [
        /* @__PURE__ */ jsxs("svg", { height: size, width: size, children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              className: trackClassName,
              cx: size / 2,
              cy: size / 2,
              fill: "none",
              r,
              stroke: "currentColor",
              strokeWidth: stroke
            }
          ),
          /* @__PURE__ */ jsx(
            "circle",
            {
              cx: size / 2,
              cy: size / 2,
              fill: "none",
              r,
              stroke: color,
              strokeDasharray: `${dash} ${c - dash}`,
              strokeLinecap: "round",
              strokeWidth: stroke,
              transform: `rotate(-90 ${size / 2} ${size / 2})`
            }
          )
        ] }),
        children ? /* @__PURE__ */ jsx("span", { className: "absolute inset-0 flex items-center justify-center text-trovio-primary", children }) : null
      ]
    }
  );
}
function Sparkline({
  points,
  width = 90,
  height = 34,
  strokeWidth = 2,
  color = "var(--color-trovio-primary)",
  className
}) {
  if (!points || points.length < 2) return null;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const pad = strokeWidth;
  const innerW = width - pad * 2;
  const innerH = height - pad * 2;
  const coords = points.map((p, i) => {
    const x = pad + i / (points.length - 1) * innerW;
    const y = pad + innerH - (p - min) / span * innerH;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": "true",
      className: clsx32("shrink-0", className),
      height,
      viewBox: `0 0 ${width} ${height}`,
      width,
      children: /* @__PURE__ */ jsx(
        "polyline",
        {
          fill: "none",
          points: coords.join(" "),
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth
        }
      )
    }
  );
}
function SegmentedToggle({
  options,
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsx("div", { className: clsx32("flex flex-wrap gap-2", className), role: "tablist", children: options.map((opt) => {
    const active = opt.value === value;
    return /* @__PURE__ */ jsx(
      "button",
      {
        "aria-selected": active,
        className: clsx32(
          "rounded-full border px-3 py-1.5 text-caption font-semibold transition-colors",
          active ? "border-trovio-primary bg-trovio-primary text-white" : "border-trovio-light-border text-trovio-light-text-muted hover:border-trovio-primary/50 dark:border-trovio-dark-border dark:text-trovio-dark-text-muted"
        ),
        role: "tab",
        type: "button",
        onClick: () => onChange(opt.value),
        children: opt.label
      },
      opt.value
    );
  }) });
}
function TrovioSelect({
  options,
  selectedKey,
  onSelectionChange,
  placeholder = "Select\u2026",
  label,
  helperText,
  ariaLabel,
  isDisabled,
  size = "md",
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: clsx32("flex flex-col gap-1.5", className), children: [
    label ? /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: label }) : null,
    /* @__PURE__ */ jsxs(
      Select,
      {
        "aria-label": ariaLabel ?? label ?? placeholder,
        className: size === "sm" ? "text-caption" : void 0,
        isDisabled,
        placeholder,
        selectedKey: selectedKey ?? null,
        onSelectionChange: (k) => onSelectionChange?.(k ? String(k) : ""),
        children: [
          /* @__PURE__ */ jsxs(Select.Trigger, { children: [
            /* @__PURE__ */ jsx(Select.Value, {}),
            /* @__PURE__ */ jsx(Select.Indicator, {})
          ] }),
          /* @__PURE__ */ jsx(Select.Popover, { children: /* @__PURE__ */ jsx(ListBox, { children: options.map((o) => /* @__PURE__ */ jsxs(
            ListBox.Item,
            {
              id: o.key,
              textValue: o.textValue ?? (typeof o.label === "string" ? o.label : o.key),
              children: [
                o.label,
                /* @__PURE__ */ jsx(ListBox.ItemIndicator, {})
              ]
            },
            o.key
          )) }) })
        ]
      }
    ),
    helperText ? /* @__PURE__ */ jsx("p", { className: "text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: helperText }) : null
  ] });
}
function Timeline({ items, className }) {
  return /* @__PURE__ */ jsx(
    "ol",
    {
      className: clsx32(
        "relative ml-1 border-l border-trovio-light-border pl-4 dark:border-trovio-dark-border",
        className
      ),
      children: items.map((it, i) => /* @__PURE__ */ jsxs("li", { className: "relative pb-3.5 last:pb-0", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute -left-5 top-1 h-2 w-2 rounded-full",
            style: { background: it.color ?? "var(--color-trovio-primary)" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-caption font-medium text-trovio-light-text dark:text-trovio-dark-text", children: it.title }),
        it.meta ? /* @__PURE__ */ jsx("div", { className: "text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: it.meta }) : null
      ] }, i))
    }
  );
}
var DEFAULT_SOURCE_WIDTH = 390;
function MediaKitPreview({
  url,
  colors,
  badge,
  caption,
  aspect = 5 / 6,
  sourceWidth = DEFAULT_SOURCE_WIDTH,
  className
}) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const height = width > 0 ? Math.round(width / aspect) : 0;
  const scale = width > 0 ? width / sourceWidth : 0.25;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: clsx32(
        "relative overflow-hidden rounded-xl border border-trovio-light-border dark:border-trovio-dark-border",
        className
      ),
      style: { aspectRatio: String(aspect) },
      children: [
        url ? /* @__PURE__ */ jsx(
          "iframe",
          {
            className: "pointer-events-none absolute left-0 top-0 origin-top-left",
            src: url,
            style: {
              width: sourceWidth,
              height: height > 0 ? Math.ceil(height / scale) : "100%",
              transform: `scale(${scale})`
            },
            tabIndex: -1,
            title: "Media kit preview"
          }
        ) : /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: colors?.[0] ? colors[0] : "linear-gradient(150deg, var(--color-trovio-primary-dark) 0%, var(--color-trovio-primary) 80%)"
            }
          }
        ),
        badge ? /* @__PURE__ */ jsx("span", { className: "absolute right-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[0.6875rem] font-bold text-trovio-light-text", children: badge }) : null,
        caption ? /* @__PURE__ */ jsx("span", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 py-2 text-caption font-semibold text-white", children: caption }) : null
      ]
    }
  );
}
function ClampText({
  children,
  lines = 3,
  moreLabel = "More",
  lessLabel = "Less",
  className,
  toggleClassName
}) {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children, lines, expanded]);
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        style: expanded ? void 0 : {
          display: "-webkit-box",
          WebkitLineClamp: lines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        },
        children
      }
    ),
    (overflows || expanded) && /* @__PURE__ */ jsx(
      "button",
      {
        className: clsx32(
          "mt-1 cursor-pointer text-caption font-semibold text-trovio-primary",
          toggleClassName
        ),
        type: "button",
        onClick: (e) => {
          e.stopPropagation();
          setExpanded((v) => !v);
        },
        children: expanded ? lessLabel : moreLabel
      }
    )
  ] });
}
var LINE_WIDTHS = ["100%", "92%", "66%"];
function GeneratingBlock({
  message,
  lines = 3,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: clsx32("space-y-4", className), children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "space-y-2.5", children: Array.from({ length: lines }, (_, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-4 animate-pulse rounded bg-trovio-light-text/10 dark:bg-trovio-dark-text/10",
        style: { width: LINE_WIDTHS[i % LINE_WIDTHS.length] }
      },
      i
    )) }),
    message && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "size-1.5 shrink-0 animate-pulse rounded-full bg-trovio-primary" }),
      /* @__PURE__ */ jsx("p", { className: "text-caption text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: message })
    ] })
  ] });
}
var OnboardingBrandHeader = ({
  logo,
  left,
  right,
  className = ""
}) => {
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `w-full border-b border-trovio-light-border dark:border-trovio-dark-border ${className}`,
      children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 items-center justify-center px-4", children: [
        left ? /* @__PURE__ */ jsx("div", { className: "absolute left-4", children: left }) : null,
        logo,
        right ? /* @__PURE__ */ jsx("div", { className: "absolute right-4", children: right }) : null
      ] })
    }
  );
};
var BrandLogo = ({
  lightSrc,
  darkSrc,
  alt = "",
  className = ""
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("img", { alt, className: `block dark:hidden ${className}`, src: lightSrc }),
    /* @__PURE__ */ jsx("img", { alt, className: `hidden dark:block ${className}`, src: darkSrc })
  ] });
};
var GoalCard = React2.forwardRef(
  function GoalCard2({ rank, icon, title, description, iconGradient, isDragging = false, className, ...rest }, ref) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: clsx32(
          "relative select-none rounded-2xl bg-white shadow-sm dark:bg-trovio-dark-surface",
          "border border-trovio-light-border dark:border-trovio-dark-border",
          "transition-shadow duration-200",
          isDragging && "shadow-lg ring-2 ring-trovio-primary ring-opacity-50",
          className
        ),
        ...rest,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -left-2 -top-2 z-10 flex size-8 items-center justify-center rounded-full border-2 border-white bg-trovio-primary shadow-md dark:border-trovio-dark-bg", children: /* @__PURE__ */ jsx("span", { className: "select-none text-sm font-black text-white", children: rank }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "-my-4 -ml-4 flex flex-col gap-1 px-3 py-4 opacity-70", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "size-1.5 rounded-full bg-trovio-light-border dark:bg-trovio-dark-border"
              },
              i
            )) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex size-12 select-none items-center justify-center rounded-2xl shadow-sm",
                style: { background: iconGradient },
                children: /* @__PURE__ */ jsx("div", { className: "pointer-events-none text-2xl text-white", children: icon })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1 select-none", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text", children: title }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs leading-snug text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: description })
            ] })
          ] })
        ]
      }
    );
  }
);
function QuoteCard({
  quote,
  attribution,
  source,
  eyebrow,
  ctaLabel,
  ctaHref,
  onCtaClick,
  className
}) {
  const hasCta = ctaLabel != null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx32(
        "rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-4 dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          PiQuotesFill,
          {
            "aria-hidden": "true",
            className: "mb-2 text-trovio-primary/40",
            size: 20
          }
        ),
        /* @__PURE__ */ jsx("blockquote", { className: "text-sm font-medium leading-relaxed text-trovio-light-text dark:text-trovio-dark-text", children: quote }),
        (attribution != null || source != null) && /* @__PURE__ */ jsxs(SectionLabel, { className: "mt-3", children: [
          attribution,
          attribution != null && source != null ? " \xB7 " : null,
          source
        ] }),
        hasCta ? /* @__PURE__ */ jsx("div", { className: "mt-3", children: ctaHref ? /* @__PURE__ */ jsx(
          "a",
          {
            className: "inline-flex items-center text-sm font-semibold text-trovio-primary hover:underline",
            href: ctaHref,
            rel: "noopener noreferrer",
            target: "_blank",
            onClick: onCtaClick,
            children: ctaLabel
          }
        ) : /* @__PURE__ */ jsx(
          "button",
          {
            className: "inline-flex items-center text-sm font-semibold text-trovio-primary hover:underline",
            type: "button",
            onClick: onCtaClick,
            children: ctaLabel
          }
        ) }) : null
      ]
    }
  );
}
var arrowClass = "absolute top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg border border-trovio-light-border bg-trovio-light-surface text-trovio-light-text-muted shadow-sm transition-colors hover:bg-trovio-light-bg hover:text-trovio-light-text disabled:pointer-events-none disabled:opacity-30 dark:border-trovio-dark-border dark:bg-trovio-dark-surface dark:text-trovio-dark-text-muted dark:hover:bg-trovio-dark-bg";
var Carousel = forwardRef(function Carousel2({
  children,
  gap = 14,
  fadeColor = "var(--background)",
  showArrows = true,
  showProgress = true,
  chromeActive = true,
  ariaLabel,
  onScrollStateChange,
  className
}, ref) {
  const railRef = useRef(null);
  const [state, setState] = useState({
    canLeft: false,
    canRight: false,
    scrollable: false
  });
  const [thumb, setThumb] = useState({ width: 0, offset: 0 });
  const update = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    if (!chromeActive) {
      const next2 = { canLeft: false, canRight: false, scrollable: false };
      setState(next2);
      setThumb({ width: 0, offset: 0 });
      onScrollStateChange?.(next2);
      return;
    }
    const max = rail.scrollWidth - rail.clientWidth;
    const x = rail.scrollLeft;
    const scrollable = max > 4;
    const canLeft = scrollable && x > 2;
    const canRight = scrollable && x < max - 2;
    const next = { canLeft, canRight, scrollable };
    setState(next);
    onScrollStateChange?.(next);
    if (scrollable) {
      const width = Math.max(rail.clientWidth / rail.scrollWidth * 100, 12);
      const prog = max > 0 ? x / max : 0;
      setThumb({ width, offset: prog * (100 - width) });
    } else {
      setThumb({ width: 0, offset: 0 });
    }
  }, [chromeActive, onScrollStateChange]);
  const scrollByDir = useCallback((dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({
      left: dir * rail.clientWidth * 0.85,
      behavior: reduce ? "auto" : "smooth"
    });
  }, []);
  useImperativeHandle(
    ref,
    () => ({ scrollPrev: () => scrollByDir(-1), scrollNext: () => scrollByDir(1) }),
    [scrollByDir]
  );
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => update());
    ro.observe(rail);
    update();
    return () => {
      rail.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [update]);
  useEffect(() => {
    update();
  }, [children, update]);
  const showChrome = chromeActive && state.scrollable;
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-11 transition-opacity duration-200",
          style: {
            background: `linear-gradient(90deg, ${fadeColor} 20%, transparent)`,
            opacity: showChrome && state.canLeft ? 1 : 0
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-11 transition-opacity duration-200",
          style: {
            background: `linear-gradient(270deg, ${fadeColor} 20%, transparent)`,
            opacity: showChrome && state.canRight ? 1 : 0
          }
        }
      ),
      showArrows && showChrome && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Scroll left",
            className: clsx32(arrowClass, "left-1"),
            disabled: !state.canLeft,
            type: "button",
            onClick: () => scrollByDir(-1),
            children: /* @__PURE__ */ jsx(PiCaretLeftBold, { size: 14 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Scroll right",
            className: clsx32(arrowClass, "right-1"),
            disabled: !state.canRight,
            type: "button",
            onClick: () => scrollByDir(1),
            children: /* @__PURE__ */ jsx(PiCaretRightBold, { size: 14 })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: railRef,
          "aria-label": ariaLabel,
          className: "flex overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          role: "group",
          style: { gap, scrollSnapType: "x proximity", paddingTop: 8, paddingBottom: 8 },
          children: React2.Children.map(children, (child) => /* @__PURE__ */ jsx("div", { className: "shrink-0", style: { scrollSnapAlign: "start" }, children: child }))
        }
      )
    ] }),
    showProgress && showChrome && /* @__PURE__ */ jsx("div", { className: "mt-0.5 h-1 overflow-hidden rounded-full bg-trovio-light-border dark:bg-trovio-dark-border", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-full rounded-full bg-trovio-light-text-muted/30 transition-[width,margin] duration-100 dark:bg-trovio-dark-text-muted/30",
        style: { width: `${thumb.width}%`, marginLeft: `${thumb.offset}%` }
      }
    ) })
  ] });
});

// src/utils/format-number.ts
function formatCompactNumber(n) {
  if (n == null || !Number.isFinite(n)) return "\u2014";
  const abs = Math.abs(n);
  if (abs < 1e3) return String(Math.round(n));
  const units = [
    { value: 1e9, suffix: "B" },
    { value: 1e6, suffix: "M" },
    { value: 1e3, suffix: "K" }
  ];
  for (const { value, suffix } of units) {
    if (abs >= value) {
      const scaled = (n / value).toFixed(1).replace(/\.0$/, "");
      return `${scaled}${suffix}`;
    }
  }
  return String(Math.round(n));
}
function PostThumbnail({
  post,
  onOpen
}) {
  const viewsLabel = post.views != null ? `${formatCompactNumber(post.views)} views` : void 0;
  const title = [post.caption, viewsLabel].filter(Boolean).join(" \u2014 ") || void 0;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      "aria-label": post.caption ?? "Open post",
      className: "group relative aspect-square overflow-hidden rounded-lg bg-trovio-light-bg ring-1 ring-black/5 transition-transform duration-100 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-trovio-primary dark:bg-trovio-dark-bg",
      title,
      type: "button",
      onClick: onOpen,
      children: [
        post.thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          /* @__PURE__ */ jsx(
            "img",
            {
              alt: "",
              className: "h-full w-full object-cover",
              src: post.thumbnailUrl
            }
          )
        ) : null,
        post.isVideo && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 grid place-items-center text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]", children: /* @__PURE__ */ jsx(PiPlayFill, { size: 13 }) }),
        post.views != null && /* @__PURE__ */ jsx("span", { className: "absolute bottom-1 left-1.5 text-[10px] font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]", children: formatCompactNumber(post.views) })
      ]
    }
  );
}
function TopPostsStrip({
  posts,
  onOpenPost,
  columns = 3,
  className
}) {
  if (!posts || posts.length === 0) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx32("grid gap-2", className),
      style: { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` },
      children: posts.slice(0, columns).map((post, i) => /* @__PURE__ */ jsx(
        PostThumbnail,
        {
          post,
          onOpen: onOpenPost ? () => onOpenPost(post, i) : void 0
        },
        i
      ))
    }
  );
}
function CreatorCard({
  name,
  handle,
  oneLiner,
  oneLinerLines = 3,
  avatarUrl,
  topPosts,
  topPostsLabel = "Top posts \xB7 this theme",
  onOpenPost,
  saved = false,
  onSave,
  selected = false,
  onUseInCampaign,
  width = 300,
  className
}) {
  const showPosts = Boolean(topPosts && topPosts.length > 0);
  const showActions = Boolean(onSave || onUseInCampaign);
  return /* @__PURE__ */ jsxs(
    "article",
    {
      "aria-label": name,
      className: clsx32(
        "relative flex flex-col gap-3 rounded-2xl border bg-trovio-light-surface p-4 shadow-sm transition-all duration-150 dark:bg-trovio-dark-surface",
        selected ? "border-trovio-primary ring-1 ring-trovio-primary" : "border-trovio-light-border hover:-translate-y-0.5 hover:border-trovio-primary/40 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-trovio-dark-border",
        className
      ),
      style: { width },
      children: [
        selected && /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute right-3 top-3 grid h-[22px] w-[22px] place-items-center rounded-full bg-trovio-primary text-white shadow-sm",
            children: /* @__PURE__ */ jsx(PiCheckBold, { size: 12 })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Avatar, { imageUrl: avatarUrl, name, size: 44 }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("div", { className: "truncate text-caption font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: name }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: [
              "@",
              handle
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-caption", style: { minHeight: `calc(${oneLinerLines} * 1.5em)` }, children: /* @__PURE__ */ jsx(
          ClampText,
          {
            className: "leading-normal text-trovio-light-text dark:text-trovio-dark-text",
            lines: oneLinerLines,
            children: oneLiner
          }
        ) }),
        showPosts && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx(SectionLabel, { children: topPostsLabel }),
          /* @__PURE__ */ jsx(TopPostsStrip, { onOpenPost, posts: topPosts })
        ] }),
        showActions && /* @__PURE__ */ jsxs("div", { className: "mt-0.5 flex gap-2", children: [
          onSave && /* @__PURE__ */ jsxs(
            TrovioButton,
            {
              "aria-label": saved ? "Saved" : "Save creator",
              className: clsx32(
                "flex-none gap-1.5",
                saved && "border-trovio-primary/40 bg-trovio-primary/10 text-trovio-primary"
              ),
              size: "sm",
              variant: "secondary",
              onClick: onSave,
              children: [
                saved ? /* @__PURE__ */ jsx(PiBookmarkSimpleFill, { size: 14 }) : /* @__PURE__ */ jsx(PiBookmarkSimple, { size: 14 }),
                saved ? "Saved" : "Save"
              ]
            }
          ),
          onUseInCampaign && /* @__PURE__ */ jsx(
            TrovioButton,
            {
              className: "flex-1",
              size: "sm",
              variant: "primary",
              onClick: onUseInCampaign,
              children: selected ? "In list \u2713" : "Use in Campaign"
            }
          )
        ] })
      ]
    }
  );
}
var STATUS_BADGE = {
  active: { status: "success", label: "Active" },
  paused: { status: "warning", label: "Paused" },
  archived: { status: "archived", label: "Archived" },
  rejected: { status: "error", label: "Rejected" }
};
function ConversationCard({
  name,
  description,
  status,
  descriptionLines = 2,
  onEdit,
  onDelete,
  onTogglePause,
  isBusy = false,
  children,
  className
}) {
  const badge = status ? STATUS_BADGE[status] : null;
  const canTogglePause = Boolean(onTogglePause) && (status === "active" || status === "paused");
  const paused = status === "paused";
  const showActions = Boolean(onEdit || onDelete || canTogglePause);
  return /* @__PURE__ */ jsxs(
    "article",
    {
      "aria-label": name,
      className: clsx32(
        "flex flex-col gap-3 rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-5 shadow-sm transition-colors dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "min-w-0 flex-1 text-base font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: name }),
          badge && /* @__PURE__ */ jsx(TrovioBadge, { className: "shrink-0", status: badge.status, children: badge.label })
        ] }),
        description && /* @__PURE__ */ jsx(
          ClampText,
          {
            className: "text-caption leading-normal text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
            lines: descriptionLines,
            children: description
          }
        ),
        children,
        showActions && /* @__PURE__ */ jsxs("div", { className: "mt-0.5 flex flex-wrap gap-2", children: [
          onEdit && /* @__PURE__ */ jsxs(
            TrovioButton,
            {
              className: "gap-1.5",
              isDisabled: isBusy,
              size: "sm",
              variant: "secondary",
              onClick: onEdit,
              children: [
                /* @__PURE__ */ jsx(PiPencilSimple, { size: 14 }),
                "Edit"
              ]
            }
          ),
          canTogglePause && /* @__PURE__ */ jsxs(
            TrovioButton,
            {
              className: "gap-1.5",
              isDisabled: isBusy,
              size: "sm",
              variant: "tertiary",
              onClick: onTogglePause,
              children: [
                paused ? /* @__PURE__ */ jsx(PiPlay, { size: 14 }) : /* @__PURE__ */ jsx(PiPause, { size: 14 }),
                paused ? "Resume" : "Pause"
              ]
            }
          ),
          onDelete && /* @__PURE__ */ jsxs(
            TrovioButton,
            {
              "aria-label": "Remove conversation",
              className: "ml-auto gap-1.5 text-trovio-error hover:text-trovio-error",
              isDisabled: isBusy,
              size: "sm",
              variant: "tertiary",
              onClick: onDelete,
              children: [
                /* @__PURE__ */ jsx(PiTrash, { size: 14 }),
                "Remove"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function CreatorCardSkeleton({
  width = 300,
  showPosts = true,
  showActions = true,
  oneLinerLines = 3,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": true,
      className: clsx32(
        "flex flex-col gap-3 rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-4 shadow-sm dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className
      ),
      style: { width },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(TrovioSkeleton, { className: "h-11 w-11 rounded-full" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsx(TrovioSkeleton, { className: "h-3 w-1/2 rounded" }),
            /* @__PURE__ */ jsx(TrovioSkeleton, { className: "h-2.5 w-1/3 rounded" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "text-caption space-y-2",
            style: { minHeight: `calc(${oneLinerLines} * 1.5em)` },
            children: [
              /* @__PURE__ */ jsx(TrovioSkeleton, { className: "h-2.5 w-full rounded" }),
              /* @__PURE__ */ jsx(TrovioSkeleton, { className: "h-2.5 w-[88%] rounded" }),
              /* @__PURE__ */ jsx(TrovioSkeleton, { className: "h-2.5 w-3/5 rounded" })
            ]
          }
        ),
        showPosts && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsx(TrovioSkeleton, { className: "aspect-square rounded-lg" }),
          /* @__PURE__ */ jsx(TrovioSkeleton, { className: "aspect-square rounded-lg" }),
          /* @__PURE__ */ jsx(TrovioSkeleton, { className: "aspect-square rounded-lg" })
        ] }),
        showActions && /* @__PURE__ */ jsxs("div", { className: "mt-0.5 flex gap-2", children: [
          /* @__PURE__ */ jsx(TrovioSkeleton, { className: "h-9 w-20 rounded-2xl" }),
          /* @__PURE__ */ jsx(TrovioSkeleton, { className: "h-9 flex-1 rounded-2xl" })
        ] })
      ]
    }
  );
}
var DefaultLink = ({ href, className, children }) => /* @__PURE__ */ jsx("a", { className, href, children });
function Breadcrumbs({ items, linkComponent, className }) {
  const Link = linkComponent ?? DefaultLink;
  return /* @__PURE__ */ jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: clsx32("flex items-center gap-1.5 text-caption", className),
      children: items.map((item, i) => {
        const isLast = i === items.length - 1;
        return /* @__PURE__ */ jsxs(Fragment$1, { children: [
          i > 0 ? /* @__PURE__ */ jsx("span", { className: "text-trovio-light-text-muted/50 dark:text-trovio-dark-text-muted/50", children: "/" }) : null,
          item.href && !isLast ? /* @__PURE__ */ jsx(
            Link,
            {
              className: "font-medium text-trovio-light-text-muted transition-colors hover:text-trovio-light-text dark:text-trovio-dark-text-muted dark:hover:text-trovio-dark-text",
              href: item.href,
              children: item.label
            }
          ) : /* @__PURE__ */ jsx(
            "span",
            {
              "aria-current": isLast ? "page" : void 0,
              className: isLast ? "font-medium text-trovio-light-text dark:text-trovio-dark-text" : "text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
              children: item.label
            }
          )
        ] }, i);
      })
    }
  );
}
function BackButton({
  label = "Back",
  onClick,
  href,
  linkComponent,
  className
}) {
  const cls = clsx32(
    "inline-flex items-center gap-1.5 text-caption font-medium text-trovio-light-text-muted transition-colors hover:text-trovio-light-text dark:text-trovio-dark-text-muted dark:hover:text-trovio-dark-text",
    className
  );
  const inner = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PiArrowLeftBold, { className: "h-3 w-3" }),
    label
  ] });
  if (href) {
    const Link = linkComponent ?? "a";
    return /* @__PURE__ */ jsx(Link, { className: cls, href, children: inner });
  }
  return /* @__PURE__ */ jsx("button", { className: cls, type: "button", onClick, children: inner });
}
function initialOf(name) {
  return (name?.trim()?.[0] ?? "Y").toUpperCase();
}
function EmailMessage({
  subject,
  body,
  fromName,
  fromEmail,
  fromAvatarUrl,
  to,
  tag,
  actions,
  highlighted,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx32(
        "overflow-hidden rounded-xl border bg-trovio-light-surface dark:bg-trovio-dark-surface",
        highlighted ? "border-trovio-primary shadow-[0_0_0_3px_rgba(102,102,255,0.08)]" : "border-trovio-light-border dark:border-trovio-dark-border",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 border-b border-trovio-light-border px-4 py-3 dark:border-trovio-dark-border", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-trovio-primary/12 text-caption font-semibold text-trovio-primary", children: fromAvatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            /* @__PURE__ */ jsx("img", { alt: "", className: "h-full w-full object-cover", src: fromAvatarUrl })
          ) : initialOf(fromName) }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            tag ? /* @__PURE__ */ jsx("div", { className: "mb-0.5", children: tag }) : null,
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline gap-x-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-caption font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: fromName ?? "You" }),
              fromEmail ? /* @__PURE__ */ jsxs("span", { className: "text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: [
                "<",
                fromEmail,
                ">"
              ] }) : null
            ] }),
            to ? /* @__PURE__ */ jsxs("div", { className: "text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: [
              "to ",
              to
            ] }) : null
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-3.5", children: [
          subject ? /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: subject }) : null,
          /* @__PURE__ */ jsx("p", { className: "whitespace-pre-wrap text-sm leading-relaxed text-trovio-light-text/90 dark:text-trovio-dark-text/90", children: body })
        ] }),
        actions ? /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-2 border-t border-trovio-light-border px-4 py-2.5 dark:border-trovio-dark-border", children: actions }) : null
      ]
    }
  );
}
var DefaultLink2 = ({ href, className, children, ...rest }) => /* @__PURE__ */ jsx("a", { className, href, ...rest, children });
function BrandCard({
  brandName,
  description,
  logoUrl,
  descriptionLines = 2,
  href,
  linkComponent,
  onDismiss,
  dismissLabel,
  className
}) {
  const Link = linkComponent ?? DefaultLink2;
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = !!logoUrl && !logoFailed;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx32(
        "relative flex flex-col gap-2 rounded-lg border border-trovio-light-border bg-trovio-light-surface p-3 transition-colors hover:border-trovio-primary/40 dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className
      ),
      children: [
        href ? /* @__PURE__ */ jsx(
          Link,
          {
            "aria-label": `Open ${brandName}`,
            className: "absolute inset-0 z-0 rounded-lg",
            href
          }
        ) : null,
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-trovio-light-bg text-micro font-bold text-trovio-light-text-muted dark:bg-trovio-dark-bg dark:text-trovio-dark-text-muted", children: showLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            /* @__PURE__ */ jsx(
              "img",
              {
                alt: "",
                className: "h-full w-full object-cover",
                src: logoUrl,
                onError: () => setLogoFailed(true)
              }
            )
          ) : brandName.slice(0, 2) }),
          /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 truncate pt-1 text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: brandName }),
          onDismiss ? /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": dismissLabel ?? `Dismiss ${brandName}`,
              className: "relative z-[1] -mr-1 -mt-0.5 rounded-md p-1 text-trovio-light-text-muted transition-colors hover:bg-trovio-light-bg hover:text-trovio-light-text dark:text-trovio-dark-text-muted dark:hover:bg-trovio-dark-bg dark:hover:text-trovio-dark-text",
              type: "button",
              onClick: onDismiss,
              children: /* @__PURE__ */ jsx(PiXBold, { className: "h-3 w-3" })
            }
          ) : null
        ] }),
        description ? /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-caption leading-snug text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
            style: {
              display: "-webkit-box",
              WebkitLineClamp: descriptionLines,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            },
            children: description
          }
        ) : null
      ]
    }
  );
}
var SIZE_CLASS = {
  display: "text-display",
  hero: "text-hero",
  section: "text-section",
  "body-lg": "text-body-lg",
  body: "text-body"
};
var WEIGHT_CLASS = {
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold"
};
function HeadlineBlock({
  children,
  size = "section",
  weight,
  cta,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: clsx32(
          SIZE_CLASS[size],
          weight ? WEIGHT_CLASS[weight] : null,
          "text-trovio-light-text dark:text-trovio-dark-text"
        ),
        children
      }
    ),
    cta ? /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(TrovioButton, { size: "md", variant: "primary", onPress: cta.onClick, children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
      cta.icon,
      cta.label
    ] }) }) }) : null
  ] });
}
function TitledPanel({
  title,
  titleSize = "hero",
  titleWeight,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs("section", { className: clsx32("flex flex-col gap-4", className), children: [
    title != null ? /* @__PURE__ */ jsx(HeadlineBlock, { size: titleSize, weight: titleWeight, children: title }) : null,
    /* @__PURE__ */ jsx("div", { children })
  ] });
}
function LinkCard({
  eyebrow,
  title,
  imageUrl,
  href,
  newTab = true,
  onClick,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      className: clsx32(
        "block overflow-hidden rounded-2xl border border-trovio-light-border dark:border-trovio-dark-border",
        className
      ),
      href,
      rel: newTab ? "noopener noreferrer" : void 0,
      target: newTab ? "_blank" : void 0,
      onClick,
      children: [
        imageUrl ? /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-44 w-full bg-trovio-light-bg bg-cover bg-center grayscale",
            style: { backgroundImage: `url(${imageUrl})` }
          }
        ) : null,
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-3", children: [
          eyebrow != null ? /* @__PURE__ */ jsx(SectionLabel, { children: eyebrow }) : null,
          /* @__PURE__ */ jsx("div", { className: "mt-0.5 font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: title })
        ] })
      ]
    }
  );
}
function JourneyStepper({
  steps,
  onCurrentClick,
  note
}) {
  if (!steps.length) return null;
  const lineClass = (done) => done ? "bg-trovio-primary" : "bg-trovio-light-border dark:bg-trovio-dark-border";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-start", children: steps.map((step, idx) => {
      const isFirst = idx === 0;
      const isLast = idx === steps.length - 1;
      const leftDone = idx > 0 && steps[idx - 1].status === "completed";
      const rightDone = step.status === "completed";
      const isLoading = step.status === "current" && Boolean(step.loading);
      const circleBase = "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors sm:h-10 sm:w-10 sm:text-sm";
      const circle = clsx32(
        circleBase,
        step.status === "completed" && "bg-trovio-primary text-white",
        // Loading current step drops the static border — the spinning arc
        // overlay below provides the outline so the two don't double up.
        step.status === "current" && !isLoading && "border-2 border-trovio-primary text-trovio-primary",
        step.status === "current" && isLoading && "text-trovio-primary",
        step.status === "upcoming" && "border border-trovio-light-border text-trovio-light-text-muted dark:border-trovio-dark-border dark:text-trovio-dark-text-muted"
      );
      const spinner = isLoading ? /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": "true",
          className: "pointer-events-none absolute inset-0 text-trovio-primary",
          children: /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "h-full w-full animate-spin",
              fill: "none",
              viewBox: "0 0 40 40",
              children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    cx: "20",
                    cy: "20",
                    r: "18",
                    stroke: "currentColor",
                    strokeOpacity: "0.25",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    cx: "20",
                    cy: "20",
                    r: "18",
                    stroke: "currentColor",
                    strokeDasharray: "28 150",
                    strokeLinecap: "round",
                    strokeWidth: "2"
                  }
                )
              ]
            }
          )
        }
      ) : null;
      const inner = /* @__PURE__ */ jsxs(Fragment, { children: [
        spinner,
        /* @__PURE__ */ jsx("span", { className: "relative", children: idx + 1 })
      ] });
      const node = step.status === "current" && onCurrentClick ? /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": `${step.label}, ${isLoading ? "in progress, " : ""}tap to activate`,
          className: clsx32(circle, "cursor-pointer"),
          type: "button",
          onClick: onCurrentClick,
          children: inner
        }
      ) : /* @__PURE__ */ jsx(
        "div",
        {
          "aria-label": `${step.label}, ${isLoading ? "in progress" : step.status}`,
          className: circle,
          role: "img",
          children: inner
        }
      );
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex min-w-0 flex-1 flex-col items-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: clsx32(
                    "h-px flex-1",
                    isFirst ? "bg-transparent" : lineClass(leftDone)
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "mx-1.5 shrink-0", children: node }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: clsx32(
                    "h-px flex-1",
                    isLast ? "bg-transparent" : lineClass(rightDone)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: clsx32(
                  "mt-2 px-0.5 text-center text-[11px] leading-tight sm:text-sm",
                  step.status === "upcoming" ? "text-trovio-light-text-muted dark:text-trovio-dark-text-muted" : "font-medium text-trovio-light-text dark:text-trovio-dark-text"
                ),
                children: step.label
              }
            )
          ]
        },
        step.label + idx
      );
    }) }),
    note ? /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-trovio-primary/10 px-3 py-1 text-caption font-medium text-trovio-primary dark:bg-trovio-primary/15", children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          "aria-hidden": "true",
          className: "h-3.5 w-3.5",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx("path", { d: "M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" })
        }
      ),
      note
    ] }) }) : null
  ] });
}
function PillarChips({ pillars }) {
  if (!pillars || pillars.length === 0) return null;
  return /* @__PURE__ */ jsx("ul", { className: "space-y-3.5", children: pillars.map((pillar) => /* @__PURE__ */ jsxs(
    "li",
    {
      className: "flex items-center gap-3 text-base text-trovio-light-text dark:text-trovio-dark-text",
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": true,
            className: "h-2 w-2 shrink-0 rounded-full bg-trovio-light-text-muted/40 dark:bg-trovio-dark-text-muted/40"
          }
        ),
        pillar.name
      ]
    },
    pillar.id
  )) });
}
function StatStrip({
  followers,
  posts,
  platforms,
  className
}) {
  const parts = [];
  if (followers != null) {
    parts.push(
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: formatCompactNumber(followers) }),
        " ",
        "followers"
      ] }, "followers")
    );
  }
  if (posts != null) {
    parts.push(
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: formatCompactNumber(posts) }),
        " ",
        "posts"
      ] }, "posts")
    );
  }
  if (platforms && platforms.length > 0) {
    parts.push(
      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1.5", children: platforms.map((p) => /* @__PURE__ */ jsx(PlatformIcon, { platform: p, size: 15 }, p)) }, "platforms")
    );
  }
  if (parts.length === 0) return null;
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: `flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted ${className ?? ""}`,
      children: parts.map((part, idx) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
        idx > 0 && /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "\xB7" }),
        part
      ] }, idx))
    }
  );
}
function initials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function PortraitHero({
  imageUrl,
  name,
  role,
  handles,
  action
}) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(imageUrl) && !errored;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-trovio-primary/30 to-trovio-primary-dark/30 lg:aspect-[3/4]", children: [
      showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsx(
          "img",
          {
            alt: `${name} portrait`,
            className: "absolute inset-0 h-full w-full object-cover",
            src: imageUrl,
            onError: () => setErrored(true)
          }
        )
      ) : /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-6xl font-light text-white/90", children: initials(name) }) }),
      action && /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-3 z-10", children: action }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-trovio-light-surface via-trovio-light-surface/70 to-transparent dark:from-trovio-dark-bg dark:via-trovio-dark-bg/70" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative -mt-10 px-1", children: [
      /* @__PURE__ */ jsx("p", { className: "-ml-1 text-display text-trovio-light-text dark:text-trovio-dark-text", children: name }),
      role && /* @__PURE__ */ jsx("p", { className: "mt-3 text-micro uppercase text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: role }),
      handles && handles.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-x-5 gap-y-1.5", children: handles.map((h) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "inline-flex items-center gap-1.5 text-caption text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
          children: [
            /* @__PURE__ */ jsx(PlatformIcon, { platform: h.platform, size: 16 }),
            "@",
            h.username
          ]
        },
        h.platform + h.username
      )) })
    ] })
  ] });
}
var VARIANT_META = {
  media_kit: {
    title: "Media Kit",
    value: "One link that makes brands take you seriously.",
    Icon: PiIdentificationCardDuotone
  },
  brand_matcher: {
    title: "Brand Matcher",
    value: "Real brands matched to your pillars, after you activate.",
    Icon: PiHandshakeDuotone
  },
  post_analyzer: {
    title: "Post Analyzer",
    value: "Score your next post before you publish.",
    Icon: PiSparkleDuotone
  }
};
var PREVIEW_SHELL = "rounded-lg border border-trovio-light-border bg-trovio-light-bg p-3 dark:border-trovio-dark-border dark:bg-trovio-dark-bg";
var META_TEXT = "text-[11px] text-trovio-light-text-muted dark:text-trovio-dark-text-muted";
function renderEmphasis(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map(
    (part, i) => part.startsWith("**") && part.endsWith("**") ? /* @__PURE__ */ jsx(
      "strong",
      {
        className: "font-semibold text-trovio-light-text dark:text-trovio-dark-text",
        children: part.slice(2, -2)
      },
      i
    ) : part
  );
}
function PlaceholderTile({ className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `bg-gradient-to-br from-trovio-primary/15 to-trovio-primary/5 ${className ?? ""}`
    }
  );
}
function MediaKitPreview2({
  portraitUrl,
  name,
  followers,
  platforms,
  engagementRate,
  avgViews
}) {
  const metrics = [
    {
      label: "Followers",
      value: followers != null ? formatCompactNumber(followers) : "\u2014",
      Icon: PiUsersThreeDuotone
    },
    {
      label: "Eng. rate",
      value: engagementRate != null ? `${(engagementRate * 100).toFixed(1)}%` : "5.2%",
      Icon: PiTrendUpDuotone
    },
    {
      label: "Avg. views",
      value: avgViews != null ? formatCompactNumber(avgViews) : "8.4K",
      Icon: PiEyeDuotone
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-lg border border-trovio-light-border bg-trovio-light-bg dark:border-trovio-dark-border dark:bg-trovio-dark-bg", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-gradient-to-br from-trovio-primary/[0.07] to-trovio-primary/[0.03] px-4 py-4", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": "true",
          className: "pointer-events-none absolute -right-3 top-1/2 h-20 w-36 -translate-y-1/2 text-trovio-primary/30",
          style: {
            backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "13px 13px",
            maskImage: "linear-gradient(to left, black 35%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 35%, transparent 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-3.5", children: [
        /* @__PURE__ */ jsx(Avatar, { imageUrl: portraitUrl, name: name ?? "", size: 56 }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx(SectionLabel, { tone: "primary", children: "Media Kit" }),
          name ? /* @__PURE__ */ jsx("p", { className: "truncate text-lg font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text", children: name }) : null,
          platforms && platforms.length > 0 && /* @__PURE__ */ jsx("span", { className: "mt-1 flex items-center gap-1.5 text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: platforms.map((p) => /* @__PURE__ */ jsx(PlatformIcon, { platform: p, size: 14 }, p)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 divide-x divide-trovio-light-border dark:divide-trovio-dark-border", children: metrics.map((m) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-3", children: [
      /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-trovio-primary/10 text-trovio-primary", children: /* @__PURE__ */ jsx(m.Icon, { size: 17 }) }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text", children: m.value }),
        /* @__PURE__ */ jsx("p", { className: `truncate ${META_TEXT}`, children: m.label })
      ] })
    ] }, m.label)) })
  ] });
}
var BRAND_MATCHER_ROWS = [
  {
    Tile: PiStarDuotone,
    Badge: PiTrendUpDuotone,
    title: "Practical. Helpful. Relevant.",
    description: "You share real solutions that make a difference. We match you with brands that do too.",
    badgeLabel: "High alignment"
  },
  {
    Tile: PiUsersThreeDuotone,
    Badge: PiHeartDuotone,
    title: "Built for Trust & Authenticity",
    description: "We look beyond keywords to find partners who fit your voice and values.",
    badgeLabel: "Audience-first"
  },
  {
    Tile: PiLightningDuotone,
    Badge: PiClockDuotone,
    title: "Opportunities Worth Your Time",
    description: "Get matched with brands that are ready, relevant, and a great fit.",
    badgeLabel: "Save time"
  }
];
function BrandMatcherPreview() {
  return /* @__PURE__ */ jsx("div", { className: "divide-y divide-trovio-light-border overflow-hidden rounded-lg border border-trovio-light-border bg-trovio-light-bg dark:divide-trovio-dark-border dark:border-trovio-dark-border dark:bg-trovio-dark-bg", children: BRAND_MATCHER_ROWS.map((row) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3", children: [
    /* @__PURE__ */ jsx("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-trovio-primary/10 text-trovio-primary", children: /* @__PURE__ */ jsx(row.Tile, { size: 22 }) }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: row.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs leading-snug text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: row.description })
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "flex shrink-0 items-center gap-1.5 rounded-lg bg-trovio-primary/10 px-2.5 py-1 text-trovio-primary", children: [
      /* @__PURE__ */ jsx(row.Badge, { className: "shrink-0", size: 13 }),
      /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap text-xs font-medium", children: row.badgeLabel })
    ] })
  ] }, row.title)) });
}
function ScoreRing({ score, size = 56 }) {
  return /* @__PURE__ */ jsx(RingGauge, { size, value: score / 100, children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-center leading-none", children: [
    /* @__PURE__ */ jsx("span", { className: "text-base font-bold text-trovio-light-text dark:text-trovio-dark-text", children: score }),
    /* @__PURE__ */ jsx("span", { className: "mt-0.5 text-[9px] font-medium text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: "/100" })
  ] }) });
}
var POST_ANALYZER_BENCHMARK = 80;
var POST_ANALYZER_METRICS = [
  {
    Icon: PiMagnetDuotone,
    title: "Hook",
    subtitle: "Grab attention early.",
    pct: 86
  },
  {
    Icon: PiWaveSineDuotone,
    title: "Pacing",
    subtitle: "Keep momentum going.",
    pct: 72
  },
  {
    Icon: PiTargetDuotone,
    title: "Pillar fit",
    subtitle: "Aligns with your core topics.",
    pct: 64
  }
];
function PostAnalyzerPreview({
  thumbnailUrl
}) {
  return /* @__PURE__ */ jsxs("div", { className: PREVIEW_SHELL, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3.5", children: [
      /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] w-16 shrink-0 overflow-hidden rounded-lg", children: thumbnailUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsx(
          "img",
          {
            alt: "",
            className: "absolute inset-0 h-full w-full object-cover",
            src: thumbnailUrl
          }
        )
      ) : /* @__PURE__ */ jsx(PlaceholderTile, { className: "h-full w-full" }) }),
      /* @__PURE__ */ jsx(ScoreRing, { score: 92 }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md bg-trovio-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-trovio-primary", children: "Overall score" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm font-bold leading-snug text-trovio-light-text dark:text-trovio-dark-text", children: "Strong hook \u2014 tighten the middle." }),
        /* @__PURE__ */ jsx("p", { className: `mt-1 leading-snug ${META_TEXT}`, children: "Great start \u2014 your post is well-structured. A few tweaks will make it even stronger." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-1 border-t border-trovio-light-border pt-3 dark:border-trovio-dark-border", children: POST_ANALYZER_METRICS.map((m) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-trovio-primary/10 text-trovio-primary", children: /* @__PURE__ */ jsx(m.Icon, { size: 18 }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-24 shrink-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold leading-tight text-trovio-light-text dark:text-trovio-dark-text", children: m.title }),
        /* @__PURE__ */ jsx("p", { className: `line-clamp-2 leading-snug ${META_TEXT}`, children: m.subtitle })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative flex-1", children: /* @__PURE__ */ jsxs("div", { className: "relative h-1.5 w-full rounded-full bg-trovio-light-border dark:bg-trovio-dark-border", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-trovio-primary/60 to-trovio-primary",
            style: { width: `${m.pct}%` }
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "absolute top-1/2 h-3.5 -translate-x-1/2 -translate-y-1/2 border-l border-dashed border-trovio-light-text-muted/50 dark:border-trovio-dark-text-muted/50",
            style: { left: `${POST_ANALYZER_BENCHMARK}%` }
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "absolute top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-trovio-primary bg-white shadow-sm dark:bg-trovio-dark-surface",
            style: { left: `${m.pct}%` }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-9 shrink-0 text-right", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-bold leading-none text-trovio-light-text dark:text-trovio-dark-text", children: m.pct }),
        /* @__PURE__ */ jsx("p", { className: `mt-0.5 ${META_TEXT}`, children: "/100" })
      ] })
    ] }, m.title)) })
  ] });
}
function LockedFeatureCardSkeleton({ variant }) {
  const meta = VARIANT_META[variant];
  return /* @__PURE__ */ jsxs("div", { className: "w-full rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-4 dark:border-trovio-dark-border dark:bg-trovio-dark-surface", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        meta.Icon,
        {
          className: "shrink-0 text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
          size: 22
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "flex-1 text-base font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: meta.title }),
      /* @__PURE__ */ jsx(
        PiLockSimpleDuotone,
        {
          className: "shrink-0 text-trovio-light-text-muted/60 dark:text-trovio-dark-text-muted/60",
          size: 18
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-3 space-y-1.5", children: [
      /* @__PURE__ */ jsx("div", { className: "h-3 w-full animate-pulse rounded bg-trovio-light-text/10 dark:bg-trovio-dark-text/10" }),
      /* @__PURE__ */ jsx("div", { className: "h-3 w-2/3 animate-pulse rounded bg-trovio-light-text/10 dark:bg-trovio-dark-text/10" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-24 w-full animate-pulse rounded-lg bg-trovio-light-text/5 dark:bg-trovio-dark-text/5" })
  ] });
}
function LockedFeatureCard({
  item,
  portraitUrl,
  creatorName,
  onActivate,
  ctaLabel,
  loading
}) {
  const meta = VARIANT_META[item.variant];
  const description = item.description?.trim() || meta.value;
  const cta = ctaLabel?.trim();
  if (loading) return /* @__PURE__ */ jsx(LockedFeatureCardSkeleton, { variant: item.variant });
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: "group w-full rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-4 text-left transition-colors hover:border-trovio-light-text-muted/40 dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
      type: "button",
      onClick: onActivate,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            meta.Icon,
            {
              className: "shrink-0 text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
              size: 22
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "flex-1 text-base font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: meta.title }),
          /* @__PURE__ */ jsx(
            PiLockSimpleDuotone,
            {
              className: "shrink-0 text-trovio-light-text-muted/60 dark:text-trovio-dark-text-muted/60",
              size: 18
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm leading-relaxed text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: renderEmphasis(description) }),
        item.variant === "media_kit" && /* @__PURE__ */ jsx(
          MediaKitPreview2,
          {
            avgViews: item.stats?.avgViews,
            engagementRate: item.stats?.engagementRate,
            followers: item.stats?.followers,
            name: creatorName,
            platforms: item.stats?.platforms,
            portraitUrl
          }
        ),
        item.variant === "post_analyzer" && /* @__PURE__ */ jsx(PostAnalyzerPreview, { thumbnailUrl: item.sampleThumbnailUrl }),
        item.variant === "brand_matcher" && /* @__PURE__ */ jsx(BrandMatcherPreview, {}),
        cta ? /* @__PURE__ */ jsx("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-semibold text-trovio-primary", children: [
          cta,
          /* @__PURE__ */ jsx(
            PiArrowRightBold,
            {
              className: "transition-transform group-hover:translate-x-0.5",
              size: 13
            }
          )
        ] }) }) : null
      ]
    }
  );
}
function Drawer({
  isOpen,
  onClose,
  title,
  eyebrow,
  headerExtra,
  footer,
  children
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);
  if (!isOpen || typeof document === "undefined") return null;
  return createPortal(
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[60]", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Close",
          className: "absolute inset-0 bg-trovio-light-text/30 backdrop-blur-[1px] dark:bg-black/50",
          type: "button",
          onClick: onClose
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: clsx32(
            "absolute inset-y-0 right-0 flex w-full flex-col bg-trovio-light-surface shadow-2xl dark:bg-trovio-dark-surface",
            "sm:max-w-[480px]"
          ),
          role: "dialog",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "border-b border-trovio-light-border px-6 py-5 dark:border-trovio-dark-border", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  eyebrow ? /* @__PURE__ */ jsx(SectionLabel, { children: eyebrow }) : null,
                  /* @__PURE__ */ jsx("div", { className: "text-section mt-0.5 text-trovio-light-text dark:text-trovio-dark-text", children: title })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    "aria-label": "Close",
                    className: "mt-1 shrink-0 text-trovio-light-text-muted hover:text-trovio-light-text dark:text-trovio-dark-text-muted",
                    type: "button",
                    onClick: onClose,
                    children: /* @__PURE__ */ jsx(PiXBold, { className: "h-5 w-5" })
                  }
                )
              ] }),
              headerExtra ? /* @__PURE__ */ jsx("div", { className: "mt-4", children: headerExtra }) : null
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-auto px-6 py-5", children }),
            footer ? /* @__PURE__ */ jsx("div", { className: "border-t border-trovio-light-border px-6 py-4 dark:border-trovio-dark-border", children: footer }) : null
          ]
        }
      )
    ] }),
    document.body
  );
}
function CourseCallout({
  eyebrow,
  title,
  description,
  imageUrl,
  media,
  priceLabel,
  originalPriceLabel,
  discountLabel,
  ctaLabel,
  ctaHref,
  onCtaClick,
  locked = false,
  className
}) {
  const hasPrice = priceLabel != null || originalPriceLabel != null || discountLabel != null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx32(
        "overflow-hidden rounded-2xl border border-trovio-light-border bg-trovio-light-surface dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className
      ),
      children: [
        media ? /* @__PURE__ */ jsx("div", { className: "w-full", children: media }) : imageUrl ? (
          // Plain <img> keeps the library framework-agnostic (no next/image dep).
          // eslint-disable-next-line @next/next/no-img-element
          /* @__PURE__ */ jsx(
            "img",
            {
              alt: "",
              className: "h-44 w-full object-cover",
              src: imageUrl
            }
          )
        ) : null,
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            eyebrow != null ? /* @__PURE__ */ jsx(SectionLabel, { tone: "primary", children: eyebrow }) : null,
            locked ? /* @__PURE__ */ jsx(
              PiLockSimpleDuotone,
              {
                "aria-hidden": "true",
                className: "ml-auto shrink-0 text-trovio-light-text-muted/60 dark:text-trovio-dark-text-muted/60",
                size: 18
              }
            ) : null
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-1 text-lg font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text", children: title }),
          description != null ? /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: description }) : null,
          hasPrice ? /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
            priceLabel != null ? /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-trovio-light-text dark:text-trovio-dark-text", children: priceLabel }) : null,
            originalPriceLabel != null ? /* @__PURE__ */ jsx("span", { className: "text-sm text-trovio-light-text-muted line-through dark:text-trovio-dark-text-muted", children: originalPriceLabel }) : null,
            discountLabel != null ? /* @__PURE__ */ jsx("span", { className: "rounded-md bg-trovio-primary/10 px-2 py-0.5 text-xs font-semibold text-trovio-primary", children: discountLabel }) : null
          ] }) : null,
          /* @__PURE__ */ jsx(
            TrovioButton,
            {
              className: "mt-4",
              fullWidth: true,
              href: ctaHref,
              rel: ctaHref ? "noopener noreferrer" : void 0,
              target: ctaHref ? "_blank" : void 0,
              onClick: onCtaClick,
              children: ctaLabel
            }
          )
        ] })
      ]
    }
  );
}
function CoursePromoBanner({
  eyebrow,
  headline,
  subhead,
  imageUrl,
  highlights,
  priceLabel,
  originalPriceLabel,
  discountLabel,
  ctaLabel,
  ctaHref,
  onCtaClick,
  className
}) {
  const hasPrice = priceLabel != null || originalPriceLabel != null || discountLabel != null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx32(
        "flex flex-col overflow-hidden rounded-3xl border border-trovio-light-border bg-gradient-to-br from-trovio-primary/10 via-trovio-primary/[0.04] to-transparent dark:border-trovio-dark-border dark:from-trovio-primary/20 dark:via-trovio-primary/[0.06]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row", children: [
          imageUrl ? /* @__PURE__ */ jsx("div", { className: "relative aspect-[5/4] w-full shrink-0 sm:aspect-[16/9] lg:aspect-auto lg:w-[42%]", children: /* @__PURE__ */ jsx(
            "img",
            {
              alt: "",
              className: "absolute inset-0 h-full w-full object-cover object-top",
              src: imageUrl
            }
          ) }) : null,
          /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col justify-center gap-4 px-6 pt-6 lg:px-8 lg:pt-8", children: [
            eyebrow != null ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(PiSparkleFill, { "aria-hidden": "true", className: "text-trovio-primary", size: 15 }),
              /* @__PURE__ */ jsx(SectionLabel, { tone: "primary", children: eyebrow })
            ] }) : null,
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold leading-tight text-trovio-light-text dark:text-trovio-dark-text lg:text-3xl", children: headline }),
              subhead != null ? /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: subhead }) : null
            ] }),
            highlights && highlights.length > 0 ? /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-2", children: highlights.map((h, i) => /* @__PURE__ */ jsx(
              "li",
              {
                className: "rounded-full bg-trovio-primary/10 px-3 py-1 text-xs font-semibold text-trovio-primary",
                children: h
              },
              i
            )) }) : null,
            hasPrice ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              priceLabel != null ? /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-trovio-light-text dark:text-trovio-dark-text", children: priceLabel }) : null,
              originalPriceLabel != null ? /* @__PURE__ */ jsx("span", { className: "text-sm text-trovio-light-text-muted line-through dark:text-trovio-dark-text-muted", children: originalPriceLabel }) : null,
              discountLabel != null ? /* @__PURE__ */ jsx("span", { className: "rounded-md bg-trovio-primary px-2 py-0.5 text-xs font-semibold text-white", children: discountLabel }) : null
            ] }) : null
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 pt-5 lg:px-8 lg:pb-8", children: /* @__PURE__ */ jsx(
          TrovioButton,
          {
            fullWidth: true,
            href: ctaHref,
            rel: ctaHref ? "noopener noreferrer" : void 0,
            size: "lg",
            target: ctaHref ? "_blank" : void 0,
            onClick: onCtaClick,
            children: ctaLabel
          }
        ) })
      ]
    }
  );
}

export { Avatar, BackButton, BrandCard, BrandLogo, Breadcrumbs, Carousel, ClampText, ConversationCard, CourseCallout, CoursePromoBanner, CreatorCard, CreatorCardSkeleton, Drawer, EmailMessage, GeneratingBlock, GoalCard, HeadlineBlock, JourneyStepper, LinkCard, LockChip, LockedFeatureCard, MediaKitPreview, OnboardingBrandHeader, PillarChips, PlatformIcon, PortraitHero, QuoteCard, RingGauge, SectionHeading, SectionLabel, SegmentedToggle, Sparkline, StatStrip, Timeline, TitledPanel, TopPostsStrip, TrovioBadge, TrovioButton, TrovioCheckbox, TrovioInput, TrovioModal, TrovioProgressBar, TrovioSelect, TrovioSkeleton, TrovioSpinner, TrovioSwitch, TrovioTextArea, WidgetCard, formatCompactNumber, platformLabel };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map