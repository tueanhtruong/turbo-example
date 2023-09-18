import { defineConfig } from "@pandacss/dev";
import { uiPreset } from "./src/preset";
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx,js,jsx}", "./src/**.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  prefix: "ui",

  // Useful for theme customization
  theme: {
    extend: {},
  },
  presets: [uiPreset],

  // The output directory for your css system
  emitPackage: true,
  outdir: "styled-system",
  jsxFramework: "react",
  outExtension: "js",
  // staticCss: {
  //   recipes: Object.keys({ ...recipes }).reduce(
  //     (obj, r) => ({ ...obj, [r]: ["*"] }),
  //     {}
  //   ),
  // },
});
