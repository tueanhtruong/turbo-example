import { defineSlotRecipe } from "@pandacss/dev";

export const loadingRecipe = defineSlotRecipe({
  className: "loading",
  slots: ["base", "container", "child"],
  base: {
    base: {
      pointerEvents: "none",
      transform: "translateZ(0)",
      zIndex: 102,
    },
    container: {
      position: "relative",
      display: "inline-block",
      margin: "auto",
    },
    child: {
      display: "none",
      position: "absolute",
    },
  },

  defaultVariants: {
    size: "lg",
    variant: "primary",
    position: "relative",
    style: 1,
  },
  variants: {
    style: {
      2: {
        container: {
          width: 80,
          height: 80,
        },
        child: {
          top: 33,
          width: 13,
          height: 13,
          borderRadius: "50%",
          animationTimingFunction: "cubic-bezier(0, 1, 1, 0)",
          "&:nth-child(1)": {
            display: "initial",
            left: 8,
            animation: "lds-ellipsis1 0.6s infinite",
          },
          "&:nth-child(2)": {
            display: "initial",
            left: 8,
            animation: "lds-ellipsis2 0.6s infinite",
          },
          "&:nth-child(3)": {
            display: "initial",
            left: 32,
            animation: "lds-ellipsis2 0.6s infinite",
          },
          "&:nth-child(4)": {
            display: "initial",
            left: 56,
            animation: "lds-ellipsis3 0.6s infinite",
          },
        },
      },
      1: {
        container: {
          width: 40,
          height: 40,
          animation: "rotate 7s linear infinite",
        },
        child: {
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          animation: "zoomAnim 2s linear infinite",
          "&:nth-child(1)": {
            display: "initial",
            transform: "scale(0)",
            animationDelay: "1s",
          },
          "&:nth-child(2)": {
            display: "initial",
          },
        },
      },

      3: {
        container: {
          width: 80,
          height: 80,
          _after: {
            content: "' '",
            display: "block",
            borderRadius: "50%",
            width: 0,
            height: 0,
            margin: "8px",
            boxSizing: "border-box",
            border: "32px solid token(colors.primary.700)",
            borderColor:
              "token(colors.primary.700) transparent token(colors.primary.700) transparent",
            animation: "lds-hourglass 2s infinite",
          },
        },
      },
    },
    size: {
      md: {
        base: {
          zoom: 0.4,
        },
      },
      lg: {},
    },
    variant: {
      primary: {
        child: {
          bgColor: "primary.700",
        },
      },
      white: {
        child: {
          bgColor: "white",
        },
      },
      grey: {
        child: {
          bgColor: "grey.600",
        },
      },
    },
    position: {
      relative: {},
      absolute: {
        base: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      },
    },
  },
});
