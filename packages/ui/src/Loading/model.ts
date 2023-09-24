import { OverridableComponentProps } from "src/types";

type LocalLoadingProps = {
  visible?: boolean;
  size?: "md" | "lg";
  variant?: "white" | "primary" | "grey";
  position?: "relative" | "absolute";
  loadingStyle?: "1" | "2" | "3";
};

export type LoadingProps = OverridableComponentProps<"div", LocalLoadingProps>;
