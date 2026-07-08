import type { Meta, StoryObj } from "@storybook/react-vite";
import { CoursePromoBanner } from "./course-promo-banner";

const meta = {
  title: "Components/CoursePromoBanner",
  component: CoursePromoBanner,
  tags: ["autodocs"],
  args: {
    eyebrow: "Trovio-exclusive · Partner course",
    headline: "Land your first paid brand deal",
    subhead:
      "Abigail landed hers at 1.2k followers and built a six-figure business under 10k. Learn exactly how — then use Trovio to do it.",
    imageUrl: "https://picsum.photos/seed/abigail/800/1000",
    highlights: [
      "Media kit + pricing",
      "The exact pitch",
      "$150 off for Trovio creators",
    ],
    priceLabel: "$399",
    originalPriceLabel: "$549",
    discountLabel: "20% off",
    ctaLabel: "Unlock with Trovio",
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof CoursePromoBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoImage: Story = {
  args: { imageUrl: undefined },
};

export const LinkCta: Story = {
  args: { ctaHref: "https://feijoasocial.com/ppm-trovio" },
};
