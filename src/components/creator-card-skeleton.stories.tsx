import type { Meta, StoryObj } from "@storybook/react-vite";

import { CreatorCardSkeleton } from "./creator-card-skeleton";

const meta = {
  title: "Components/CreatorCardSkeleton",
  component: CreatorCardSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CreatorCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Matches the rich card's shape — avatar, one-liner lines, posts, actions. */
export const Default: Story = {};

/** A rail of skeletons, as it looks while a conversation resolves. */
export const Rail: Story = {
  render: () => (
    <div className="flex gap-3.5">
      <CreatorCardSkeleton />
      <CreatorCardSkeleton />
      <CreatorCardSkeleton />
    </div>
  ),
};
