import type { Meta, StoryObj } from "@storybook/react-vite";

import { PortraitHero } from "./portrait-hero";

const meta = {
  title: "Components/PortraitHero",
  component: PortraitHero,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
  args: {
    name: "Maya",
    role: "Lifestyle creator",
    handles: [
      { platform: "instagram", username: "mayalife" },
      { platform: "tiktok", username: "mayalife" },
    ],
  },
} satisfies Meta<typeof PortraitHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: { imageUrl: "https://i.pravatar.cc/600?img=47" },
};
export const InitialsFallback: Story = { args: { imageUrl: null } };
