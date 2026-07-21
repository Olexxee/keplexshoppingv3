import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import App from "./app/App";

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
