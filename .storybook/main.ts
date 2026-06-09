import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

/**
 * Standalone Storybook for @trovio/ui. Vite builder + the Tailwind v4 Vite
 * plugin (this repo isn't a Next app, so no @storybook/nextjs). Tailwind is fed
 * by src/styles/storybook.css, imported in preview.tsx.
 */
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
  framework: { name: "@storybook/react-vite", options: {} },
  viteFinal: async (cfg) => {
    cfg.plugins = cfg.plugins ?? [];
    cfg.plugins.push(tailwindcss());

    return cfg;
  },
};

export default config;
