import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { OfferField } from "./offer-field";

const meta = {
  title: "Primitives/OfferField",
  component: OfferField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { value: null, onChange: () => {} },
} satisfies Meta<typeof OfferField>;

export default meta;
type Story = StoryObj<typeof meta>;

const Controlled = (args: React.ComponentProps<typeof OfferField>) => {
  const [value, setValue] = useState<number | null>(args.value);

  return (
    <div className="w-72">
      <OfferField {...args} value={value} onChange={setValue} />
    </div>
  );
};

/**
 * **The common case.** Most creators have stated no deal preferences, so there
 * is no range to show: no caption, no meter, just the field. This is the
 * default the control is designed around, not a degradation of the one below.
 */
export const NoRange: Story = {
  render: (args) => <Controlled {...args} />,
};

/** A creator who stated both bounds, before the brand has named a number. */
export const FullRange: Story = {
  args: { rangeMin: 250, rangeMax: 450 },
  render: (args) => <Controlled {...args} />,
};

/** The offer sits inside the stated range. */
export const WithinRange: Story = {
  args: { value: 300, rangeMin: 250, rangeMax: 450 },
  render: (args) => <Controlled {...args} />,
};

/**
 * Below the stated range — flagged, never blocked. The brand can still lock in
 * a number the creator has pre-declared they'd refuse; that's a conversation,
 * not a validation error.
 */
export const BelowRange: Story = {
  args: { value: 50, rangeMin: 250, rangeMax: 450 },
  render: (args) => <Controlled {...args} />,
};

/** Above the stated range — noted neutrally. Nobody minds being overpaid. */
export const AboveRange: Story = {
  args: { value: 600, rangeMin: 250, rangeMax: 450 },
  render: (args) => <Controlled {...args} />,
};

/**
 * Half-open, floor only — "$250+". The band runs to the edge of the track
 * because there is no upper bound to draw, rather than to one we invented.
 */
export const FloorOnly: Story = {
  args: { value: 400, rangeMin: 250 },
  render: (args) => <Controlled {...args} />,
};

/** Half-open, ceiling only — "up to $450". */
export const CeilingOnly: Story = {
  args: { value: 200, rangeMax: 450 },
  render: (args) => <Controlled {...args} />,
};

/**
 * Product exchange: the creator states a minimum product value, so the caption
 * takes a different lead-in and stays half-open.
 */
export const ProductValue: Story = {
  args: {
    label: "Product value",
    value: 140,
    rangeMin: 100,
    rangeLabel: "Wants product worth",
    helperText: "An estimate of what you're sending — we don't price it for you.",
  },
  render: (args) => <Controlled {...args} />,
};

/**
 * An off-range value the meter still has to place: the scale stretches to fit
 * rather than clipping the marker, because it is cosmetic.
 */
export const FarOutsideRange: Story = {
  args: { value: 5000, rangeMin: 250, rangeMax: 450 },
  render: (args) => <Controlled {...args} />,
};

/**
 * An inverted range (min > max) is unsatisfiable, so it reads as unanswered and
 * degrades to the no-range case. `min<=max` isn't enforced at the write end
 * yet, so this shape is reachable today.
 */
export const InvertedRangeDegrades: Story = {
  args: { value: 300, rangeMin: 500, rangeMax: 100 },
  render: (args) => <Controlled {...args} />,
};

/** Disabled. */
export const Disabled: Story = {
  args: { value: 300, rangeMin: 250, rangeMax: 450, isDisabled: true },
  render: (args) => <Controlled {...args} />,
};
