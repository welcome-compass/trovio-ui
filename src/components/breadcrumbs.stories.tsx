import type { Meta, StoryObj } from "@storybook/react-vite";

import { Breadcrumbs } from "./breadcrumbs";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [{ label: "Brands", href: "/dashboard/brands" }, { label: "Glossier" }],
  },
};

export const Deep: Story = {
  args: {
    items: [
      { label: "Brands", href: "/dashboard/brands" },
      { label: "Ready to reach out", href: "/dashboard/brands" },
      { label: "Glossier" },
    ],
  },
};
