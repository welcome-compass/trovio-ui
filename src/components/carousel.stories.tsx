import type { Meta, StoryObj } from "@storybook/react-vite";

import { Carousel } from "./carousel";
import { CreatorCard } from "./creator-card";
import type { CreatorPost } from "./creator-card";
import { CreatorCardSkeleton } from "./creator-card-skeleton";

const POSTS: CreatorPost[] = [
  { caption: "15-min one-pan chicken", views: 82000, isVideo: true },
  { caption: "Sheet-pan dinner for 4", views: 140000, isVideo: true },
  { caption: "No-chop taco night", views: 61000, isVideo: true },
];

const CREATORS = [
  { name: "Maya Chen", handle: "mayacooks", oneLiner: "Her 30-minute one-pan dinners are built for parents racing the 6pm clock." },
  { name: "Darnell Brooks", handle: "thebrookskitchen", oneLiner: "Feeds a family of five on a school night and films every step." },
  { name: "Priya Nair", handle: "priyaeats", oneLiner: "Turns pantry staples into crowd-pleasing dinners kids actually finish." },
  { name: "Sam Whitfield", handle: "weeknightsam", oneLiner: "Built her whole channel around beating the dinner scramble." },
  { name: "Lucia Romano", handle: "nonnastable", oneLiner: "Reworks slow Sunday recipes into fast weeknight versions." },
  { name: "Theo Okafor", handle: "theocooks", oneLiner: "His 'clean one pan, feed four' series maps onto the effortless-dinner promise." },
];

const meta = {
  title: "Primitives/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  // Each story supplies its own children via `render`; this satisfies the
  // required-prop type at the meta level.
  args: { children: null },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A conversation rail of creator cards — arrows/fades/progress appear because it overflows. */
export const CreatorRail: Story = {
  render: () => (
    <Carousel ariaLabel="Weeknight Family Dinners">
      {CREATORS.map((c) => (
        <CreatorCard
          key={c.handle}
          handle={c.handle}
          name={c.name}
          oneLiner={c.oneLiner}
          topPosts={POSTS}
          onSave={() => {}}
          onStartCampaign={() => {}}
        />
      ))}
    </Carousel>
  ),
};

/** Loading — `chromeActive={false}` suppresses arrows/fades/progress while skeletons show. */
export const Loading: Story = {
  render: () => (
    <Carousel chromeActive={false}>
      {Array.from({ length: 6 }, (_, i) => (
        <CreatorCardSkeleton key={i} />
      ))}
    </Carousel>
  ),
};

/** Content fits — no chrome (a thin conversation still looks deliberate). */
export const FitsNoChrome: Story = {
  render: () => (
    <Carousel>
      {CREATORS.slice(0, 2).map((c) => (
        <CreatorCard
          key={c.handle}
          handle={c.handle}
          name={c.name}
          oneLiner={c.oneLiner}
          onStartCampaign={() => {}}
        />
      ))}
    </Carousel>
  ),
};
