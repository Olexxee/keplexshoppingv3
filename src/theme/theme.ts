import {
  breakpoints,
  colors,
  radius,
  semantic,
  shadows,
  spacing,
  typography,
  zIndex,
} from "./index";

export const theme = {
  colors,
  semantic,
  typography,
  spacing,
  radius,
  shadows,
  breakpoints,
  zIndex,
  layout: {
    containerWidth: 1280,
    headerHeight: 72,
    footerHeight: 64,
  },
} as const;

export type AppTheme = typeof theme;
