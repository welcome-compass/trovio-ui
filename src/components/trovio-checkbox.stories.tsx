import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { TrovioCheckbox } from "./trovio-checkbox";

const meta = {
  title: "Primitives/TrovioCheckbox",
  component: TrovioCheckbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TrovioCheckbox>;

export default meta;
type Story = StoryObj;

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    return (
      <label className="flex items-center gap-2 text-sm text-trovio-light-text dark:text-trovio-dark-text">
        <TrovioCheckbox
          aria-label="Email me updates"
          checked={checked}
          onChange={setChecked}
        />
        Email me updates
      </label>
    );
  },
};
