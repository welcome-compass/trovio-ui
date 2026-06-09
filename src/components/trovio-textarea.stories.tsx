import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrovioTextArea } from "./trovio-textarea";

const meta = {
  title: "Primitives/TrovioTextArea",
  component: TrovioTextArea,
  tags: ["autodocs"],
  args: { label: "Notes", placeholder: "Add a note for your agent…" },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TrovioTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithError: Story = { args: { error: "Notes can't be empty." } };
