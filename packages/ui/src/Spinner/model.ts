import { ExtendableComponentProps } from "src/types";

export type SpinnerProps = ExtendableComponentProps<"svg"> & {
  size?: "sm" | "md" | "lg";
};
