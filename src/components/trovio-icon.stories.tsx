import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  PiPlusDuotone,
  PiPencilSimpleDuotone,
  PiTrashDuotone,
  PiHeartDuotone,
  PiSparkleDuotone,
} from "react-icons/pi";

import { TrovioIcon } from "./trovio-icon";

const meta = {
  title: "Primitives/TrovioIcon",
  component: TrovioIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    icon: PiPlusDuotone,
    size: 28,
  },
} satisfies Meta<typeof TrovioIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Flat by default — the duotone background box is removed. */
export const Default: Story = {};

/** Opt in to `duotone` to keep the fill for decorative / feature icons. */
export const Duotone: Story = {
  args: { icon: PiHeartDuotone, duotone: true },
};

/**
 * Flat (top row) vs raw duotone (bottom row) for the same icons — the top row
 * is what utility icons should look like; the bottom shows the stray tinted box.
 */
export const FlatVsDuotone: Story = {
  render: (args) => {
    const icons = [
      PiPlusDuotone,
      PiPencilSimpleDuotone,
      PiTrashDuotone,
      PiSparkleDuotone,
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", gap: 20, color: "#6666ff" }}>
          {icons.map((icon, i) => (
            <TrovioIcon key={i} icon={icon} size={32} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 20, color: "#6666ff" }}>
          {icons.map((icon, i) => (
            <TrovioIcon key={i} duotone icon={icon} size={32} />
          ))}
        </div>
      </div>
    );
  },
};
