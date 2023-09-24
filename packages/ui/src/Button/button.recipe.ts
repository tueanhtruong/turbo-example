import { defineSlotRecipe } from "@pandacss/dev";

export const buttonRecipe = defineSlotRecipe({
  className: "button",
  slots: ["content", "iconContainer", "base", "spinner"],
  base: {
    base: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      h: "fit-content",

      border: "none",
      outline: "none",
      outlineOffset: "0",
      borderRadius: "md",
      boxSizing: "border-box",

      letterSpacing: "narrow",
      fontWeight: "semi-bold",
      cursor: "pointer",
      userSelect: "none",
      transition: "all .2s ease-in-out",
    },
    spinner: {
      pos: "absolute",
    },
    iconContainer: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",

      // "& .mag-icon": {
      //   w: "inherit",
      //   h: "inherit",
      // },
    },
    content: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  defaultVariants: {
    variant: "fill",
    fullWidth: false,
    color: "primary",
    size: "lg",
    loading: false,
    disabled: false,
  },

  variants: {
    disabled: {
      true: {
        base: {
          pointerEvents: "none",
        },
      },
      false: {},
    },

    variant: {
      fill: {
        base: {
          color: "white",
        },
      },

      outline: {
        base: {
          bg: "white",
        },
      },

      ghost: {
        base: {
          bg: "transparent",
        },
      },
    },

    fullWidth: {
      true: {
        base: {
          w: "100%",
        },
      },
      false: {
        base: {
          w: "fit-content",
        },
      },
    },

    color: {
      primary: {},

      // secondary: {},

      grey: {},

      // danger: {},
    },

    loading: {
      true: {
        base: {
          opacity: "0.5",
          pointerEvents: "none",
        },
        content: {
          visibility: "hidden",
        },
        iconContainer: {
          visibility: "hidden",
        },
      },
      false: {},
    },

    size: {
      sm: {
        base: {
          px: "8",
          py: "4",
          gap: "4",

          fontSize: "xs",
          lineHeight: "md",

          // ".mag-icon": {
          //   h: "16",
          //   w: "16",
          // },
        },
        spinner: {
          h: "16",
          w: "16",
        },
      },

      md: {
        base: {
          px: "12",
          py: "6",
          gap: "6",

          fontSize: "sm",
          lineHeight: "lg",

          // ".mag-icon": {
          //   h: "20",
          //   w: "20",
          // },
        },
        spinner: {
          h: "20",
          w: "20",
        },
      },

      lg: {
        base: {
          px: "16",
          py: "8",
          gap: "8",

          fontSize: "md",
          lineHeight: "2xl",

          // ".mag-icon": {
          //   h: "20",
          //   w: "20",
          // },
        },
        spinner: {
          h: "20",
          w: "20",
        },
      },

      xl: {
        base: {
          px: "16",
          py: "12",
          gap: "12",

          fontSize: "md",
          lineHeight: "2xl",
          textTransform: "uppercase",

          // ".mag-icon": {
          //   h: "24",
          //   w: "24",
          // },
        },
        spinner: {
          h: "24",
          w: "24",
        },
      },
    },
  },

  compoundVariants: [
    // `fill` variant section
    {
      variant: "fill",
      color: "primary",
      css: {
        base: {
          bg: "primary.500",

          _hover: {
            bg: "primary.400",
          },

          _active: {
            bg: "primary.600",
          },

          _focusWithin: {
            bg: "primary.500",
            boxShadow: "inset 0 0 0 token(borders.2) token(colors.primary.300)",
          },
        },
      },
    },
    // {
    //   variant: "fill",
    //   color: "secondary",
    //   css: {
    //     base: {
    //       bg: "secondary.500",

    //       _hover: {
    //         bg: "secondary.400",
    //       },

    //       _active: {
    //         bg: "secondary.600",
    //       },

    //       _focusWithin: {
    //         bg: "secondary.500",
    //         boxShadow:
    //           "inset 0 0 0 token(borders.2) token(colors.secondary.300)",
    //       },
    //     },
    //   },
    // },
    {
      variant: "fill",
      color: "grey",
      css: {
        base: {
          bg: "grey.700",

          _hover: {
            bg: "grey.600",
          },

          _active: {
            bg: "grey.800",
          },

          _focusWithin: {
            bg: "grey.700",
            boxShadow: "inset 0 0 0 token(borders.2) token(colors.grey.400)",
          },
        },
      },
    },
    // {
    //   variant: "fill",
    //   color: "danger",
    //   css: {
    //     base: {
    //       bg: "red.500",

    //       _hover: {
    //         bg: "red.400",
    //       },

    //       _active: {
    //         bg: "red.600",
    //       },

    //       _focusWithin: {
    //         bg: "red.500",
    //         boxShadow: "inset 0 0 0 token(borders.2) token(colors.red.300)",
    //       },
    //     },
    //   },
    // },
    {
      variant: "fill",
      disabled: true,
      css: {
        base: {
          bg: "grey.200",
        },
      },
    },

    // `outline` variant section
    {
      variant: "outline",
      color: "primary",
      css: {
        base: {
          color: "primary.500",
          boxShadow: "inset 0 0 0 token(borders.1) token(colors.primary.500)",

          _hover: {
            bg: "primary.100",
            color: "primary.400",
            boxShadow: "inset 0 0 0 token(borders.1) token(colors.primary.400)",
          },

          _active: {
            bg: "primary.200",
            color: "primary.600",
            boxShadow: "inset 0 0 0 token(borders.1) token(colors.primary.600)",
          },

          _focusWithin: {
            bg: "primary.100",
            color: "primary.500",
            boxShadow:
              "inset 0 0 0 token(borders.2) token(colors.primary.300) !",
          },
        },
      },
    },
    // {
    //   variant: "outline",
    //   color: "secondary",
    //   css: {
    //     base: {
    //       color: "secondary.500",
    //       boxShadow: "inset 0 0 0 token(borders.1) token(colors.secondary.500)",

    //       _hover: {
    //         bg: "secondary.100",
    //         color: "secondary.400",
    //         boxShadow:
    //           "inset 0 0 0 token(borders.1) token(colors.secondary.400)",
    //       },

    //       _active: {
    //         bg: "secondary.200",
    //         color: "secondary.600",
    //         boxShadow:
    //           "inset 0 0 0 token(borders.1) token(colors.secondary.600)",
    //       },

    //       _focusWithin: {
    //         bg: "secondary.100",
    //         color: "secondary.500",
    //         boxShadow:
    //           "inset 0 0 0 token(borders.2) token(colors.secondary.300) !",
    //       },
    //     },
    //   },
    // },
    {
      variant: "outline",
      color: "grey",
      css: {
        base: {
          color: "grey.700",
          boxShadow: "inset 0 0 0 token(borders.1) token(colors.grey.700)",

          _hover: {
            bg: "grey.100",
            color: "grey.600",
            boxShadow: "inset 0 0 0 token(borders.1) token(colors.grey.600)",
          },

          _active: {
            bg: "grey.200",
            color: "grey.800",
            boxShadow: "inset 0 0 0 token(borders.1) token(colors.grey.800)",
          },

          _focusWithin: {
            bg: "grey.100",
            color: "grey.700",
            boxShadow: "inset 0 0 0 token(borders.2) token(colors.grey.400) !",
          },
        },
      },
    },
    // {
    //   variant: "outline",
    //   color: "danger",
    //   css: {
    //     base: {
    //       color: "red.500",
    //       boxShadow: "inset 0 0 0 token(borders.1) token(colors.red.500)",

    //       _hover: {
    //         bg: "red.100",
    //         color: "red.400",
    //         boxShadow: "inset 0 0 0 token(borders.1) token(colors.red.400)",
    //       },

    //       _active: {
    //         bg: "red.200",
    //         color: "red.600",
    //         boxShadow: "inset 0 0 0 token(borders.1) token(colors.red.600)",
    //       },

    //       _focusWithin: {
    //         bg: "red.100",
    //         color: "red.500",
    //         boxShadow: "inset 0 0 0 token(borders.2) token(colors.red.300) !",
    //       },
    //     },
    //   },
    // },
    {
      variant: "outline",
      disabled: true,
      css: {
        base: {
          color: "grey.200",
          boxShadow: "inset 0 0 0 token(borders.1) token(colors.grey.200)",
        },
      },
    },

    // `ghost` variant section
    {
      variant: "ghost",
      color: "primary",
      css: {
        base: {
          color: "primary.500",

          _hover: {
            bg: "primary.100",
            color: "primary.400",
          },

          _active: {
            bg: "primary.200",
            color: "primary.600",
          },

          _focusWithin: {
            bg: "transparent",
            color: "primary.500",
            boxShadow: "inset 0 0 0 token(borders.2) token(colors.primary.300)",
          },
        },
      },
    },
    // {
    //   variant: "ghost",
    //   color: "secondary",
    //   css: {
    //     base: {
    //       color: "secondary.500",

    //       _hover: {
    //         bg: "secondary.100",
    //         color: "secondary.400",
    //       },

    //       _active: {
    //         bg: "secondary.200",
    //         color: "secondary.600",
    //       },

    //       _focusWithin: {
    //         bg: "transparent",
    //         color: "secondary.500",
    //         boxShadow:
    //           "inset 0 0 0 token(borders.2) token(colors.secondary.300)",
    //       },
    //     },
    //   },
    // },
    {
      variant: "ghost",
      color: "grey",
      css: {
        base: {
          color: "grey.700",

          _hover: {
            bg: "grey.100",
            color: "grey.600",
          },

          _active: {
            bg: "grey.200",
            color: "grey.800",
          },

          _focusWithin: {
            bg: "transparent",
            color: "grey.700",
            boxShadow: "inset 0 0 0 token(borders.2) token(colors.grey.400)",
          },
        },
      },
    },
    // {
    //   variant: "ghost",
    //   color: "danger",
    //   css: {
    //     base: {
    //       color: "red.500",

    //       _hover: {
    //         bg: "red.100",
    //         color: "red.400",
    //       },

    //       _active: {
    //         bg: "red.200",
    //         color: "red.600",
    //       },

    //       _focusWithin: {
    //         bg: "transparent",
    //         color: "red.500",
    //         boxShadow: "inset 0 0 0 token(borders.2) token(colors.red.300)",
    //       },
    //     },
    //   },
    // },
    {
      variant: "ghost",
      disabled: true,
      css: {
        base: {
          color: "grey.200",
        },
      },
    },
  ],
});
