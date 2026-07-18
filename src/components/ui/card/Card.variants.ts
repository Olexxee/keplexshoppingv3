import { cva } from "class-variance-authority";

export const cardVariants = cva("bg-background transition-all", {
  variants: {
    elevated: {
      true: "shadow-md",
      false: "",
    },

    bordered: {
      true: "border border-border",
      false: "",
    },

    interactive: {
      true: "cursor-pointer hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none",
      false: "",
    },

    padding: {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    },

    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },

  defaultVariants: {
    elevated: false,
    bordered: true,
    interactive: false,
    padding: "md",
    rounded: "lg",
  },
});
