import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrovioSkeleton } from "./trovio-skeleton";

const meta = {
  title: "Primitives/TrovioSkeleton",
  component: TrovioSkeleton,
  tags: ["autodocs"],
  args: { isLoaded: false },
  argTypes: { isLoaded: { control: "boolean" } },
  parameters: { layout: "padded" },
} satisfies Meta<typeof TrovioSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  render: (args) => (
    <div className="max-w-sm space-y-3">
      <TrovioSkeleton {...args}>
        <div className="h-24 w-full rounded-xl bg-trovio-primary/10" />
      </TrovioSkeleton>
      <TrovioSkeleton {...args}>
        <div className="h-4 w-2/3 rounded bg-trovio-primary/10" />
      </TrovioSkeleton>
    </div>
  ),
};
