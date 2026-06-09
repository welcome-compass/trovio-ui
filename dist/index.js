export { brandColors, darkColors, designTokens, fonts, lightColors, radius, semanticColors, shadow, typeScale } from './chunk-PGLQXXUF.js';
import { forwardRef, useState } from 'react';
import { buttonVariants, Button, Spinner, Chip, Input, TextArea, Modal, Checkbox, Switch, Skeleton, Card } from '@heroui/react';
import { tv } from 'tailwind-variants';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import clsx from 'clsx';
import { PiLockKeyDuotone, PiYoutubeLogoDuotone, PiTiktokLogoDuotone, PiInstagramLogoDuotone, PiGlobeDuotone, PiSparkleDuotone, PiHandshakeDuotone, PiIdentificationCardDuotone, PiLockSimpleDuotone } from 'react-icons/pi';

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
    "placeholder:text-trovio-light-text-muted dark:placeholder:text-trovio-dark-text-muted"
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
    label && /* @__PURE__ */ jsx("label", { className: "text-left block text-xs font-medium text-trovio-primary dark:text-trovio-primary mb-1", children: label }),
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
    "placeholder:text-trovio-light-text-muted dark:placeholder:text-trovio-dark-text-muted",
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
    label && /* @__PURE__ */ jsx("label", { className: "text-left block text-xs font-medium text-trovio-primary dark:text-trovio-primary mb-1", children: label }),
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
      className: clsx(
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
          className: clsx(
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
              className: clsx(
                "flex items-center justify-center",
                // keep the indicator container sized consistently
                `[&_[data-slot='checkbox-default-indicator--checkmark']]:${checkmarkSize}`
              ),
              children: ({ isSelected }) => /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": "true",
                  className: clsx(
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
      className: clsx("group", !label ? className : void 0),
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
          className: clsx(
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
  return /* @__PURE__ */ jsxs("div", { className: clsx("flex items-center gap-4", className), children: [
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
      className: clsx("text-trovio-primary", className),
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
      className: clsx(
        className,
        usePrimaryColor && "bg-trovio-primary/15 dark:bg-trovio-primary/15"
      )
    }
  );
};
function TrovioProgressBar({
  value,
  max,
  color = "#6666FF",
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
      className: clsx(
        "w-full rounded-full bg-trovio-light-border dark:bg-trovio-dark-border",
        size === "sm" ? "h-1.5" : "h-2.5",
        className
      ),
      role: "progressbar",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: clsx(
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
      className: clsx("w-full overflow-hidden", !noPadding && "p-6", className),
      style: { minHeight },
      ...props,
      children
    }
  );
}
function SectionLabel({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: clsx(
        "text-[11px] font-semibold uppercase tracking-wider text-trovio-primary",
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
      className: clsx(
        "tracking-tight text-trovio-light-text dark:text-trovio-dark-text",
        hero ? "text-3xl font-normal md:text-4xl" : "text-2xl font-medium md:text-[26px]",
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
      className: clsx(
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
var VARIANT_CLASS = {
  // Display — portrait / creator name (leading-none so it can overlap a hero)
  display: "text-5xl md:text-6xl font-light leading-none tracking-tight",
  // Body large — emphasized body copy
  "body-lg": "text-base md:text-lg leading-relaxed",
  // Body — findings, descriptions, list items
  body: "text-base leading-relaxed",
  // Caption / meta — stat lines, tool descriptions
  caption: "text-sm"
};
function Text({
  variant = "body",
  as,
  muted = false,
  className,
  children
}) {
  const Tag = as ?? "p";
  return /* @__PURE__ */ jsx(
    Tag,
    {
      className: clsx(
        VARIANT_CLASS[variant],
        muted ? "text-trovio-light-text-muted dark:text-trovio-dark-text-muted" : "text-trovio-light-text dark:text-trovio-dark-text",
        className
      ),
      children
    }
  );
}
function JourneyStepper({
  steps,
  onCurrentClick
}) {
  if (!steps.length) return null;
  return /* @__PURE__ */ jsx("div", { className: "flex items-start", children: steps.map((step, idx) => {
    const showConnector = idx < steps.length - 1;
    const circleBase = "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors";
    const circle = step.status === "completed" ? `${circleBase} bg-trovio-primary text-white` : step.status === "current" ? `${circleBase} border-2 border-trovio-primary text-trovio-primary` : `${circleBase} border border-trovio-light-border text-trovio-light-text-muted dark:border-trovio-dark-border dark:text-trovio-dark-text-muted`;
    const node = step.status === "current" && onCurrentClick ? /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": `${step.label}, tap to activate`,
        className: `${circle} cursor-pointer`,
        type: "button",
        onClick: onCurrentClick,
        children: idx + 1
      }
    ) : /* @__PURE__ */ jsx(
      "div",
      {
        "aria-label": `${step.label}, ${step.status}`,
        className: circle,
        role: "img",
        children: idx + 1
      }
    );
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex items-start ${showConnector ? "flex-1" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex w-24 flex-col items-center gap-2", children: [
            node,
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `text-center text-sm leading-tight ${step.status === "upcoming" ? "text-trovio-light-text-muted dark:text-trovio-dark-text-muted" : "font-medium text-trovio-light-text dark:text-trovio-dark-text"}`,
                children: step.label
              }
            )
          ] }),
          showConnector && /* @__PURE__ */ jsx("div", { className: "mt-5 flex-1", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `h-px w-full ${step.status === "completed" ? "bg-trovio-primary" : "bg-trovio-light-border dark:bg-trovio-dark-border"}`
            }
          ) })
        ]
      },
      step.label + idx
    );
  }) });
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
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-trovio-primary/30 to-trovio-primary-dark/30", children: [
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
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-trovio-light-surface to-transparent dark:from-trovio-dark-bg" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative -mt-10 px-1", children: [
      /* @__PURE__ */ jsx(Text, { variant: "display", children: name }),
      role && /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: role }),
      handles && handles.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-x-5 gap-y-1.5", children: handles.map((h) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "inline-flex items-center gap-1.5 text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
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
function PlaceholderTile({ className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `bg-gradient-to-br from-trovio-primary/15 to-trovio-primary/5 ${className ?? ""}`
    }
  );
}
function MediaKitPreview({
  portraitUrl,
  images,
  followers,
  platforms
}) {
  const tiles = (images ?? []).slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-trovio-light-border bg-trovio-light-bg p-3 dark:border-trovio-dark-border dark:bg-trovio-dark-bg", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(Avatar, { imageUrl: portraitUrl, size: 48 }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        followers != null && /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: [
          formatCompactNumber(followers),
          " followers"
        ] }),
        platforms && platforms.length > 0 && /* @__PURE__ */ jsx("span", { className: "mt-0.5 flex items-center gap-1.5 text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: platforms.map((p) => /* @__PURE__ */ jsx(PlatformIcon, { platform: p, size: 14 }, p)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 grid grid-cols-3 gap-1.5", children: [0, 1, 2].map(
      (i) => tiles[i] ? /* @__PURE__ */ jsx("div", { className: "relative aspect-square overflow-hidden rounded", children: /* @__PURE__ */ jsx(
        "img",
        {
          alt: "",
          className: "absolute inset-0 h-full w-full object-cover",
          src: tiles[i]
        }
      ) }, i) : /* @__PURE__ */ jsx(PlaceholderTile, { className: "aspect-square rounded" }, i)
    ) })
  ] });
}
function PostAnalyzerPreview({
  thumbnailUrl
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border border-trovio-light-border bg-trovio-light-bg p-3 dark:border-trovio-dark-border dark:bg-trovio-dark-bg", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-[9/16] w-16 shrink-0 overflow-hidden rounded", children: [
      thumbnailUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsx(
          "img",
          {
            alt: "",
            className: "absolute inset-0 h-full w-full object-cover",
            src: thumbnailUrl
          }
        )
      ) : /* @__PURE__ */ jsx(PlaceholderTile, { className: "h-full w-full" }),
      /* @__PURE__ */ jsx("span", { className: "absolute bottom-1 left-1 rounded bg-black/70 px-1 text-[10px] font-bold text-white", children: "92" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 space-y-2", children: [
      { label: "Hook", pct: 86 },
      { label: "Pacing", pct: 72 },
      { label: "Pillar fit", pct: 64 }
    ].map((m) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "mb-1 flex justify-between text-[11px] text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: /* @__PURE__ */ jsx("span", { children: m.label }) }),
      /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full overflow-hidden rounded-full bg-trovio-light-border dark:bg-trovio-dark-border", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full rounded-full bg-trovio-primary/70",
          style: { width: `${m.pct}%` }
        }
      ) })
    ] }, m.label)) })
  ] });
}
function BrandMatcherPreview() {
  return /* @__PURE__ */ jsx("div", { className: "space-y-2 rounded-lg border border-trovio-light-border bg-trovio-light-bg p-3 dark:border-trovio-dark-border dark:bg-trovio-dark-bg", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("span", { className: "h-6 w-6 shrink-0 rounded-full bg-trovio-primary/15" }),
    /* @__PURE__ */ jsx(
      "span",
      {
        "aria-hidden": true,
        className: "h-2.5 flex-1 rounded-full bg-trovio-light-text/10 blur-[2px] dark:bg-trovio-dark-text/15",
        style: { maxWidth: `${72 - i * 14}%` }
      }
    )
  ] }, i)) });
}
function LockedFeatureCard({
  item,
  portraitUrl,
  onActivate
}) {
  const meta = VARIANT_META[item.variant];
  const description = item.description?.trim() || meta.value;
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
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm leading-relaxed text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: description }),
        item.variant === "media_kit" && /* @__PURE__ */ jsx(
          MediaKitPreview,
          {
            followers: item.stats?.followers,
            images: item.sampleImages,
            platforms: item.stats?.platforms,
            portraitUrl
          }
        ),
        item.variant === "post_analyzer" && /* @__PURE__ */ jsx(PostAnalyzerPreview, { thumbnailUrl: item.sampleThumbnailUrl }),
        item.variant === "brand_matcher" && /* @__PURE__ */ jsx(BrandMatcherPreview, {})
      ]
    }
  );
}

export { Avatar, JourneyStepper, LockChip, LockedFeatureCard, PillarChips, PlatformIcon, PortraitHero, SectionHeading, SectionLabel, StatStrip, Text, TrovioBadge, TrovioButton, TrovioCheckbox, TrovioInput, TrovioModal, TrovioProgressBar, TrovioSkeleton, TrovioSpinner, TrovioSwitch, TrovioTextArea, WidgetCard, formatCompactNumber, platformLabel };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map