import { log } from "logger";
import Link from "next/link";

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store() {
  log("Hey! This is Home.");
  return (
    <div className="container">
      <h1 className="title">
        Store <br />
        <span>Kitchen Sink</span>
      </h1>
      <Link href={"/dev"}>DEV page</Link>
    </div>
  );
}
