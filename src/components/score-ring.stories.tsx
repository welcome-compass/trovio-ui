import type { Meta, StoryObj } from "@storybook/react-vite";

import { ScoreRing } from "./score-ring";

const meta = {
  title: "Primitives/ScoreRing",
  component: ScoreRing,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    score: { control: { type: "range", min: 0, max: 100, step: 1 } },
    size: { control: "number" },
  },
  args: { score: 92 },
} satisfies Meta<typeof ScoreRing>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The Post Analyzer's overall score. */
export const Default: Story = {};

/** A mid-range score — the arc fills to the value. */
export const Partial: Story = { args: { score: 74 } };

/** Zero still renders the number, not an empty state. */
export const Zero: Story = { args: { score: 0 } };

/**
 * Calculating — the brand-fit beat before the score resolves. The arc sits
 * empty and the number is replaced by a pulsing placeholder, so the ring keeps
 * its slot in the layout.
 */
export const Loading: Story = { args: { loading: true } };

/** Larger ring for a masthead. */
export const Large: Story = { args: { score: 88, size: 88 } };
