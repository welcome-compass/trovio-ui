import type { Meta, StoryObj } from "@storybook/react-vite";

import { PillarChips } from "./pillar-chips";

const meta = {
  title: "Primitives/PillarChips",
  component: PillarChips,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof PillarChips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pillars: [
      { id: "1", name: "Skincare Routines" },
      { id: "2", name: "Day in the Life" },
      { id: "3", name: "Product Reviews" },
    ],
  },
};

export const Empty: Story = { args: { pillars: [] } };
