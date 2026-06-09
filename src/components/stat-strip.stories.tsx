import type { Meta, StoryObj } from "@storybook/react-vite";

import { StatStrip } from "./stat-strip";

const meta = {
  title: "Components/StatStrip",
  component: StatStrip,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof StatStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: { followers: 24300, posts: 312, platforms: ["instagram", "tiktok"] },
};

export const PartialHidesMissing: Story = {
  args: { followers: 1300, platforms: ["youtube"] },
};
