import * as React from "react";
import { OverridableComponentProps } from "src/types";

type LocalButtonProps = {
  color?: "primary" | "grey";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  loading?: boolean;
  rightIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "fill" | "outline" | "ghost";
};

export type ButtonProps<E extends React.ElementType> =
  OverridableComponentProps<E, LocalButtonProps>;
