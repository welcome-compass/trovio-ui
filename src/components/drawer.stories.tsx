import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { Drawer } from "./drawer";
import { TrovioButton } from "./trovio-button";
import { SegmentedToggle } from "./segmented-toggle";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Draft a pitch",
    eyebrow: "Stork Exchange",
    children: null,
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [channel, setChannel] = useState("email");

    return (
      <div className="p-10">
        <TrovioButton variant="primary" onClick={() => setOpen(true)}>
          Open drawer
        </TrovioButton>
        <Drawer
          {...args}
          footer={
            <TrovioButton className="w-full" variant="primary">
              Generate
            </TrovioButton>
          }
          headerExtra={
            <SegmentedToggle
              options={[
                { value: "email", label: "Email" },
                { value: "ig_dm", label: "IG DM" },
              ]}
              value={channel}
              onChange={setChannel}
            />
          }
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <p className="text-body text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
            Drawer body content — forms, drafts, anything that should happen in
            context without losing the page behind it.
          </p>
        </Drawer>
      </div>
    );
  },
};
