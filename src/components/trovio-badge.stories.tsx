import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrovioBadge } from "./trovio-badge";

const meta = {
  title: "Primitives/TrovioBadge",
  component: TrovioBadge,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: [
        "published",
        "draft",
        "archived",
        "success",
        "warning",
        "error",
        "info",
      ],
    },
    children: { control: "text" },
  },
  args: { status: "info", children: "New" },
  parameters: { layout: "centered" },
} satisfies Meta<typeof TrovioBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(
        [
          "published",
          "draft",
          "archived",
          "success",
          "warning",
          "error",
          "info",
        ] as const
      ).map((s) => (
        <TrovioBadge key={s} status={s}>
          {s}
        </TrovioBadge>
      ))}
    </div>
  ),
};
