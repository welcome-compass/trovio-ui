import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { TrovioModal } from "./trovio-modal";
import { TrovioButton } from "./trovio-button";

const meta = {
  title: "Primitives/TrovioModal",
  component: TrovioModal,
  parameters: { layout: "centered" },
} satisfies Meta<typeof TrovioModal>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <TrovioButton variant="primary" onClick={() => setOpen(true)}>
          Open modal
        </TrovioButton>
        <TrovioModal
          footer={
            <TrovioButton variant="primary" onClick={() => setOpen(false)}>
              Got it
            </TrovioButton>
          }
          isOpen={open}
          title="Activate your agent"
          onClose={() => setOpen(false)}
        >
          <p className="text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
            This is a TrovioModal. It centers on desktop and becomes a bottom
            sheet on mobile.
          </p>
        </TrovioModal>
      </>
    );
  },
};
