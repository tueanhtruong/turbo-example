import { defineSlotRecipe } from "@pandacss/dev";

export const spinnerRecipe = defineSlotRecipe({
  className: "spinner",
  slots: ["base"],
  base: {
    base: {
      font: "inherit",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      lineHeight: "0",
      color: "inherit",
      transition: "width 0.5s linear",
      transformOrigin: "center",

      "& .quart-circle": {
        animation: "spinning 0.6s linear infinite",
        transformOrigin: "center",
      },

      "& .circle": {
        opacity: "30%",
      },
    },
  },

  defaultVariants: {
    size: "lg",
  },
  variants: {
    size: {
      sm: {
        base: {
          w: "20",
          h: "20",
        },
      },
      md: {
        base: {
          w: "24",
          h: "24",
        },
      },
      lg: {
        base: {
          w: "32",
          h: "32",
        },
      },
    },
  },
});
