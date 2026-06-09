import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrovioSpinner } from "./trovio-spinner";

const meta = {
  title: "Components/TrovioSpinner",
  component: TrovioSpinner,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
  },
  args: { size: "md" },
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="text-trovio-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TrovioSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6 text-trovio-primary">
      {(["sm", "md", "lg", "xl"] as const).map((s) => (
        <TrovioSpinner key={s} size={s} />
      ))}
    </div>
  ),
};
