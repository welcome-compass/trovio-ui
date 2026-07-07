import type { Meta, StoryObj } from "@storybook/react-vite";
import { CourseCallout } from "./course-callout";

const meta = {
  title: "Components/CourseCallout",
  component: CourseCallout,
  tags: ["autodocs"],
  args: {
    eyebrow: "Partner course",
    title: "Pricing & Partnerships Mastery",
    description:
      "Learn how to package your skills, present your value, and get paid what you're worth — then use Trovio to put it to work.",
    imageUrl: "https://picsum.photos/seed/ppm/640/360",
    priceLabel: "$399",
    originalPriceLabel: "$549",
    discountLabel: "20% off",
    ctaLabel: "Enroll with your Trovio discount",
    ctaHref: "https://feijoasocial.com/ppm-trovio",
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof CourseCallout>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Post-paywall: unlocked, CTA links out to enroll. */
export const Featured: Story = {};

/** Pre-paywall: locked, CTA opens the activation paywall (no href). */
export const Locked: Story = {
  args: {
    locked: true,
    ctaLabel: "Unlock with Trovio",
    ctaHref: undefined,
    description:
      "Activate Trovio to unlock your exclusive discount on Abigail's course.",
  },
};

export const NoImage: Story = {
  args: { imageUrl: undefined },
};
