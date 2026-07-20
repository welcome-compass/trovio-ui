/**
 * Trovio Design Tokens — canonical, platform-agnostic source of truth.
 *
 * These values MIRROR the CSS custom properties in `styles/globals.css` (the
 * `@theme` block + the `:root`/`.dark` HeroUI theme vars). Web styling is still
 * driven by those CSS variables; this module is the data the design-system
 * showcase renders from AND the seed for a cross-platform export (JSON → iOS /
 * Android).
 *
 * KEEP IN SYNC with globals.css until we introduce a generator (Style
 * Dictionary) that emits CSS + JSON + Swift from one source. Until then, treat
 * this file as the spec and globals.css as the web implementation.
 *
 * `as const` keeps the literal types for the showcase + future codegen.
 */
declare const brandColors: {
    readonly "primary-dark": "#000066";
    readonly primary: "#6666FF";
    readonly "primary-light": "#E1E128";
    readonly "secondary-1": "#FF99FF";
    readonly "secondary-2": "#FF3366";
    readonly "secondary-3": "#FF9933";
};
declare const semanticColors: {
    readonly success: "#3EBA64";
    readonly warning: "#FFB800";
    readonly error: "#FF3366";
    readonly info: "#3E89BA";
};
declare const lightColors: {
    readonly bg: "#F1F1FA";
    readonly surface: "#FFFFFF";
    readonly border: "#E5E7EB";
    readonly text: "#1B1B28";
    readonly "text-muted": "rgba(27, 27, 40, 0.7)";
};
declare const darkColors: {
    readonly bg: "#161623";
    readonly surface: "#1E1E2E";
    readonly border: "#2D2D44";
    readonly text: "#FFFFFF";
    readonly "text-muted": "rgba(255, 255, 255, 0.7)";
};
declare const radius: {
    readonly base: "0.5rem";
    readonly field: "0.75rem";
    readonly lg: "0.75rem";
};
declare const shadow: {
    readonly sm: "0px 1px 2px rgba(0, 0, 0, 0.05)";
    readonly md: "0px 4px 6px rgba(0, 0, 0, 0.1)";
    readonly lg: "0px 10px 15px rgba(0, 0, 0, 0.1)";
};
declare const fonts: {
    readonly sans: {
        readonly family: "Barlow";
        readonly weights: readonly [400, 500, 600, 700];
        readonly variable: "--font-sans";
    };
    readonly mono: {
        readonly family: "Fira Code";
        readonly variable: "--font-mono";
    };
    readonly accent: {
        readonly family: "Nothing You Could Do";
        readonly weights: readonly [400];
        readonly variable: "--font-accent";
    };
};
/**
 * Type scale (DESIGN.md §1 Typography). `class` is the Tailwind recipe so the
 * showcase renders the real thing; `usage` documents intent.
 */
declare const typeScale: readonly [{
    readonly name: "Display";
    readonly class: "text-display";
    readonly usage: "Portrait / creator name";
}, {
    readonly name: "Hero heading";
    readonly class: "text-hero";
    readonly usage: "Lead heading per screen (SectionHeading hero)";
}, {
    readonly name: "Section heading";
    readonly class: "text-section";
    readonly usage: "Section titles (SectionHeading)";
}, {
    readonly name: "Body large";
    readonly class: "text-body-lg";
    readonly usage: "Emphasized body copy";
}, {
    readonly name: "Body";
    readonly class: "text-body";
    readonly usage: "Findings, descriptions, list items";
}, {
    readonly name: "Caption / meta";
    readonly class: "text-caption";
    readonly usage: "Stat lines, tool descriptions";
}, {
    readonly name: "Micro-label";
    readonly class: "text-micro uppercase";
    readonly usage: "Eyebrow / role tags (SectionLabel)";
}, {
    readonly name: "Label";
    readonly class: "text-label uppercase";
    readonly usage: "Prominent eyebrow (SectionLabel size=label) — e.g. Explore 'Why they fit'";
}];
/** Convenience aggregate for codegen / JSON export. */
declare const designTokens: {
    readonly color: {
        readonly brand: {
            readonly "primary-dark": "#000066";
            readonly primary: "#6666FF";
            readonly "primary-light": "#E1E128";
            readonly "secondary-1": "#FF99FF";
            readonly "secondary-2": "#FF3366";
            readonly "secondary-3": "#FF9933";
        };
        readonly semantic: {
            readonly success: "#3EBA64";
            readonly warning: "#FFB800";
            readonly error: "#FF3366";
            readonly info: "#3E89BA";
        };
        readonly light: {
            readonly bg: "#F1F1FA";
            readonly surface: "#FFFFFF";
            readonly border: "#E5E7EB";
            readonly text: "#1B1B28";
            readonly "text-muted": "rgba(27, 27, 40, 0.7)";
        };
        readonly dark: {
            readonly bg: "#161623";
            readonly surface: "#1E1E2E";
            readonly border: "#2D2D44";
            readonly text: "#FFFFFF";
            readonly "text-muted": "rgba(255, 255, 255, 0.7)";
        };
    };
    readonly radius: {
        readonly base: "0.5rem";
        readonly field: "0.75rem";
        readonly lg: "0.75rem";
    };
    readonly shadow: {
        readonly sm: "0px 1px 2px rgba(0, 0, 0, 0.05)";
        readonly md: "0px 4px 6px rgba(0, 0, 0, 0.1)";
        readonly lg: "0px 10px 15px rgba(0, 0, 0, 0.1)";
    };
    readonly fonts: {
        readonly sans: {
            readonly family: "Barlow";
            readonly weights: readonly [400, 500, 600, 700];
            readonly variable: "--font-sans";
        };
        readonly mono: {
            readonly family: "Fira Code";
            readonly variable: "--font-mono";
        };
        readonly accent: {
            readonly family: "Nothing You Could Do";
            readonly weights: readonly [400];
            readonly variable: "--font-accent";
        };
    };
    readonly typeScale: readonly [{
        readonly name: "Display";
        readonly class: "text-display";
        readonly usage: "Portrait / creator name";
    }, {
        readonly name: "Hero heading";
        readonly class: "text-hero";
        readonly usage: "Lead heading per screen (SectionHeading hero)";
    }, {
        readonly name: "Section heading";
        readonly class: "text-section";
        readonly usage: "Section titles (SectionHeading)";
    }, {
        readonly name: "Body large";
        readonly class: "text-body-lg";
        readonly usage: "Emphasized body copy";
    }, {
        readonly name: "Body";
        readonly class: "text-body";
        readonly usage: "Findings, descriptions, list items";
    }, {
        readonly name: "Caption / meta";
        readonly class: "text-caption";
        readonly usage: "Stat lines, tool descriptions";
    }, {
        readonly name: "Micro-label";
        readonly class: "text-micro uppercase";
        readonly usage: "Eyebrow / role tags (SectionLabel)";
    }, {
        readonly name: "Label";
        readonly class: "text-label uppercase";
        readonly usage: "Prominent eyebrow (SectionLabel size=label) — e.g. Explore 'Why they fit'";
    }];
};
type DesignTokens = typeof designTokens;

export { type DesignTokens, brandColors, darkColors, designTokens, fonts, lightColors, radius, semanticColors, shadow, typeScale };
