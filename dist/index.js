export { brandColors, darkColors, designTokens, fonts, lightColors, radius, semanticColors, shadow, typeScale } from './chunk-PGLQXXUF.js';
import clsx from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { PiYoutubeLogoDuotone, PiTiktokLogoDuotone, PiInstagramLogoDuotone, PiGlobeDuotone, PiLockKeyDuotone } from 'react-icons/pi';
import { Chip, Spinner } from '@heroui/react';
import { tv } from 'tailwind-variants';

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
function LockChip({ label }) {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-trovio-light-bg px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-trovio-light-text-muted dark:bg-trovio-dark-bg dark:text-trovio-dark-text-muted", children: [
    /* @__PURE__ */ jsx(PiLockKeyDuotone, { size: 12 }),
    label ?? "Locked"
  ] });
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

export { JourneyStepper, LockChip, PillarChips, PlatformIcon, SectionHeading, SectionLabel, StatStrip, TrovioBadge, TrovioSpinner, formatCompactNumber, platformLabel };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map