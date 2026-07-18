import { cva } from "class-variance-authority";

export const inputBaseVariants = cva(
  [
    "flex",
    "w-full",
    "items-center",
    "gap-3",
    "rounded-xl",
    "border",
    "bg-surface-primary",
    "transition-all",
    "duration-200",
    "focus-within:ring-2",
    "focus-within:ring-brand-primary/20",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-10 px-3",
        md: "h-12 px-4",
        lg: "h-14 px-5",
      },

      state: {
        default: "border-border-primary",

        error: "border-red-500 focus-within:ring-red-500/20",

        success: "border-green-500 focus-within:ring-green-500/20",

        disabled: "bg-background-secondary opacity-60 cursor-not-allowed",
      },
    },

    defaultVariants: {
      size: "md",
      state: "default",
    },
  },
);
