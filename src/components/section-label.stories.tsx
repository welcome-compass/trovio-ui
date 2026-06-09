import type { Meta, StoryObj } from "@storybook/react-vite";

import { SectionLabel } from "./section-label";

const meta = {
  title: "Primitives/SectionLabel",
  component: SectionLabel,
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "radio", options: ["muted", "primary"] },
    children: { control: "text" },
  },
  args: { children: "Your workspaces" },
  parameters: { layout: "padded" },
} satisfies Meta<typeof SectionLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The standard page eyebrow — muted, used above every dashboard section. */
export const Muted: Story = {};

/** Emphasis tone — reserved for previews/teasers (locked-feature mini-pages). */
export const Primary: Story = {
  args: { tone: "primary", children: "Media Kit" },
};
