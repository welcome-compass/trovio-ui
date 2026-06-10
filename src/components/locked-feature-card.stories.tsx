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

/** Loading skeleton — card identity over breathing placeholders, shown on the
 *  living screen while the rest of the page is still generating. */
export const Loading: Story = {
  args: {
    loading: true,
    item: { variant: "media_kit", treatment: "crisp" },
  },
};

// --- Real-data path (the fields the backend will pass; no LLM) ---------------

export const MediaKit: Story = {
  args: {
    creatorName: "Derrick Showers",
    ctaLabel: "Create my media kit",
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
    ctaLabel: "See my matches",
    item: {
      variant: "brand_matcher",
      treatment: "veiled",
      description:
        "Find sponsors that fit your world — from **technical experiments** and **creative workflows** to **family life** and everything in between.",
    },
  },
};

export const PostAnalyzer: Story = {
  args: {
    ctaLabel: "Score my next post",
    item: { variant: "post_analyzer", treatment: "veiled" },
  },
};
