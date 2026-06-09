import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { TrovioSwitch } from "./trovio-switch";

const meta = {
  title: "Primitives/TrovioSwitch",
  component: TrovioSwitch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TrovioSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    const [on, setOn] = useState(true);

    return (
      <TrovioSwitch
        checked={on}
        helperText="Get a nudge when your agent finishes."
        label="Notifications"
        onChange={setOn}
      />
    );
  },
};
