import type { Meta, StoryObj } from "@storybook/react-vite";

import { ClampText } from "./clamp-text";

const LONG =
  "Creators normalize deal-hunting, comparing options, and waiting for the " +
  "right baby gear finds — your audience already trusts you for practical " +
  "picks, which is exactly the buying mindset this brand wants in the room " +
  "when parents make their registry decisions.";

const meta = {
  title: "Primitives/ClampText",
  component: ClampText,
  tags: ["autodocs"],
  argTypes: { lines: { control: "number" } },
  args: {
    lines: 2,
    children: LONG,
    className:
      "max-w-sm text-caption text-trovio-light-text-muted dark:text-trovio-dark-text-muted",
  },
} satisfies Meta<typeof ClampText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleLine: Story = { args: { lines: 1 } };

/** Short content never shows the toggle. */
export const NoOverflow: Story = { args: { children: "Short and sweet." } };
