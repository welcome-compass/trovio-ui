import type { Meta, StoryObj } from "@storybook/react-vite";
import { QuoteCard } from "./quote-card";

const meta = {
  title: "Components/QuoteCard",
  component: QuoteCard,
  tags: ["autodocs"],
  args: {
    eyebrow: "From the course",
    quote:
      "A media kit is kind of like your creative portfolio — it's how you put yourself out there to these brands and show them what you can offer.",
    attribution: "Abigail Hannah",
    source: "Pricing & Partnerships Mastery",
    ctaLabel: "Learn more",
    ctaHref: "https://feijoasocial.com/ppm-trovio",
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof QuoteCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoCta: Story = {
  args: { ctaLabel: undefined, ctaHref: undefined },
};

export const QuoteOnly: Story = {
  args: {
    eyebrow: undefined,
    attribution: undefined,
    source: undefined,
    ctaLabel: undefined,
    ctaHref: undefined,
  },
};

export const TwoUp: Story = {
  render: (args) => (
    <div className="grid gap-6 lg:grid-cols-2">
      <QuoteCard {...args} />
      <QuoteCard
        eyebrow="From the course"
        quote="Why you? What makes them pick you over the next creator? That's your secret sauce."
        attribution="Abigail Hannah"
        source="Pricing & Partnerships Mastery"
        ctaLabel="Learn more"
        ctaHref="https://feijoasocial.com/ppm-trovio"
      />
    </div>
  ),
};
