import { button } from "~styled-system/recipes";

export const Button = () => {
  // will apply size: small, color: primary, css: { border: '2px solid blue' }
  return <button className={button({ size: "sm" })}>Click Me</button>;
};
