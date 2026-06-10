import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkCard } from "./link-card";

const meta = {
  title: "Components/LinkCard",
  component: LinkCard,
  tags: ["autodocs"],
  args: {
    eyebrow: "Trovio Tip",
    title: "Three hooks that consistently outperform on Reels",
    imageUrl: "https://picsum.photos/seed/trovio/640/360",
    href: "https://help.gotrovio.com",
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof LinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoImage: Story = {
  args: { imageUrl: undefined },
};

export const TwoUp: Story = {
  render: (args) => (
    <div className="grid gap-6 lg:grid-cols-2">
      <LinkCard {...args} />
      <LinkCard
        eyebrow="Course"
        title="Grow your audience with a weekly posting cadence"
        imageUrl="https://picsum.photos/seed/trovio2/640/360"
        href="https://help.gotrovio.com"
      />
    </div>
  ),
};
