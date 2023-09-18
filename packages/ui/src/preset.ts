import { definePreset } from "@pandacss/dev";
import { recipes } from "./recipes";
export const uiPreset = definePreset({
  globalCss: { html: { fontFamily: "primary" } },
  conditions: {
    extend: {
      notDisabled: "&:not(:disabled, [disabled], [data-disabled])",
    },
  },
  theme: {
    recipes,
    textStyles: {
      h1: {
        value: {
          fontSize: "5xl",
          lineHeight: "6xl",
          letterSpacing: "narrower",
          fontWeight: "semi-bold",
          lg: {
            fontSize: "6xl",
            lineHeight: "7xl",
          },
          "3xl": {
            fontSize: "7xl",
            lineHeight: "8xl",
            letterSpacing: "narrowest",
          },
        },
      },
      h2: {
        value: {
          fontSize: "3xl",
          lineHeight: "4xl",
          letterSpacing: "narrower",
          fontWeight: "semi-bold",
          lg: {
            fontSize: "4xl",
            lineHeight: "5xl",
          },
          "3xl": {
            fontSize: "6xl",
            lineHeight: "7xl",
          },
        },
      },
      h3: {
        value: {
          fontSize: "xl",
          lineHeight: "2xl",
          letterSpacing: "narrower",
          fontWeight: "semi-bold",
          lg: {
            fontSize: "2xl",
            lineHeight: "3xl",
          },
          "3xl": {
            fontSize: "4xl",
            lineHeight: "5xl",
          },
        },
      },
      h4: {
        value: {
          fontSize: "lg",
          lineHeight: "xl",
          letterSpacing: "narrower",
          fontWeight: "semi-bold",
          lg: {
            fontSize: "xl",
            lineHeight: "2xl",
          },
          "3xl": {
            fontSize: "2xl",
            lineHeight: "3xl",
          },
        },
      },
      h5: {
        value: {
          fontSize: "md",
          lineHeight: "lg",
          letterSpacing: "narrower",
          fontWeight: "semi-bold",
          lg: {
            fontSize: "lg",
            lineHeight: "xl",
          },
          "3xl": {
            fontSize: "xl",
            lineHeight: "2xl",
          },
        },
      },
      body1: {
        value: {
          fontSize: "xs",
          lineHeight: "md",
          letterSpacing: "normal",
          lg: {
            fontSize: "sm",
            lineHeight: "lg",
            letterSpacing: "narrow",
          },
          "3xl": {
            fontSize: "md",
            lineHeight: "2xl",
          },
        },
      },
      body2: {
        value: {
          fontSize: "2xs",
          lineHeight: "sm",
          letterSpacing: "normal",
          lg: {
            fontSize: "xs",
            lineHeight: "md",
            letterSpacing: "narrow",
          },
          "3xl": {
            fontSize: "sm",
            lineHeight: "lg",
          },
        },
      },
      body3: {
        value: {
          fontSize: "2xs",
          lineHeight: "sm",
          letterSpacing: "narrow",
          lg: {
            fontSize: "xs",
            lineHeight: "md",
          },
        },
      },
      body4: {
        value: {
          fontSize: "2xs",
          lineHeight: "sm",
          letterSpacing: "narrow",
        },
      },
      button: {
        value: {
          fontSize: "xs",
          lineHeight: "md",
          letterSpacing: "narrow",
          md: {
            fontSize: "sm",
            lineHeight: "lg",
          },
          lg: {
            fontSize: "md",
            lineHeight: "2xl",
          },
        },
      },
    },
    tokens: {
      radii: {
        sm: { value: "4px" },
        md: { value: "8px" },
        lg: { value: "16px" },
      },
      colors: {
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
        red: { value: "#EE0F0F" },
        green: { value: "#0FEE0F" },
      },
      fonts: {
        primary: { value: "'Poppins', sans-serif" },
      },
      fontSizes: {
        "7xl": { value: "2.8125rem" },
        "6xl": { value: "2.3125rem" },
        "5xl": { value: "2.1875rem" },
        "4xl": { value: "1.9375rem" },
        "3xl": { value: "1.6875rem" },
        "2xl": { value: "1.4375rem" },
        xl: { value: "1.1875rem" },
        lg: { value: "1.0625rem" },
        md: { value: "0.9375rem" },
        sm: { value: "0.8125rem" },
        xs: { value: "0.6875rem" },
        "2xs": { value: "0.625rem" },
      },
      lineHeights: {
        "8xl": { value: "3.25rem" },
        "7xl": { value: "2.75rem" },
        "6xl": { value: "2.5rem" },
        "5xl": { value: "2.25rem" },
        "4xl": { value: "2rem" },
        "3xl": { value: "1.75rem" },
        "2xl": { value: "1.5rem" },
        xl: { value: "1.375rem" },
        lg: { value: "1.25rem" },
        md: { value: "1rem" },
        sm: { value: "0.75rem" },
      },
      fontWeights: {
        regular: { value: "400" },
        "semi-bold": { value: "600" },
      },
      letterSpacings: {
        normal: { value: "0px" },
        narrow: { value: "-0.1px" },
        narrower: { value: "-0.2px" },
        narrowest: { value: "-0.4px" },
      },
    },
  },
});
