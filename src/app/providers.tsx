import type{ PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../theme";
import { GlobalStyles } from "./GlobalStyles";

interface Props extends PropsWithChildren {}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
