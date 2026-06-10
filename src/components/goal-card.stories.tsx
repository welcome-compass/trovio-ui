import type { Meta, StoryObj } from "@storybook/react-vite";
import { PiSparkle, PiCurrencyDollar, PiChartBar } from "react-icons/pi";

import { GoalCard } from "./goal-card";

const meta = {
  title: "Primitives/GoalCard",
  component: GoalCard,
  tags: ["autodocs"],
  args: {
    rank: 1,
    title: "Land brand partnerships",
    description: "Connect with brands that align with your values",
    iconGradient:
      "linear-gradient(135deg, rgba(194, 122, 255, 1) 0%, rgba(152, 16, 250, 1) 100%)",
    icon: <PiSparkle />,
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof GoalCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** While being dragged — elevated shadow + primary ring. */
export const Dragging: Story = { args: { isDragging: true } };

/** A short ranked stack, the way the onboarding goals list renders them. */
export const Stack: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-3">
      <GoalCard
        description="Connect with brands that align with your values"
        icon={<PiSparkle />}
        iconGradient="linear-gradient(135deg, rgba(194, 122, 255, 1) 0%, rgba(152, 16, 250, 1) 100%)"
        rank={1}
        title="Land brand partnerships"
      />
      <GoalCard
        description="Maximize earnings from your existing links"
        icon={<PiCurrencyDollar />}
        iconGradient="linear-gradient(135deg, rgba(5, 223, 114, 1) 0%, rgba(0, 166, 62, 1) 100%)"
        rank={2}
        title="Optimize affiliate income"
      />
      <GoalCard
        description="Get reliable forecasts for monthly earnings"
        icon={<PiChartBar />}
        iconGradient="linear-gradient(135deg, rgba(81, 162, 255, 1) 0%, rgba(21, 93, 252, 1) 100%)"
        rank={3}
        title="Predict consistent income"
      />
    </div>
  ),
};
