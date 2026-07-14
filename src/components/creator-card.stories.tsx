import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { CreatorCard } from "./creator-card";
import type { CreatorPost } from "./creator-card";

const POSTS: CreatorPost[] = [
  { caption: "15-min one-pan chicken", views: 82000, isVideo: true },
  { caption: "Sheet-pan dinner for 4", views: 140000, isVideo: true },
  { caption: "No-chop taco night", views: 61000, isVideo: true },
];

const meta = {
  title: "Components/CreatorCard",
  component: CreatorCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    name: "Maya Chen",
    handle: "mayacooks",
    oneLiner:
      "Her 30-minute one-pan dinners are built for parents racing the 6pm clock — the exact weeknight energy your brand sells.",
    topPosts: POSTS,
  },
} satisfies Meta<typeof CreatorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Full card: identity + one-liner + top-posts strip + actions. */
export const Default: Story = {
  args: { onSave: () => {}, onUseInCampaign: () => {} },
};

/** Selected into the campaign list — accent ring + check badge. */
export const Selected: Story = {
  args: { selected: true, saved: true, onSave: () => {}, onUseInCampaign: () => {} },
};

/** Identity + one-liner only (no posts payload yet) — still a valid card. */
export const NoPosts: Story = {
  args: { topPosts: undefined, onSave: () => {}, onUseInCampaign: () => {} },
};

/** Interactive — Save + Use-in-Campaign toggle their own state. */
export const Interactive: Story = {
  render: (args) => {
    const [saved, setSaved] = useState(false);
    const [selected, setSelected] = useState(false);

    return (
      <CreatorCard
        {...args}
        saved={saved}
        selected={selected}
        onSave={() => setSaved((v) => !v)}
        onUseInCampaign={() => setSelected((v) => !v)}
      />
    );
  },
};
