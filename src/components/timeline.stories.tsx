import type { Meta, StoryObj } from "@storybook/react-vite";

import { Timeline } from "./timeline";

const meta = {
  title: "Components/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Brand-workspace activity log, newest-first. */
export const Default: Story = {
  args: {
    items: [
      { title: "Draft saved", meta: "Today, 9:14pm" },
      { title: "Status → Drafting", meta: "Today, 9:12pm" },
      { title: "Added to your brands", meta: "3 days ago" },
    ],
  },
};

/** Custom dot colors per entry. */
export const ColoredDots: Story = {
  args: {
    items: [
      { title: "Reached out", meta: "Yesterday", color: "#6666FF" },
      { title: "Drafting", meta: "2 days ago", color: "#FFB800" },
      { title: "Favorited", meta: "5 days ago", color: "#9A6BFF" },
    ],
  },
};

/**
 * A forward-looking schedule, oldest-first — the list renders in the order it
 * is given. `note` chips mark the steps Trovio runs rather than the brand.
 */
export const WithNotes: Story = {
  args: {
    items: [
      { title: "Deal signed", meta: "Jul 17", note: "Trovio" },
      { title: "Production", meta: "Jul 18 – Jul 27" },
      { title: "Review & revisions", meta: "Jul 28", note: "Trovio" },
      { title: "Delivery", meta: "Jul 30" },
    ],
  },
};
