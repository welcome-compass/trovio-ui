'use strict';

var clsx = require('clsx');
var jsxRuntime = require('react/jsx-runtime');
var pi = require('react-icons/pi');
var react = require('@heroui/react');
var tailwindVariants = require('tailwind-variants');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var clsx__default = /*#__PURE__*/_interopDefault(clsx);

// src/components/section-label.tsx
function SectionLabel({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    {
      className: clsx__default.default(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    Tag,
    {
      className: clsx__default.default(
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
function LockChip({ label }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-trovio-light-bg px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-trovio-light-text-muted dark:bg-trovio-dark-bg dark:text-trovio-dark-text-muted", children: [
    /* @__PURE__ */ jsxRuntime.jsx(pi.PiLockKeyDuotone, { size: 12 }),
    label ?? "Locked"
  ] });
}
function JourneyStepper({
  steps,
  onCurrentClick
}) {
  if (!steps.length) return null;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-start", children: steps.map((step, idx) => {
    const showConnector = idx < steps.length - 1;
    const circleBase = "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors";
    const circle = step.status === "completed" ? `${circleBase} bg-trovio-primary text-white` : step.status === "current" ? `${circleBase} border-2 border-trovio-primary text-trovio-primary` : `${circleBase} border border-trovio-light-border text-trovio-light-text-muted dark:border-trovio-dark-border dark:text-trovio-dark-text-muted`;
    const node = step.status === "current" && onCurrentClick ? /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        "aria-label": `${step.label}, tap to activate`,
        className: `${circle} cursor-pointer`,
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
        className: `flex items-start ${showConnector ? "flex-1" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-24 flex-col items-center gap-2", children: [
            node,
            /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: `text-center text-sm leading-tight ${step.status === "upcoming" ? "text-trovio-light-text-muted dark:text-trovio-dark-text-muted" : "font-medium text-trovio-light-text dark:text-trovio-dark-text"}`,
                children: step.label
              }
            )
          ] }),
          showConnector && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-5 flex-1", children: /* @__PURE__ */ jsxRuntime.jsx(
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
      className: clsx__default.default("text-trovio-primary", className),
      color: "current",
      size: sizeMap[size] || "md"
    }
  );
};

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
    class: "text-5xl md:text-6xl font-light tracking-tight",
    usage: "Portrait / creator name"
  },
  {
    name: "Hero heading",
    class: "text-3xl md:text-4xl font-normal tracking-tight",
    usage: "Lead heading per screen (SectionHeading hero)"
  },
  {
    name: "Section heading",
    class: "text-2xl md:text-[26px] font-medium tracking-tight",
    usage: "Section titles (SectionHeading)"
  },
  {
    name: "Body",
    class: "text-base leading-relaxed",
    usage: "Findings, descriptions, list items"
  },
  {
    name: "Caption / meta",
    class: "text-sm",
    usage: "Stat lines, tool descriptions"
  },
  {
    name: "Micro-label",
    class: "text-xs font-semibold uppercase tracking-[0.15em]",
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

exports.JourneyStepper = JourneyStepper;
exports.LockChip = LockChip;
exports.PillarChips = PillarChips;
exports.PlatformIcon = PlatformIcon;
exports.SectionHeading = SectionHeading;
exports.SectionLabel = SectionLabel;
exports.StatStrip = StatStrip;
exports.TrovioBadge = TrovioBadge;
exports.TrovioSpinner = TrovioSpinner;
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