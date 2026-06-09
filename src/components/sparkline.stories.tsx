import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sparkline } from "./sparkline";

const meta = {
  title: "Primitives/Sparkline",
  component: Sparkline,
  tags: ["autodocs"],
  args: { points: [3.1, 2.8, 3.6, 3.2, 4.1, 3.8] },
} satisfies Meta<typeof Sparkline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Rising: Story = { args: { points: [1, 1.4, 1.3, 2.1, 2.8, 3.6] } };

export const Falling: Story = { args: { points: [4, 3.2, 3.5, 2.4, 1.9, 1.2] } };

/** Fewer than 2 points renders nothing (graceful degrade). */
export const NoData: Story = { args: { points: [] } };
