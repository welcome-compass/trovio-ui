import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { StatusSelect, type StatusOption } from "./status-select";

const BRAND_STATUS: StatusOption[] = [
  { key: "favorited", label: "Favorite", color: "#9A6BFF" },
  { key: "drafting", label: "Drafting", color: "#FFB800" },
  { key: "reachedOut", label: "Reached out", color: "#6666FF" },
  { key: "followedUp", label: "Follow up", color: "#3E89BA" },
  { key: "archived", label: "Archived", color: "rgba(27,27,40,0.45)" },
];

const meta = {
  title: "Components/StatusSelect",
  component: StatusSelect,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof StatusSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Interactive — open the pill and pick a state. */
export const Default: Story = {
  args: { options: BRAND_STATUS, value: "drafting", onChange: () => {} },
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState("drafting");

      return (
        <StatusSelect
          ariaLabel="Brand status"
          options={BRAND_STATUS}
          value={value}
          onChange={setValue}
        />
      );
    };

    return <Demo />;
  },
};

/** Disabled while a write is in flight. */
export const Disabled: Story = {
  args: {
    options: BRAND_STATUS,
    value: "reachedOut",
    disabled: true,
    onChange: () => {},
  },
};
