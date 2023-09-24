import * as React from "react";
import { cx } from "~styled-system/css";
import { loading } from "~styled-system/recipes";
import { LoadingProps } from "./model";

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(function Loading(
  { className, size, variant, position, visible, loadingStyle, ...rest },
  ref
) {
  const loadingClass = loading({
    size,
    variant,
    position,
    style: loadingStyle,
  });
  if (visible)
    return (
      <div className={cx(loadingClass.base, className)} ref={ref} {...rest}>
        <div className={cx(loadingClass.container)}>
          <div className={cx(loadingClass.child)} />
          <div className={cx(loadingClass.child)} />
          <div className={cx(loadingClass.child)} />
          <div className={cx(loadingClass.child)} />
        </div>
      </div>
    );
  return null;
});

Loading.displayName = "Loading";

export { Loading };
export type { LoadingProps };
