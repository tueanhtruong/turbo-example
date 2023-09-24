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
    extend: {
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
      breakpoints: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      layerStyles: {},
      tokens: {
        durations: {
          fast: { value: "100ms" },
          normal: { value: "200ms" },
          slow: { value: "400ms" },
        },
        spacing: {
          xs: { value: "4px" },
          sm: { value: "8px" },
          md: { value: "12px" },
          lg: { value: "16px" },
          xl: { value: "24px" },
          "2xl": { value: "32px" },
          0: { value: "0px" },
          1: { value: "1px" },
          2: { value: "2px" },
          4: { value: "4px" },
          6: { value: "6px" },
          8: { value: "0.5rem" },
          10: { value: "0.625rem" },
          12: { value: "0.75rem" },
          16: { value: "1rem" },
          20: { value: "1.25rem" },
          24: { value: "1.5rem" },
          32: { value: "2rem" },
          40: { value: "2.5rem" },
          48: { value: "3rem" },
          64: { value: "4rem" },
          80: { value: "5rem" },
        },
        sizes: {
          screens: {
            xs: { value: "480px" },
            sm: { value: "640px" },
            md: { value: "768px" },
            lg: { value: "1024px" },
            xl: { value: "1280px" },
            "2xl": { value: "1536px" },
            "3xl": { value: "1920px" },
          },
          0: { value: "0px" },
          1: { value: "1px" },
          2: { value: "2px" },
          4: { value: "4px" },
          6: { value: "6px" },
          8: { value: "0.5rem" },
          10: { value: "0.625rem" },
          12: { value: "0.75rem" },
          16: { value: "1rem" },
          20: { value: "1.25rem" },
          24: { value: "1.5rem" },
          32: { value: "2rem" },
          40: { value: "2.5rem" },
          48: { value: "3rem" },
          64: { value: "4rem" },
          80: { value: "5rem" },
        },

        radii: {
          sm: { value: "4px" },
          md: { value: "8px" },
          lg: { value: "16px" },
        },
        colors: {
          primary: {
            100: { value: "#caeafc" },
            200: { value: "#97d2fa" },
            300: { value: "#62b0f0" },
            400: { value: "#3b8fe2" },
            500: { value: "#0361d0" },
            600: { value: "#024bb2" },
            700: { value: "#013795" },
            800: { value: "#002778" },
            900: { value: "#001b63" },
          },
          grey: {
            100: { value: "#edeff1" },
            200: { value: "#dee1e5" },
            300: { value: "#cfd4d9" },
            400: { value: "#b5bdc5" },
            500: { value: "#91979e" },
            600: { value: "#6d7176" },
            700: { value: "#484c4f" },
            800: { value: "#2d2f31" },
            900: { value: "#1b1c1e" },
          },
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
          normal: { value: "0.6px" },
          narrow: { value: "0.5px" },
          narrower: { value: "0.4px" },
          narrowest: { value: "0.3px" },
        },
      },
      keyframes: {
        spinning: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        zoomAnim: {
          "0%": {
            transform: "scale(0)",
            transformOrigin: "left",
          },
          "50%": {
            transform: "scale(1)",
            transformOrigin: "left",
          },
          "50.01%": {
            transform: "scale(1)",
            transformOrigin: "right",
          },
          "100%": {
            transform: " scale(0)",
            transformOrigin: "right",
          },
        },
        "lds-ellipsis1": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        "lds-ellipsis3": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        "lds-ellipsis2": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(24px, 0)" },
        },
        "lds-hourglass": {
          "0%": {
            transform: "rotate(0)",
            animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          },
          "50%": {
            transform: "rotate(900deg)",
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "100%": { transform: "rotate(1800deg)" },
        },
      },
    },
  },
});
