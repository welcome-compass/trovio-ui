import type { Meta, StoryObj } from "@storybook/react-vite";

import { ColorSwatches } from "./color-swatches";
import { TypeSpecimen } from "./type-specimen";

import { radius, shadow } from "../tokens/design-tokens";

/**
 * Foundations — tokens rendered from `config/design-tokens.ts` (the canonical
 * source). Toggle the theme (toolbar) to see light/dark; toggle viewport to
 * test responsive.
 */
const meta: Meta = {
  title: "Foundations/Tokens",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Colors: Story = { render: () => <ColorSwatches /> };

export const Typography: Story = { render: () => <TypeSpecimen /> };

export const RadiusAndShadow: Story = {
  render: () => (
    <div className="space-y-10">
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          Radius
        </h3>
        <div className="flex flex-wrap gap-6">
          {Object.entries(radius).map(([k, v]) => (
            <div key={k} className="space-y-2 text-center">
              <div
                className="h-20 w-20 border border-trovio-light-border bg-trovio-primary/15 dark:border-trovio-dark-border"
                style={{ borderRadius: v }}
              />
              <p className="text-xs text-trovio-light-text dark:text-trovio-dark-text">
                {k}
              </p>
              <p className="font-mono text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
                {v}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          Shadow
        </h3>
        <div className="flex flex-wrap gap-8">
          {Object.entries(shadow).map(([k, v]) => (
            <div key={k} className="space-y-2 text-center">
              <div
                className="h-20 w-20 rounded-xl bg-trovio-light-surface dark:bg-trovio-dark-surface"
                style={{ boxShadow: v }}
              />
              <p className="text-xs text-trovio-light-text dark:text-trovio-dark-text">
                shadow-{k}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
