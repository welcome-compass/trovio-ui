'use strict';

var react$1 = require('react');
var react = require('@heroui/react');
var tailwindVariants = require('tailwind-variants');
var jsxRuntime = require('react/jsx-runtime');
var clsx10 = require('clsx');
var pi = require('react-icons/pi');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var clsx10__default = /*#__PURE__*/_interopDefault(clsx10);

// src/components/trovio-button.tsx
var trovioButtonVariants = tailwindVariants.tv({
  extend: react.buttonVariants,
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
var TrovioButton = react$1.forwardRef(
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
    const renderContent = (state) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      state.isPending && /* @__PURE__ */ jsxRuntime.jsx(react.Spinner, { color: "current", size: spinnerSize }),
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
      return /* @__PURE__ */ jsxRuntime.jsx(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      react.Button,
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
var trovioBadgeVariants = tailwindVariants.tv({
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    react.Chip,
    {
      ...props,
      className: trovioBadgeVariants({ status, className }),
      color: statusToChipColor[status],
      variant: "soft",
      children
    }
  );
};
var trovioInputVariants = tailwindVariants.tv({
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-left block text-xs font-medium text-trovio-primary dark:text-trovio-primary mb-1", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      react.Input,
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
    error ? /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-left mt-1 text-xs text-trovio-secondary-2", children: error }) : helperText ? /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-left mt-1 text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: helperText }) : null
  ] });
};
var trovioTextAreaVariants = tailwindVariants.tv({
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-left block text-xs font-medium text-trovio-primary dark:text-trovio-primary mb-1", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      react.TextArea,
      {
        ...props,
        className: trovioTextAreaVariants({
          variant,
          hasError: !!error,
          className
        })
      }
    ),
    error ? /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-left mt-1 text-xs text-trovio-secondary-2", children: error }) : helperText ? /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-left mt-1 text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: helperText }) : null
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    react.Modal.Backdrop,
    {
      isDismissable,
      isKeyboardDismissDisabled,
      isOpen,
      variant: "blur",
      onOpenChange: (nextIsOpen) => {
        if (!nextIsOpen) onClose();
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(react.Modal.Container, { placement, scroll, children: /* @__PURE__ */ jsxRuntime.jsxs(
        react.Modal.Dialog,
        {
          "aria-label": title,
          className: `${sizeClasses[size]} ${hideHeader ? "!p-0 !gap-0 [&_[data-slot=modal-close-trigger]]:hidden [&_[data-slot=modal-body]]:!p-0 [&_[data-slot=modal-header]]:!hidden [&_[data-slot=modal-footer]]:!px-5 [&_[data-slot=modal-footer]]:!pb-5" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(react.Modal.CloseTrigger, {}),
            !hideHeader && /* @__PURE__ */ jsxRuntime.jsx(react.Modal.Header, { children: /* @__PURE__ */ jsxRuntime.jsx(react.Modal.Heading, { className: "text-xl font-bold text-trovio-light-text dark:text-trovio-dark-text", children: title }) }),
            /* @__PURE__ */ jsxRuntime.jsx(react.Modal.Body, { className: "text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children }),
            footer && /* @__PURE__ */ jsxRuntime.jsx(react.Modal.Footer, { className: "flex justify-end gap-3", children: footer })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    react.Checkbox,
    {
      ...ariaProps,
      className: clsx10__default.default(
        // Avoid extra spacing when used as an icon in a flex row
        "shrink-0 gap-0 group",
        className
      ),
      isDisabled,
      isSelected: checked,
      onChange: wrappedOnChange,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        react.Checkbox.Control,
        {
          className: clsx10__default.default(
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
          children: /* @__PURE__ */ jsxRuntime.jsx(
            react.Checkbox.Indicator,
            {
              className: clsx10__default.default(
                "flex items-center justify-center",
                // keep the indicator container sized consistently
                `[&_[data-slot='checkbox-default-indicator--checkmark']]:${checkmarkSize}`
              ),
              children: ({ isSelected }) => /* @__PURE__ */ jsxRuntime.jsx(
                "svg",
                {
                  "aria-hidden": "true",
                  className: clsx10__default.default(
                    checkmarkSize,
                    isSelected ? "text-white" : "text-trovio-light-text-muted/40 dark:text-trovio-dark-text-muted/40"
                  ),
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsxRuntime.jsx(
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
  const switchElement = /* @__PURE__ */ jsxRuntime.jsx(
    react.Switch,
    {
      className: clsx10__default.default("group", !label ? className : void 0),
      defaultSelected: checked === void 0 ? defaultChecked : void 0,
      id,
      isDisabled,
      isSelected: checked,
      name,
      size: "lg",
      onChange: wrappedOnChange,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        react.Switch.Control,
        {
          className: clsx10__default.default(
            // Default state
            "bg-trovio-light-border dark:bg-trovio-dark-border",
            // Hover state
            "hover:bg-trovio-light-border/80 dark:hover:bg-trovio-dark-border/80",
            // Selected state - use Trovio primary color
            "group-data-[selected=true]:bg-trovio-primary",
            "group-data-[selected=true]:hover:bg-trovio-primary/90"
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(react.Switch.Thumb, {})
        }
      )
    }
  );
  if (!label) {
    return switchElement;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: clsx10__default.default("flex items-center gap-4", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium text-trovio-light-text dark:text-trovio-dark-text", children: label }),
      helperText && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: helperText })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    react.Spinner,
    {
      className: clsx10__default.default("text-trovio-primary", className),
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
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    react.Skeleton,
    {
      animationType: disableAnimation ? "none" : "pulse",
      className: clsx10__default.default(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "aria-label": label,
      "aria-valuemax": max,
      "aria-valuemin": 0,
      "aria-valuenow": value,
      className: clsx10__default.default(
        "w-full rounded-full bg-trovio-light-border dark:bg-trovio-dark-border",
        size === "sm" ? "h-1.5" : "h-2.5",
        className
      ),
      role: "progressbar",
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: clsx10__default.default(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    react.Card,
    {
      className: clsx10__default.default("w-full overflow-hidden", !noPadding && "p-6", className),
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    {
      className: clsx10__default.default(
        "text-micro uppercase text-trovio-primary",
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    Tag,
    {
      className: clsx10__default.default(
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
  return /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-trovio-light-bg px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-trovio-light-text-muted dark:bg-trovio-dark-bg dark:text-trovio-dark-text-muted", children: [
    /* @__PURE__ */ jsxRuntime.jsx(pi.PiLockKeyDuotone, { size: 12 }),
    label ?? "Locked"
  ] });
}
var PLATFORM_ICONS = {
  instagram: pi.PiInstagramLogoDuotone,
  tiktok: pi.PiTiktokLogoDuotone,
  youtube: pi.PiYoutubeLogoDuotone
};
function PlatformIcon({
  platform,
  className,
  size = 16
}) {
  const Icon = PLATFORM_ICONS[platform.toLowerCase()] ?? pi.PiGlobeDuotone;
  return /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-label": platform, className, size });
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
  const [errored, setErrored] = react$1.useState(false);
  const showImage = Boolean(imageUrl) && !errored;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: clsx10__default.default(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-trovio-light-bg font-bold text-trovio-light-text dark:bg-trovio-dark-bg dark:text-trovio-dark-text",
        className
      ),
      style: { width: size, height: size },
      children: showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            alt: name ? `${name} avatar` : "",
            className: "h-full w-full object-cover",
            src: imageUrl,
            onError: () => setErrored(true)
          }
        )
      ) : /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: Math.round(size * 0.4) }, children: initialsOf(name) })
    }
  );
}
function JourneyStepper({
  steps,
  onCurrentClick
}) {
  if (!steps.length) return null;
  const lineClass = (done) => done ? "bg-trovio-primary" : "bg-trovio-light-border dark:bg-trovio-dark-border";
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-start", children: steps.map((step, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === steps.length - 1;
    const leftDone = idx > 0 && steps[idx - 1].status === "completed";
    const rightDone = step.status === "completed";
    const circleBase = "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors sm:h-10 sm:w-10 sm:text-sm";
    const circle = clsx10__default.default(
      circleBase,
      step.status === "completed" && "bg-trovio-primary text-white",
      step.status === "current" && "border-2 border-trovio-primary text-trovio-primary",
      step.status === "upcoming" && "border border-trovio-light-border text-trovio-light-text-muted dark:border-trovio-dark-border dark:text-trovio-dark-text-muted"
    );
    const node = step.status === "current" && onCurrentClick ? /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        "aria-label": `${step.label}, tap to activate`,
        className: clsx10__default.default(circle, "cursor-pointer"),
        type: "button",
        onClick: onCurrentClick,
        children: idx + 1
      }
    ) : /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        "aria-label": `${step.label}, ${step.status}`,
        className: circle,
        role: "img",
        children: idx + 1
      }
    );
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "flex min-w-0 flex-1 flex-col items-center",
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-full items-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: clsx10__default.default(
                  "h-px flex-1",
                  isFirst ? "bg-transparent" : lineClass(leftDone)
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-1.5 shrink-0", children: node }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: clsx10__default.default(
                  "h-px flex-1",
                  isLast ? "bg-transparent" : lineClass(rightDone)
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: clsx10__default.default(
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
  }) });
}
function PillarChips({ pillars }) {
  if (!pillars || pillars.length === 0) return null;
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "space-y-3.5", children: pillars.map((pillar) => /* @__PURE__ */ jsxRuntime.jsxs(
    "li",
    {
      className: "flex items-center gap-3 text-base text-trovio-light-text dark:text-trovio-dark-text",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
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
      /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: formatCompactNumber(followers) }),
        " ",
        "followers"
      ] }, "followers")
    );
  }
  if (posts != null) {
    parts.push(
      /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: formatCompactNumber(posts) }),
        " ",
        "posts"
      ] }, "posts")
    );
  }
  if (platforms && platforms.length > 0) {
    parts.push(
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex items-center gap-1.5", children: platforms.map((p) => /* @__PURE__ */ jsxRuntime.jsx(PlatformIcon, { platform: p, size: 15 }, p)) }, "platforms")
    );
  }
  if (parts.length === 0) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    {
      className: `flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted ${className ?? ""}`,
      children: parts.map((part, idx) => /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center gap-2", children: [
        idx > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": true, children: "\xB7" }),
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
  const [errored, setErrored] = react$1.useState(false);
  const showImage = Boolean(imageUrl) && !errored;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-trovio-primary/30 to-trovio-primary-dark/30 lg:aspect-[3/4]", children: [
      showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            alt: `${name} portrait`,
            className: "absolute inset-0 h-full w-full object-cover",
            src: imageUrl,
            onError: () => setErrored(true)
          }
        )
      ) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-6xl font-light text-white/90", children: initials(name) }) }),
      action && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute right-3 top-3 z-10", children: action }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-trovio-light-surface via-trovio-light-surface/70 to-transparent dark:from-trovio-dark-bg dark:via-trovio-dark-bg/70" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative -mt-10 px-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "-ml-1 text-display text-trovio-light-text dark:text-trovio-dark-text", children: name }),
      role && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: role }),
      handles && handles.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-3 flex flex-wrap gap-x-5 gap-y-1.5", children: handles.map((h) => /* @__PURE__ */ jsxRuntime.jsxs(
        "span",
        {
          className: "inline-flex items-center gap-1.5 text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(PlatformIcon, { platform: h.platform, size: 16 }),
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
    Icon: pi.PiIdentificationCardDuotone
  },
  brand_matcher: {
    title: "Brand Matcher",
    value: "Real brands matched to your pillars, after you activate.",
    Icon: pi.PiHandshakeDuotone
  },
  post_analyzer: {
    title: "Post Analyzer",
    value: "Score your next post before you publish.",
    Icon: pi.PiSparkleDuotone
  }
};
var PREVIEW_SHELL = "rounded-lg border border-trovio-light-border bg-trovio-light-bg p-3 dark:border-trovio-dark-border dark:bg-trovio-dark-bg";
var EYEBROW = "text-micro uppercase text-trovio-primary";
var META_TEXT = "text-[11px] text-trovio-light-text-muted dark:text-trovio-dark-text-muted";
function PlaceholderTile({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
  const metrics = [
    {
      label: "Followers",
      value: followers != null ? formatCompactNumber(followers) : "\u2014"
    },
    { label: "Eng. rate", value: "5.2%" },
    { label: "Avg. reach", value: "8.4K" }
  ];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: PREVIEW_SHELL, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Avatar, { imageUrl: portraitUrl, size: 36 }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: EYEBROW, children: "Media Kit" }),
        platforms && platforms.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mt-0.5 flex items-center gap-1.5 text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: platforms.map((p) => /* @__PURE__ */ jsxRuntime.jsx(PlatformIcon, { platform: p, size: 13 }, p)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-3 grid grid-cols-3 gap-2 border-y border-trovio-light-border py-2.5 dark:border-trovio-dark-border", children: metrics.map((m) => /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: m.value }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: META_TEXT, children: m.label })
    ] }, m.label)) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-2.5", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `mb-1 flex justify-between ${META_TEXT}`, children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Audience" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "65% women \xB7 25\u201334" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-1.5 overflow-hidden rounded-full", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-trovio-primary/70", style: { width: "65%" } }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 bg-trovio-primary/25" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-2.5 grid grid-cols-3 gap-1.5", children: [0, 1, 2].map(
      (i) => tiles[i] ? /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "relative aspect-square overflow-hidden rounded",
          children: /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              alt: "",
              className: "absolute inset-0 h-full w-full object-cover",
              src: tiles[i]
            }
          )
        },
        i
      ) : /* @__PURE__ */ jsxRuntime.jsx(PlaceholderTile, { className: "aspect-square rounded" }, i)
    ) })
  ] });
}
function BrandMatcherPreview() {
  const matches = [
    {
      category: "Beauty & Skincare",
      reason: "Aligns with your skincare content",
      score: 94
    },
    {
      category: "Health & Wellness",
      reason: "Strong fit for your audience",
      score: 89
    },
    {
      category: "Travel & Lifestyle",
      reason: "Matches your lifestyle pillar",
      score: 86
    }
  ];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: PREVIEW_SHELL, children: [
    /* @__PURE__ */ jsxRuntime.jsx("p", { className: `mb-2.5 ${EYEBROW}`, children: "12 potential matches" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-2.5", children: matches.map((m) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-trovio-primary/10", children: /* @__PURE__ */ jsxRuntime.jsx(pi.PiHandshakeDuotone, { className: "absolute inset-0 m-auto h-4 w-4 text-trovio-primary/40" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "truncate text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: m.category }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: `truncate ${META_TEXT}`, children: m.reason })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "shrink-0 text-sm font-bold text-trovio-primary", children: [
        m.score,
        "%"
      ] })
    ] }, m.category)) })
  ] });
}
function ScoreRing({ score, size = 52 }) {
  const stroke = 5;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - score / 100);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      className: "shrink-0",
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      width: size,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "circle",
          {
            className: "stroke-trovio-light-border dark:stroke-trovio-dark-border",
            cx: size / 2,
            cy: size / 2,
            fill: "none",
            r,
            strokeWidth: stroke
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "circle",
          {
            className: "stroke-trovio-primary",
            cx: size / 2,
            cy: size / 2,
            fill: "none",
            r,
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            strokeLinecap: "round",
            strokeWidth: stroke,
            transform: `rotate(-90 ${size / 2} ${size / 2})`
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "text",
          {
            className: "fill-trovio-light-text text-sm font-bold dark:fill-trovio-dark-text",
            dominantBaseline: "central",
            textAnchor: "middle",
            x: "50%",
            y: "50%",
            children: score
          }
        )
      ]
    }
  );
}
function PostAnalyzerPreview({
  thumbnailUrl
}) {
  const metrics = [
    { label: "Hook", pct: 86 },
    { label: "Pacing", pct: 72 },
    { label: "Pillar fit", pct: 64 }
  ];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: PREVIEW_SHELL, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative aspect-[9/16] w-14 shrink-0 overflow-hidden rounded", children: thumbnailUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            alt: "",
            className: "absolute inset-0 h-full w-full object-cover",
            src: thumbnailUrl
          }
        )
      ) : /* @__PURE__ */ jsxRuntime.jsx(PlaceholderTile, { className: "h-full w-full" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(ScoreRing, { score: 92 }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: EYEBROW, children: "Overall score" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-0.5 text-sm font-medium text-trovio-light-text dark:text-trovio-dark-text", children: "Strong hook \u2014 tighten the middle." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-3 space-y-2", children: metrics.map((m) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: `w-16 shrink-0 ${META_TEXT}`, children: m.label }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-1.5 flex-1 overflow-hidden rounded-full bg-trovio-light-border dark:bg-trovio-dark-border", children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "h-full rounded-full bg-gradient-to-r from-trovio-primary/60 to-trovio-primary",
          style: { width: `${m.pct}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-7 shrink-0 text-right text-[11px] font-medium text-trovio-light-text dark:text-trovio-dark-text", children: m.pct })
    ] }, m.label)) })
  ] });
}
function LockedFeatureCard({
  item,
  portraitUrl,
  onActivate
}) {
  const meta = VARIANT_META[item.variant];
  const description = item.description?.trim() || meta.value;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      className: "group w-full rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-4 text-left transition-colors hover:border-trovio-light-text-muted/40 dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
      type: "button",
      onClick: onActivate,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            meta.Icon,
            {
              className: "shrink-0 text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
              size: 22
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "flex-1 text-base font-semibold text-trovio-light-text dark:text-trovio-dark-text", children: meta.title }),
          /* @__PURE__ */ jsxRuntime.jsx(
            pi.PiLockSimpleDuotone,
            {
              className: "shrink-0 text-trovio-light-text-muted/60 dark:text-trovio-dark-text-muted/60",
              size: 18
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mb-3 text-sm leading-relaxed text-trovio-light-text-muted dark:text-trovio-dark-text-muted", children: description }),
        item.variant === "media_kit" && /* @__PURE__ */ jsxRuntime.jsx(
          MediaKitPreview,
          {
            followers: item.stats?.followers,
            images: item.sampleImages,
            platforms: item.stats?.platforms,
            portraitUrl
          }
        ),
        item.variant === "post_analyzer" && /* @__PURE__ */ jsxRuntime.jsx(PostAnalyzerPreview, { thumbnailUrl: item.sampleThumbnailUrl }),
        item.variant === "brand_matcher" && /* @__PURE__ */ jsxRuntime.jsx(BrandMatcherPreview, {})
      ]
    }
  );
}

