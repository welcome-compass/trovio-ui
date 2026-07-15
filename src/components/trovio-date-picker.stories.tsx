import type { Meta, StoryObj } from "@storybook/react-vite";

import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";

import { TrovioDatePicker } from "./trovio-date-picker";

const TODAY = today(getLocalTimeZone());

const meta = {
  title: "Primitives/TrovioDatePicker",
  component: TrovioDatePicker,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { label: "Target delivery date" },
} satisfies Meta<typeof TrovioDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty — no day picked yet. */
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <div className="w-72">
        <TrovioDatePicker {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

/** A day already picked, shown in the trigger. */
export const WithValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(
      TODAY.add({ days: 14 }).toString(),
    );

    return (
      <div className="w-72">
        <TrovioDatePicker {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

/**
 * `minValue` — everything before today is unclickable, so a delivery date can't
 * be set in the past. It bounds the input, it doesn't gate the flow.
 */
export const MinValueToday: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <div className="w-72">
        <TrovioDatePicker
          {...args}
          helperText="Earliest is today."
          minValue={TODAY.toString()}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

/** With helper text below the field. */
export const WithHelperText: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <div className="w-72">
        <TrovioDatePicker
          {...args}
          helperText="We'll back-build the schedule from this date."
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

/** Disabled. */
export const Disabled: Story = {
  args: { isDisabled: true, value: TODAY.toString() },
  render: (args) => (
    <div className="w-72">
      <TrovioDatePicker {...args} />
    </div>
  ),
};
