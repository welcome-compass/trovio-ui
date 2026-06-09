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

// --- Real-data path (the fields the backend will pass; no LLM) ---------------

export const MediaKit: Story = {
  args: {
    creatorName: "Derrick Showers",
    item: {
      variant: "media_kit",
      treatment: "crisp",
      stats: {
        followers: 380,
        platforms: ["tiktok"],
        engagementRate: 0.035,
        avgViews: 420,
      },
      pillars: [{ label: "Everyday AI That Actually Helps" }],
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
      pillars: [
        { label: "Everyday AI", reason: "Your signature lane" },
        { label: "Founder & creator tools", reason: "Builder-energy audience" },
        { label: "Dad-life adventures", reason: "Relatable weekend content" },
      ],
    },
  },
};

export const PostAnalyzer: Story = {
  args: {
    item: { variant: "post_analyzer", treatment: "veiled", analyzedCount: 15 },
  },
};

// --- Illustrative fallback (no real fields → example data) ------------------

export const MediaKitFallback: Story = {
  args: { item: { variant: "media_kit", treatment: "crisp" } },
};

export const BrandMatcherFallback: Story = {
  args: { item: { variant: "brand_matcher", treatment: "veiled" } },
};