// src/tokens/design-tokens.ts
var brandColors = {
  "primary-dark": "#000066",
  primary: "#6666FF",
  "primary-light": "#E1E128",
  "secondary-1": "#FF99FF",
  "secondary-2": "#FF3366",
  "secondary-3": "#FF9933"
};
var semanticColors = {
  success: "#3EBA64",
  warning: "#FFB800",
  error: "#FF3366",
  info: "#3E89BA"
};
var lightColors = {
  bg: "#F1F1FA",
  surface: "#FFFFFF",
  border: "#E5E7EB",
  text: "#1B1B28",
  "text-muted": "rgba(27, 27, 40, 0.7)"
};
var darkColors = {
  bg: "#161623",
  surface: "#1E1E2E",
  border: "#2D2D44",
  text: "#FFFFFF",
  "text-muted": "rgba(255, 255, 255, 0.7)"
};
var radius = {
  base: "0.5rem",
  // --radius
  field: "0.75rem",
  // --field-radius
  lg: "0.75rem"
  // --radius-lg
};
var shadow = {
  sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  lg: "0px 10px 15px rgba(0, 0, 0, 0.1)"
};
var fonts = {
  sans: { family: "Barlow", weights: [400, 500, 600, 700], variable: "--font-sans" },
  mono: { family: "Fira Code", variable: "--font-mono" },
  accent: { family: "Nothing You Could Do", weights: [400], variable: "--font-accent" }
};
var typeScale = [
  {
    name: "Display",
    class: "text-display",
    usage: "Portrait / creator name"
  },
  {
    name: "Hero heading",
    class: "text-hero",
    usage: "Lead heading per screen (SectionHeading hero)"
  },
  {
    name: "Section heading",
    class: "text-section",
    usage: "Section titles (SectionHeading)"
  },
  {
    name: "Body large",
    class: "text-body-lg",
    usage: "Emphasized body copy"
  },
  {
    name: "Body",
    class: "text-body",
    usage: "Findings, descriptions, list items"
  },
  {
    name: "Caption / meta",
    class: "text-caption",
    usage: "Stat lines, tool descriptions"
  },
  {
    name: "Micro-label",
    class: "text-micro uppercase",
    usage: "Eyebrow / role tags (SectionLabel)"
  }
];
var designTokens = {
  color: {
    brand: brandColors,
    semantic: semanticColors,
    light: lightColors,
    dark: darkColors
  },
  radius,
  shadow,
  fonts,
  typeScale
};

