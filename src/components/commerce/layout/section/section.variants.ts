import { cva } from "class-variance-authority";

export const sectionVariants = cva("relative w-full", {
  variants: {
    spacing: {
      none: "",

      xs: "py-4",

      sm: "py-8",

      md: "py-12",

      lg: "py-16",

      xl: "py-20",

      "2xl": "py-28",
    },

    background: {
      transparent: "bg-transparent",

      primary: "bg-background",

      secondary: "bg-muted/30",

      surface: "bg-card",

      brand: "bg-primary text-white",
    },
  },

  defaultVariants: {
    spacing: "lg",

    background: "transparent",
  },
});
