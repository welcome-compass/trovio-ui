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

/** Full card on Explore: identity + one-liner + top-posts strip + actions. */
export const Default: Story = {
  args: { onSave: () => {}, onStartCampaign: () => {} },
};

/** Saved — the Save button flips to "Unsave" with the accent highlight. */
export const Saved: Story = {
  args: { saved: true, onSave: () => {}, onStartCampaign: () => {} },
};

/**
 * Brand-fit ring (top-right): a `score` (0–100) renders a color-tinted ring —
 * success ≥75, warning ≥50, error below. Omit `score` to hide it.
 */
export const WithScore: Story = {
  args: { score: 82, onSave: () => {}, onStartCampaign: () => {} },
};

/** A mid-fit (warning) and low-fit (error) ring, to show the color buckets. */
export const ScoreBuckets: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <CreatorCard {...args} name="Strong fit" score={88} />
      <CreatorCard {...args} name="Moderate fit" score={61} />
      <CreatorCard {...args} name="Weak fit" score={34} />
    </div>
  ),
  args: { onSave: () => {}, onStartCampaign: () => {} },
};

/**
 * Saved tab: saved + the private note editor (renders only when `onNoteChange`
 * is provided). No posts strip needed for the shortlist view.
 */
export const WithNote: Story = {
  args: {
    saved: true,
    note: "Great fit for the spring launch — reach out after the March drop.",
    onSave: () => {},
    onStartCampaign: () => {},
    onNoteChange: () => {},
  },
};

/** Identity + one-liner only (no posts payload yet) — still a valid card. */
export const NoPosts: Story = {
  args: { topPosts: undefined, onSave: () => {}, onStartCampaign: () => {} },
};

/**
 * Empty handle: the "@" line is suppressed entirely rather than rendering a bare
 * "@" (BD-29). Name still shows via its own row.
 */
export const NoHandle: Story = {
  args: { handle: "", onSave: () => {}, onStartCampaign: () => {} },
};

/** Custom strip eyebrow + a looser one-liner clamp (5 lines). */
export const CustomLabelAndClamp: Story = {
  args: {
    topPostsLabel: "See examples",
    oneLinerLines: 5,
    onSave: () => {},
    onStartCampaign: () => {},
  },
};

/** Interactive — Save/Unsave toggles, and an editable private note. */
export const Interactive: Story = {
  render: (args) => {
    const [saved, setSaved] = useState(false);
    const [note, setNote] = useState("");

    return (
      <CreatorCard
        {...args}
        note={note}
        saved={saved}
        onNoteChange={setNote}
        onSave={() => setSaved((v) => !v)}
        onStartCampaign={() => {}}
      />
    );
  },
};
