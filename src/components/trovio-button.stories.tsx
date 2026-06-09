import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrovioButton } from "./trovio-button";

/**
 * TrovioButton — the primary action button. Wraps HeroUI Button with Trovio
 * variants/tones/sizes via tailwind-variants.
 */
const meta = {
  title: "Primitives/TrovioButton",
  component: TrovioButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "dashed", "custom"],
    },
    color: { control: "select", options: ["blue", "yellow"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    isLoading: { control: "boolean" },
    isDisabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Activate agent",
    variant: "primary",
    size: "md",
  },
} satisfies Meta<typeof TrovioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = { args: { variant: "secondary" } };

export const Tertiary: Story = { args: { variant: "tertiary" } };

export const Dashed: Story = { args: { variant: "dashed", children: "Add pillar" } };

export const Loading: Story = { args: { isLoading: true } };

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: "padded" },
};

/** All variants at a glance. */
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <TrovioButton {...args} variant="primary">
        Primary
      </TrovioButton>
      <TrovioButton {...args} variant="secondary">
        Secondary
      </TrovioButton>
      <TrovioButton {...args} variant="tertiary">
        Tertiary
      </TrovioButton>
      <TrovioButton {...args} variant="dashed">
        Dashed
      </TrovioButton>
    </div>
  ),
};
