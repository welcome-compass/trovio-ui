import type { Meta, StoryObj } from "@storybook/react-vite";

import { MediaKitPreview } from "./media-kit-preview";

const meta = {
  title: "Components/MediaKitPreview",
  component: MediaKitPreview,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MediaKitPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

/** No published kit yet — branded gradient fallback with a badge. */
export const Fallback: Story = {
  args: { badge: "Draft", caption: "Derrick’s one-pager" },
};

/** With brand colors driving the fallback. */
export const BrandColor: Story = {
  args: { colors: ["#000066"], badge: "Published", caption: "Derrick" },
};
