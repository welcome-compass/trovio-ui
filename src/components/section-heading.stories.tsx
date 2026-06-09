import type { Meta, StoryObj } from "@storybook/react-vite";

import { SectionHeading } from "./section-heading";

const meta = {
  title: "Primitives/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  argTypes: {
    hero: { control: "boolean" },
    divider: { control: "boolean" },
    children: { control: "text" },
  },
  args: { children: "Your content pillars" },
  parameters: { layout: "padded" },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  args: { hero: true, children: "Here's what your agent learned" },
};

export const Section: Story = { args: { children: "What's waiting for you" } };

export const WithDivider: Story = { args: { divider: true } };
