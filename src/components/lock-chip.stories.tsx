import type { Meta, StoryObj } from "@storybook/react-vite";

import { LockChip } from "./lock-chip";

const meta = {
  title: "Primitives/LockChip",
  component: LockChip,
  tags: ["autodocs"],
  args: { label: "Locked" },
  parameters: { layout: "centered" },
} satisfies Meta<typeof LockChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabel: Story = { args: { label: "Unlocks at 400" } };
