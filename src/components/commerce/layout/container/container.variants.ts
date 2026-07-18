import { cva } from "class-variance-authority";

export const containerVariants = cva("w-full mx-auto", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-[1440px]",
    },

    padding: {
      none: "",
      sm: "px-4",
      md: "px-4 md:px-6",
      lg: "px-4 md:px-6 xl:px-8",
    },

    fluid: {
      true: "max-w-full",
      false: "",
    },
  },

  defaultVariants: {
    size: "2xl",
    padding: "lg",
    fluid: false,
  },
});
