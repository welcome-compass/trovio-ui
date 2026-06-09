import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./avatar";

const meta = {
  title: "Primitives/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { name: "Derrick Showers", size: 48 },
  argTypes: { size: { control: { type: "range", min: 24, max: 96, step: 4 } } },
  parameters: { layout: "centered" },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: { imageUrl: "https://i.pravatar.cc/160?img=12" },
};
export const InitialsFallback: Story = { args: { imageUrl: null } };
