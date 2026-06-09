import type { Preview, Decorator } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/styles/storybook.css";

const withSurface: Decorator = (Story) => (
  <div className="min-h-screen bg-trovio-light-bg p-6 font-sans text-trovio-light-text antialiased dark:bg-trovio-dark-bg dark:text-trovio-dark-text">
    <Story />
  </div>
);

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    options: {
      storySort: { order: ["Foundations", "Primitives", "Components"] },
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    viewport: {
      options: {
        mobile: { name: "Mobile", styles: { width: "390px", height: "844px" } },
        tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } },
        desktop: { name: "Desktop", styles: { width: "1280px", height: "900px" } },
      },
    },
    backgrounds: { disable: true },
  },
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
    withSurface,
  ],
};

export default preview;
