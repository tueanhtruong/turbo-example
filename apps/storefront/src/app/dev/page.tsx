import { Button, Loading, Spinner } from "ui";
import { container } from "~styled-system/patterns";

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store() {
  return (
    <div
      className={container({
        maxWidth: "token(sizes.screens.lg)",
        px: "token(spacing.lg)",
        py: "token(spacing.2xl)",
      })}
    >
      <h1>Dev Component page</h1>
      <p>Button</p>

      <Button size="md">Test Button</Button>
      <Button>Test Button</Button>
      <Button size="xl">Test Button</Button>
      <Button size="xl" loading>
        Test Button
      </Button>
      <p>Spinner</p>
      <Spinner />
      <Spinner size="md" />
      <p>Loading</p>
      <Loading visible />
      <Loading visible size="md" />
      <Loading visible variant="grey" />
      <Loading visible loadingStyle={"2"} />
      <Loading visible loadingStyle={"3"} />
    </div>
  );
}
