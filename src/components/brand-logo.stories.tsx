import type { Meta, StoryObj } from "@storybook/react-vite";

import { BrandLogo } from "./brand-logo";

const meta = {
  title: "Primitives/BrandLogo",
  component: BrandLogo,
  tags: ["autodocs"],
  args: {
    alt: "Trovio",
    className: "h-8 w-auto",
    // Served from the Storybook static dir (.storybook staticDirs -> ../public).
    // In a real app these are the brand PNGs in the consumer's own public/.
    lightSrc: "/trovio-logo-light-mode.png",
    darkSrc: "/trovio-logo-dark-mode.png",
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof BrandLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The real Trovio logo. Toggle the Storybook theme to see it swap (CSS only). */
export const Default: Story = {};

/** Larger sizing via className — aspect ratio is preserved by `w-auto`. */
export const Large: Story = { args: { className: "h-12 w-auto" } };
