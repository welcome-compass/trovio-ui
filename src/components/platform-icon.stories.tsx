import type { Meta, StoryObj } from "@storybook/react-vite";

import { PlatformIcon } from "./platform-icon";

const meta = {
  title: "Primitives/PlatformIcon",
  component: PlatformIcon,
  tags: ["autodocs"],
  args: { platform: "instagram", size: 28 },
  argTypes: {
    platform: {
      control: "select",
      options: ["instagram", "tiktok", "youtube", "unknown"],
    },
    size: { control: { type: "range", min: 12, max: 64, step: 2 } },
  },
  parameters: { layout: "centered" },
} satisfies Meta<typeof PlatformIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const AllPlatforms: Story = {
  render: () => (
    <div className="flex items-center gap-4 text-trovio-primary">
      {["instagram", "tiktok", "youtube", "unknown"].map((p) => (
        <div key={p} className="flex flex-col items-center gap-1">
          <PlatformIcon platform={p} size={28} />
          <span className="text-xs text-trovio-light-text-muted">{p}</span>
        </div>
      ))}
    </div>
  ),
};
