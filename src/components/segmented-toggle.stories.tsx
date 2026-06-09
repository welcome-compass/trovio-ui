import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { SegmentedToggle } from "./segmented-toggle";

const CHANNELS = [
  { value: "email", label: "Email" },
  { value: "ig_dm", label: "IG DM" },
  { value: "linkedin", label: "LinkedIn" },
];

const meta = {
  title: "Primitives/SegmentedToggle",
  component: SegmentedToggle,
  tags: ["autodocs"],
  args: { options: CHANNELS, value: "email", onChange: () => {} },
} satisfies Meta<typeof SegmentedToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <SegmentedToggle {...args} value={value} onChange={setValue} />;
  },
};
