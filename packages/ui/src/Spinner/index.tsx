import * as React from "react";
import { cx } from "~styled-system/css";
import { spinner } from "~styled-system/recipes";
import { SpinnerProps } from "./model";

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(function Spinner(
  { className, size, ...rest },
  ref
) {
  return (
    <svg
      aria-hidden="true"
      className={cx(spinner({ size }).base, "mag-icon", className)}
      fill="currentColor"
      ref={ref}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        className="circle"
        clipRule="evenodd"
        d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16Z"
        fillRule="evenodd"
      />
      <path
        className="quart-circle"
        clipRule="evenodd"
        d="M16.003 2.96158C16.0455 2.41093 16.5263 1.99898 17.077 2.04146C18.5467 2.15485 19.9916 2.49984 21.3576 3.06567C23.0562 3.76924 24.5995 4.80047 25.8995 6.10049C27.1996 7.40051 28.2308 8.94386 28.9344 10.6424C29.5002 12.0084 29.8452 13.4534 29.9586 14.9231C30.0011 15.4737 29.5891 15.9545 29.0385 15.997C28.4878 16.0395 28.007 15.6276 27.9645 15.0769C27.8673 13.8172 27.5716 12.5787 27.0866 11.4078C26.4835 9.95187 25.5996 8.629 24.4853 7.5147C23.371 6.4004 22.0482 5.51649 20.5922 4.91343C19.4214 4.42843 18.1829 4.13273 16.9231 4.03554C16.3725 3.99305 15.9605 3.51223 16.003 2.96158Z"
        fillRule="evenodd"
      />
    </svg>
  );
});

Spinner.displayName = "Spinner";

export { Spinner };
export type { SpinnerProps };
