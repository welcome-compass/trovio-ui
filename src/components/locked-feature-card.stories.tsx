import type { Meta, StoryObj } from "@storybook/react-vite";

import { LockedFeatureCard } from "./locked-feature-card";

const meta = {
  title: "Components/LockedFeatureCard",
  component: LockedFeatureCard,
  parameters: { layout: "padded" },
  args: { onActivate: () => {} },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LockedFeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediaKit: Story = {
  args: {
    item: {
      variant: "media_kit",
      treatment: "crisp",
      stats: { followers: 24300, platforms: ["instagram", "tiktok"] },
      description: "One link that makes brands take you seriously.",
    },
  },
};

export const BrandMatcher: Story = {
  args: {
    item: {
      variant: "brand_matcher",
      treatment: "veiled",
      description: "Real brands matched to your pillars, after you activate.",
    },
  },
};

export const PostAnalyzer: Story = {
  args: { item: { variant: "post_analyzer", treatment: "veiled" } },
};
