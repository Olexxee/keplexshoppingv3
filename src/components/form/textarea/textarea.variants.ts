import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  [
    "w-full",
    "rounded-xl",
    "border",
    "bg-surface-primary",
    "px-4",
    "py-3",
    "transition-all",
    "duration-200",
    "resize-none",
    "outline-none",
    "placeholder:text-text-muted",
    "focus:ring-2",
    "focus:ring-brand-primary/20",
  ].join(" "),
  {
    variants: {
      state: {
        default: "border-border-primary",

        error: "border-red-500 focus:ring-red-500/20",

        success: "border-green-500 focus:ring-green-500/20",

        disabled: "bg-background-secondary opacity-60 cursor-not-allowed",
      },

      size: {
        sm: "min-h-[96px]",

        md: "min-h-[140px]",

        lg: "min-h-[220px]",
      },
    },

    defaultVariants: {
      state: "default",

      size: "md",
    },
  },
);
