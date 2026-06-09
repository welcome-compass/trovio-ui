import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrovioInput } from "./trovio-input";

const meta = {
  title: "Primitives/TrovioInput",
  component: TrovioInput,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "dynamic"] },
  },
  args: { label: "Email", placeholder: "you@example.com" },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TrovioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithHelper: Story = {
  args: { helperText: "We'll never share it." },
};
export const WithError: Story = { args: { error: "That email looks off." } };
