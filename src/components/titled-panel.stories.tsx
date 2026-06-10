import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitledPanel } from "./titled-panel";

const meta = {
  title: "Components/TitledPanel",
  component: TitledPanel,
  tags: ["autodocs"],
  argTypes: {
    titleSize: {
      control: "select",
      options: ["display", "hero", "section", "body-lg", "body"],
    },
    titleWeight: {
      control: "select",
      options: [undefined, "extralight", "light", "normal", "medium", "semibold"],
    },
  },
  args: {
    title: "Stay up to date",
    children:
      "Happy holidays from the Trovio team — we made you something. Take a look.",
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof TitledPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoUp: Story = {
  render: (args) => (
    <div className="grid gap-8 lg:grid-cols-2">
      <TitledPanel {...args} />
      <TitledPanel title="What's new">
        Your media kit just got a fresh look — see what changed.
      </TitledPanel>
    </div>
  ),
};
