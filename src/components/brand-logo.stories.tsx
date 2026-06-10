import type { Meta, StoryObj } from "@storybook/react-vite";

import { BrandLogo } from "./brand-logo";

/**
 * Self-contained stand-in wordmarks so the story needs no hosted asset. In a
 * real app these are the brand PNGs in `public/` (e.g. trovio-logo-light-mode).
 */
const wordmark = (fill: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32"><text x="0" y="23" font-family="sans-serif" font-size="22" font-weight="700" fill="${fill}">trovio</text></svg>`,
  )}`;

const meta = {
  title: "Primitives/BrandLogo",
  component: BrandLogo,
  tags: ["autodocs"],
  args: {
    alt: "Trovio",
    className: "h-8 w-auto",
    lightSrc: wordmark("#1B1B28"),
    darkSrc: wordmark("#ffffff"),
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof BrandLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Toggle the Storybook theme to see the light/dark variants swap (CSS only). */
export const Default: Story = {};