exports.Avatar = Avatar;
exports.JourneyStepper = JourneyStepper;
exports.LockChip = LockChip;
exports.LockedFeatureCard = LockedFeatureCard;
exports.PillarChips = PillarChips;
exports.PlatformIcon = PlatformIcon;
exports.PortraitHero = PortraitHero;
exports.SectionHeading = SectionHeading;
exports.SectionLabel = SectionLabel;
exports.StatStrip = StatStrip;
exports.TrovioBadge = TrovioBadge;
exports.TrovioButton = TrovioButton;
exports.TrovioCheckbox = TrovioCheckbox;
exports.TrovioInput = TrovioInput;
exports.TrovioModal = TrovioModal;
exports.TrovioProgressBar = TrovioProgressBar;
exports.TrovioSkeleton = TrovioSkeleton;
exports.TrovioSpinner = TrovioSpinner;
exports.TrovioSwitch = TrovioSwitch;
exports.TrovioTextArea = TrovioTextArea;
exports.WidgetCard = WidgetCard;
exports.brandColors = brandColors;
exports.darkColors = darkColors;
exports.designTokens = designTokens;
exports.fonts = fonts;
exports.formatCompactNumber = formatCompactNumber;
exports.lightColors = lightColors;
exports.platformLabel = platformLabel;
exports.radius = radius;
exports.semanticColors = semanticColors;
exports.shadow = shadow;
exports.typeScale = typeScale;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map