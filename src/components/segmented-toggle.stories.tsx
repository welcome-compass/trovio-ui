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

/**
 * `fullWidth` — options share the row instead of sizing to their label. Used
 * for the campaign builder's two-option deal toggles.
 */
export const FullWidth: Story = {
  args: {
    options: [
      { value: "ugc", label: "UGC" },
      { value: "audience", label: "Audience" },
    ],
    value: "ugc",
    fullWidth: true,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <div className="w-80">
        <SegmentedToggle {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

/**
 * A per-option `disabled` — the option stays visible but unavailable. Here the
 * creator's stated deal preferences rule out product exchange, so the choice is
 * still shown while only Payment can be picked.
 */
export const OptionDisabled: Story = {
  args: {
    options: [
      { value: "product", label: "Product exchange", disabled: true },
      { value: "payment", label: "Payment" },
    ],
    value: "payment",
    fullWidth: true,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <div className="w-80">
        <SegmentedToggle {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};
