import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrovioButton } from "./trovio-button";
import { EmailMessage } from "./email-message";

const meta = {
  title: "Components/EmailMessage",
  component: EmailMessage,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmailMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

const BODY = `Hey Glossier team,

My audience of 38K skews exactly where you live — beauty-curious twenty-somethings who screenshot routines and actually buy. My get-ready posts pull a 4.2% engagement rate, well above my baseline.

I'd love to put together a partnership that feels native, not an ad. Could I send over a couple of concepts?

— Derrick`;

export const Recommended: Story = {
  args: {
    highlighted: true,
    subject: "Your audience already talks about Glossier",
    body: BODY,
    fromName: "Derrick Showers",
    fromEmail: "derrick@creator.com",
    to: "partnerships@glossier.com",
    tag: (
      <span className="text-micro font-semibold uppercase tracking-wide text-trovio-primary">
        Recommended
      </span>
    ),
    actions: (
      <>
        <TrovioButton size="sm" variant="primary">
          Send via email
        </TrovioButton>
        <TrovioButton size="sm" variant="secondary">
          Copy
        </TrovioButton>
      </>
    ),
  },
};

export const Plain: Story = {
  args: {
    subject: "4.2% engagement on beauty content — let's talk",
    body: BODY,
    fromName: "Derrick",
    to: "Glossier team",
  },
};
