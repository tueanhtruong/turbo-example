import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  // entry: { index: "./src/index.tsx" },
  // // sourcemap: true,
  // clean: false,
  // target: "es2021",
  // format: "esm",
  // treeshake: true,
  // // minify: options.minify ? "terser" : false,
  // splitting: true,
  // terserOptions:{
  // },
  // terserOptions: {
  //   module: true,
  //   ecma: 2021,
  //   format: {
  //     ecma: 2021,
  //   },
  // },
  entry: { index: "./src/index.tsx" },
  external: ["styled-system"],
  banner: {
    js: "'use client'",
  },
  ...options,
}));
