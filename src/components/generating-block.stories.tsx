import type { Meta, StoryObj } from "@storybook/react-vite";

import { GeneratingBlock } from "./generating-block";

const meta = {
  title: "Primitives/GeneratingBlock",
  component: GeneratingBlock,
  tags: ["autodocs"],
  argTypes: {
    message: { control: "text" },
    lines: { control: { type: "number", min: 1, max: 9 } },
  },
  args: { lines: 3 },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GeneratingBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Bare shimmer — no status row when `message` is omitted. */
export const Default: Story = {};

/** Status line under the shimmer — pulsing dot + muted caption. */
export const WithMessage: Story = {
  args: { message: "Compiling what Trovio sees in your content…" },
};

/** Longer section placeholder — widths repeat the 100/92/66 pattern. */
export const SixLines: Story = {
  args: {
    lines: 6,
    message: "Reading through your recent posts…",
  },
};
