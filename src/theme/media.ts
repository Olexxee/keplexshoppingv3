import { css } from "styled-components";
import { breakpoints } from "./breakpoints";

type Media = Record<
  keyof typeof breakpoints,
  (...args: Parameters<typeof css>) => ReturnType<typeof css>
>;

export const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  acc[key as keyof typeof breakpoints] = (...args) => css`
    @media (min-width: ${value}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {} as Media);
