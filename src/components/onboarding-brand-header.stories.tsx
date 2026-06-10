import type { Meta, StoryObj } from "@storybook/react-vite";

import { BrandLogo } from "./brand-logo";

import { OnboardingBrandHeader } from "./onboarding-brand-header";

/** The real brand logo, the way the stranger onboarding takeover renders it. */
const logo = (
  <BrandLogo
    alt="Trovio"
    className="h-8 w-auto"
    darkSrc="/trovio-logo-dark-mode.png"
    lightSrc="/trovio-logo-light-mode.png"
  />
);

const meta = {
  title: "Primitives/OnboardingBrandHeader",
  component: OnboardingBrandHeader,
  tags: ["autodocs"],
  args: { logo },
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
