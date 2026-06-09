import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrovioProgressBar } from "./trovio-progress-bar";

const meta = {
  title: "Primitives/TrovioProgressBar",
  component: TrovioProgressBar,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 10, step: 1 } },
    size: { control: "select", options: ["sm", "md"] },
    color: { control: "color" },
  },
  args: { value: 3, max: 5, size: "md", label: "Fitness: 3 of 5 posts" },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TrovioProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Full: Story = { args: { value: 5, max: 5 } };
