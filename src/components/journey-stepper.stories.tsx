import type { Meta, StoryObj } from "@storybook/react-vite";

import { JourneyStepper } from "./journey-stepper";

const meta = {
  title: "Components/JourneyStepper",
  component: JourneyStepper,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof JourneyStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The acquainted 4-step journey: two done, current = Activate, one upcoming. */
export const Acquainted: Story = {
  args: {
    steps: [
      { label: "Content", status: "completed" },
      { label: "Strategy", status: "completed" },
      { label: "Activate", status: "current" },
      { label: "Your agent goes to work", status: "upcoming" },
    ],
    onCurrentClick: () => {},
  },
};

export const FirstStep: Story = {
  args: {
    steps: [
      { label: "Content", status: "current" },
      { label: "Strategy", status: "upcoming" },
      { label: "Activate", status: "upcoming" },
      { label: "Grow", status: "upcoming" },
    ],
  },
};

export const ThreeStep: Story = {
  args: {
    steps: [
      { label: "Content", status: "completed" },
      { label: "Strategy", status: "current" },
      { label: "Activate", status: "upcoming" },
    ],
  },
};

/** Current step still working — spinning arc instead of the static ring. Used
 *  on the acquainted living screen while the analysis is being generated. */
export const LoadingStep: Story = {
  args: {
    steps: [
      { label: "Content", status: "completed" },
      { label: "Strategy", status: "current", loading: true },
      { label: "Activate", status: "upcoming" },
      { label: "Grow", status: "upcoming" },
    ],
  },
};

/** With a momentum `note` chip below the rail — a calm "almost there" status
 *  badge (sparkle + soft pill), not a button. Used to make a journey read as a
 *  step toward something, not a finished state. */
export const WithNote: Story = {
  args: {
    steps: [
      { label: "Content", status: "completed" },
      { label: "Strategy", status: "completed" },
      { label: "Activate", status: "current" },
      { label: "Your agent goes to work", status: "upcoming" },
    ],
    onCurrentClick: () => {},
    note: "You're almost there",
  },
};
