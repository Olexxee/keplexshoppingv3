import { cva } from "class-variance-authority";

export const imageVariants = cva("block max-w-full transition-opacity duration-300", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-md",
      md: "rounded-xl",
      lg: "rounded-2xl",
      full: "rounded-full",
    },

    fit: {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none",
        },
    
    aspectRatio: {
      square: "aspect-square",
      portrait: "aspect-[3/4]",
      landscape: "aspect-[4/3]",
      wide: "aspect-[16/9]",
      auto: "",
    },
  },

  defaultVariants: {
    rounded: "md",
    fit: "cover",
    aspectRatio: "auto",
  },
});
