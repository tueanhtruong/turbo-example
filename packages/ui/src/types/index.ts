export type ExtendableComponentProps<
  E extends React.ElementType,
  B = Record<never, never>
> = Omit<React.ComponentPropsWithoutRef<E>, keyof B> & B;
export type OverridableComponentProps<
  E extends React.ElementType,
  B = Record<never, never>
> = {
  component?: E;
} & ExtendableComponentProps<E, B>;
