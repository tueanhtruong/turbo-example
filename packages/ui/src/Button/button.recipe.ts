import { RecipeConfig, defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
  },
  variants: {
    visual: {
      funky: { bg: "green", color: "primary" },
      edgy: { border: "1px solid red" },
    },
    size: {
      sm: { padding: "4px", fontSize: "12px" },
      lg: { padding: "8px", fontSize: "40px" },
    },
    shape: {
      square: { borderRadius: "0" },
      circle: { borderRadius: "50%" },
    },
  },
  defaultVariants: {
    visual: "funky",
    size: "lg",
    shape: "circle",
  },
}) as RecipeConfig;
