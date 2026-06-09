import type { Meta, StoryObj } from "@storybook/react-vite";

import { PiHeartDuotone } from "react-icons/pi";

import { RingGauge } from "./ring-gauge";

const meta = {
  title: "Primitives/RingGauge",
  component: RingGauge,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 1, step: 0.05 } },
    size: { control: "number" },
    stroke: { control: "number" },
  },
  args: { value: 0.65 },
} satisfies Meta<typeof RingGauge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: { value: 0.8, children: <PiHeartDuotone className="h-5 w-5" /> },
};

export const WithScore: Story = {
  args: {
    value: 0.92,
    size: 52,
    children: (
      <span className="text-sm font-bold text-trovio-light-text dark:text-trovio-dark-text">
        92
      </span>
    ),
  },
};

export const Empty: Story = { args: { value: 0 } };
