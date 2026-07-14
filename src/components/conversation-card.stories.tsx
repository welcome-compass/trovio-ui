import type { Meta, StoryObj } from "@storybook/react-vite";

import { ConversationCard } from "./conversation-card";

const meta = {
  title: "Components/ConversationCard",
  component: ConversationCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    status: {
      control: "select",
      options: ["active", "paused", "archived", "rejected"],
    },
    descriptionLines: { control: { type: "number", min: 1, max: 6 } },
  },
  args: {
    name: "Postpartum recovery essentials",
    description:
      "Real, unfiltered talk about the fourth trimester — recovery, sleep, and the products that actually helped. A durable theme our audience keeps coming back to, not a one-off launch moment.",
    status: "active",
    onEdit: () => {},
    onDelete: () => {},
    onTogglePause: () => {},
  },
  // Constrain width so the card reads like a real list row in the catalog.
  decorators: [
    (Story) => (
      <div style={{ width: 440, maxWidth: "90vw" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ConversationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Paused: Story = { args: { status: "paused" } };

export const Archived: Story = {
  args: { status: "archived", onTogglePause: undefined },
};

/** No action handlers → a read-only card (badge only, no buttons). */
export const ReadOnly: Story = {
  args: { onEdit: undefined, onDelete: undefined, onTogglePause: undefined },
};

/** Busy state disables the actions while a mutation is in flight. */
export const Busy: Story = { args: { isBusy: true } };

export const AllStatuses: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ConversationCard {...args} status="active" />
      <ConversationCard {...args} status="paused" />
      <ConversationCard {...args} status="archived" onTogglePause={undefined} />
    </div>
  ),
};
