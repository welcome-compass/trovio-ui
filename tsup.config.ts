import { defineConfig } from "tsup";

/**
 * Library build. Emits ESM + CJS + .d.ts for the components and the token
 * module. React/HeroUI/Tailwind are peers (not bundled). Tailwind utility CSS
 * is NOT emitted here — consumers generate it by adding this package to their
 * Tailwind `@source` (see README); the raw token CSS is shipped via the package
 * `exports["./tokens.css"]`.
 *
 * `@internationalized/date` is a real dependency but must stay external: our
 * date components hand `CalendarDate` instances to HeroUI's, which pass them on
 * to react-aria. Bundling it would give this package its own copy of those
 * classes, so the two sides would disagree about a date at runtime while
 * typecheck and build both stayed green.
 */
export default defineConfig({
  entry: {
    index: "src/index.ts",
    tokens: "src/tokens/design-tokens.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom", "@heroui/react", "@internationalized/date"],
});
