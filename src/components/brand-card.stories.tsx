import type { Meta, StoryObj } from "@storybook/react-vite";

import { BrandCard } from "./brand-card";

const meta = {
  title: "Components/BrandCard",
  component: BrandCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 260 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BrandCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandName: "Glossier",
    description:
      "Beauty audience overlap + your get-ready posts average 4.2% engagement.",
    href: "/dashboard/brands/glossier",
  },
};

export const WithDismiss: Story = {
  args: {
    brandName: "Rocket Money",
    description:
      "Personal-finance app; adjacent to your productivity content, runs an affiliate program.",
    href: "/dashboard/brands/rocket-money",
    onDismiss: () => {},
  },
};
