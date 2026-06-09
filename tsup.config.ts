import { defineConfig } from "tsup";

/**
 * Library build. Emits ESM + CJS + .d.ts for the components and the token
 * module. React/HeroUI/Tailwind are peers (not bundled). Tailwind utility CSS
 * is NOT emitted here — consumers generate it by adding this package to their
 * Tailwind `@source` (see README); the raw token CSS is shipped via the package
 * `exports["./tokens.css"]`.
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
  external: ["react", "react-dom", "@heroui/react"],
});
