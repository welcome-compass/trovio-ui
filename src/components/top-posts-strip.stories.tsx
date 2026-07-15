import type { Meta, StoryObj } from "@storybook/react-vite";

import { TopPostsStrip } from "./top-posts-strip";

const meta = {
  title: "Components/TopPostsStrip",
  component: TopPostsStrip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 268 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    posts: [
      { caption: "15-min one-pan chicken", views: 82000, isVideo: true },
      { caption: "Sheet-pan dinner for 4", views: 140000, isVideo: true },
      { caption: "No-chop taco night", views: 61000, isVideo: true },
    ],
    onOpenPost: () => {},
  },
} satisfies Meta<typeof TopPostsStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Three video posts with placeholder tiles + view counts. */
export const Default: Story = {};

/** Fewer than three posts — grid keeps its columns. */
export const Partial: Story = {
  args: {
    posts: [{ caption: "Sunday prep in 60 min", views: 210000, isVideo: true }],
  },
};

/** No posts renders nothing (the card drops its eyebrow too). */
export const Empty: Story = { args: { posts: [] } };

/**
 * Dead thumbnail URLs (expired signed URLs) fall back to the placeholder tile
 * instead of a broken image.
 */
export const BrokenThumbnails: Story = {
  args: {
    posts: [
      {
        caption: "15-min one-pan chicken",
        views: 82000,
        isVideo: true,
        thumbnailUrl: "https://example.invalid/expired.jpg",
      },
      {
        caption: "Sheet-pan dinner for 4",
        views: 140000,
        isVideo: true,
        thumbnailUrl: "https://example.invalid/expired-2.jpg",
      },
    ],
  },
};
