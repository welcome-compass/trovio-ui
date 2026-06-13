import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { TrovioSelect } from "./trovio-select";

const STATUS = [
  { key: "new", label: "New" },
  { key: "drafting", label: "Drafting" },
  { key: "reachedOut", label: "Reached out" },
  { key: "archived", label: "Archived" },
];

const meta = {
  title: "Primitives/TrovioSelect",
  component: TrovioSelect,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TrovioSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { options: STATUS, ariaLabel: "Status" },
  render: (args) => {
    const Demo = () => {
      const [value, setValue] = useState("drafting");

      return (
        <TrovioSelect {...args} selectedKey={value} onSelectionChange={setValue} />
      );
    };

    return <Demo />;
  },
};

export const WithLabel: Story = {
  args: {
    options: STATUS,
    label: "Status",
    helperText: "Where this brand is in your pipeline.",
    selectedKey: "new",
  },
};
