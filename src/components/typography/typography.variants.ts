import { cva } from "class-variance-authority";

export const typographyVariants = cva("text-text-primary", {
  variants: {
    variant: {
      displayLg: "text-5xl md:text-6xl font-bold tracking-tight",

      displayMd: "text-4xl md:text-5xl font-bold tracking-tight",

      displaySm: "text-3xl md:text-4xl font-bold",

      h1: "text-4xl md:text-5xl font-bold tracking-tight",

      h2: "text-3xl md:text-4xl font-semibold",

      h3: "text-2xl font-semibold",

      title: "text-xl font-semibold",

      subtitle: "text-lg font-medium",

      body: "text-base leading-7",

      bodySm: "text-sm leading-6",

      caption: "text-xs",

      label: "text-sm font-medium",

      code: "font-mono text-sm",
    },

    color: {
      inherit: "text-inherit",

      primary: "text-text-primary",

      secondary: "text-text-secondary",

      muted: "text-text-muted",

      brand: "text-brand-primary",

      success: "text-green-600",

      warning: "text-yellow-600",

      danger: "text-red-600",

      white: "text-white",
    },

    weight: {
      regular: "font-normal",

      medium: "font-medium",

      semibold: "font-semibold",

      bold: "font-bold",
    },

    align: {
      left: "text-left",

      center: "text-center",

      right: "text-right",

      justify: "text-justify",
    },

    truncate: {
      true: "truncate",

      false: "",
    },

    nowrap: {
      true: "whitespace-nowrap",

      false: "",
    },
  },

  defaultVariants: {
    variant: "body",

    color: "primary",

    align: "left",

    truncate: false,
  },
});
