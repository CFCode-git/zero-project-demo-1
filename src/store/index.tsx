import React, { Children } from "react";
import { Provider as TestProvider } from "./count";
export { useTestStore } from "./count";

const providers = [TestProvider];
export const Provider = (props: any) =>
  providers.reduceRight(
    (children, Parent) => <Parent>{children}</Parent>,
    props.children
  );
