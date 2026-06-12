import type { Meta, StoryObj } from "@storybook/react-vite";

import { BackButton } from "./back-button";

const meta = {
  title: "Components/BackButton",
  component: BackButton,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: { label: "Back" },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Labeled: Story = { args: { label: "Back to media kit" } };
