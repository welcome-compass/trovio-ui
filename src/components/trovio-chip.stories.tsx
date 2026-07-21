import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrovioChip } from "./trovio-chip";

const meta = {
  title: "Primitives/TrovioChip",
  component: TrovioChip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["soft", "solid", "outline", "neutral"],
    },
    children: { control: "text" },
  },
  args: { variant: "soft", children: "night nurses" },
  parameters: { layout: "centered" },
} satisfies Meta<typeof TrovioChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Soft: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(["soft", "solid", "outline", "neutral"] as const).map((v) => (
        <TrovioChip key={v} variant={v}>
          {v}
        </TrovioChip>
      ))}
    </div>
  ),
};

export const CommunityRow: Story = {
  render: () => (
    <div className="flex flex-wrap justify-center gap-2.5 max-w-md">
      {[
        "night nurses",
        "indie journalists",
        "tattoo artists",
        "solo founders",
        "grad students",
      ].map((label) => (
        <TrovioChip key={label}>{label}</TrovioChip>
      ))}
    </div>
  ),
};
