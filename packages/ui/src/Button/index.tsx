import * as React from "react";

import { cx } from "~styled-system/css";
import { button } from "~styled-system/recipes";

import { Spinner } from "..";
import { ButtonProps } from "./model";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps<"button">>(
  function Button(
    {
      children,
      loading,
      className,
      fullWidth,
      disabled,
      variant,
      size,
      color,
      leftIcon,
      rightIcon,
      ...rest
    },
    ref
  ) {
    const buttonClass = button({
      variant,
      color,
      size,
      disabled: !loading && disabled,
      fullWidth,
      loading,
    });

    return (
      <button
        className={cx(buttonClass.base, className)}
        disabled={disabled || loading}
        ref={ref}
        {...rest}
      >
        {leftIcon ? (
          <div className={buttonClass.iconContainer}>{leftIcon}</div>
        ) : null}

        <div className={buttonClass.content}>{children}</div>

        {rightIcon ? (
          <div className={buttonClass.iconContainer}>{rightIcon}</div>
        ) : null}

        {loading ? <Spinner className={buttonClass.spinner} /> : undefined}
      </button>
    );
  }
) as (<E extends React.ElementType = "button">(
  props: ButtonProps<E> & React.RefAttributes<React.ElementRef<E>>
) => React.ReactElement) & { displayName?: string };

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
