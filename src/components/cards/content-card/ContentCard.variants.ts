import { cva } from "class-variance-authority";

export const contentCardVariants = cva("group flex flex-col", {
  variants: {
    size: {
      sm: "max-w-xs",
      md: "max-w-sm",
      lg: "max-w-md",
    },
    appearance: {
      default: "",
      featured: "md:col-span-2 md:row-span-2",
      compact: "max-w-[200px]",
    },
    aspectRatio: {
      auto: "",
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]",
    },
  },
  defaultVariants: {
    size: "md",
    appearance: "default",
    aspectRatio: "auto",
  },
});

export const cardImageVariants = cva(
  "relative overflow-hidden bg-background-secondary",
  {
    variants: {
      aspectRatio: {
        auto: "h-auto",
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
      },
      fit: {
        cover: "h-full w-full object-cover",
        contain: "h-full w-full object-contain",
        fill: "h-full w-full object-fill",
      },
      zoomOnHover: {
        true: "transition-transform duration-700 group-hover:scale-105",
        false: "",
      },
    },
    defaultVariants: {
      aspectRatio: "video",
      fit: "cover",
      zoomOnHover: true,
    },
  },
);

export const cardOverlayVariants = cva(
  "absolute inset-0 pointer-events-none transition-opacity duration-300",
  {
    variants: {
      position: {
        top: "bg-gradient-to-b from-black/60 to-transparent",
        bottom: "bg-gradient-to-t from-black/60 to-transparent",
        center: "bg-black/30",
        full: "bg-black/50",
      },
    },
    defaultVariants: {
      position: "bottom",
    },
  },
);
