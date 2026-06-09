import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "./text";

const meta = {
  title: "Primitives/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "body-lg", "body", "caption"],
    },
    muted: { control: "boolean" },
  },
  args: { children: "The quick brown fox jumps over the lazy dog." },
  parameters: { layout: "padded" },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {};
export const Display: Story = { args: { variant: "display", children: "Derrick" } };
export const Caption: Story = { args: { variant: "caption", muted: true } };

export const Scale: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant="display">Display</Text>
      <Text variant="body-lg">Body large — emphasized body copy.</Text>
      <Text variant="body">Body — findings, descriptions, list items.</Text>
      <Text muted variant="caption">
        Caption — stat lines, tool descriptions.
      </Text>
    </div>
  ),
};
