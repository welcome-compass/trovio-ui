import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeadlineBlock } from "./headline-block";

const meta = {
  title: "Components/HeadlineBlock",
  component: HeadlineBlock,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["display", "hero", "section", "body-lg", "body"],
    },
    weight: {
      control: "select",
      options: [undefined, "extralight", "light", "normal", "medium", "semibold"],
    },
    children: { control: "text" },
  },
  args: {
    children:
      "Nice work — your last post landed in the top 10% of your reach this month.",
    size: "section",
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof HeadlineBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Section: Story = {};

export const Hero: Story = {
  args: { size: "hero" },
};

export const WithCta: Story = {
  args: {
    children: "Happy holidays from the Trovio team — we made you something.",
    cta: {
      label: "Take a look",
      // eslint-disable-next-line no-alert
      onClick: () => alert("CTA pressed"),
    },
  },
};
