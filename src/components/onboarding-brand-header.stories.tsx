import type { Meta, StoryObj } from "@storybook/react-vite";

import { OnboardingBrandHeader } from "./onboarding-brand-header";

/** Stand-in for the real brand logo (an <Image>/<svg> in the app). */
const Logo = () => (
  <span className="text-section font-bold text-trovio-light-text dark:text-trovio-dark-text">
    trovio
  </span>
);

const meta = {
  title: "Primitives/OnboardingBrandHeader",
  component: OnboardingBrandHeader,
  tags: ["autodocs"],
  args: { logo: <Logo /> },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof OnboardingBrandHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Just the centered brand logo — the stranger onboarding takeover. */
export const LogoOnly: Story = {};

/** With left/right action slots (e.g. a back button + sign out). */
export const WithActions: Story = {
  args: {
    left: (
      <button
        className="text-caption text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
        type="button"
      >
        Back
      </button>
    ),
    right: (
      <button
        className="text-caption text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
        type="button"
      >
        Sign out
      </button>
    ),
  },
};
