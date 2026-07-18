import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "font-medium",
    "transition-all",
    "duration-200",
    "select-none",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-brand-primary/40",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-brand-primary text-white hover:bg-brand-hover",

        secondary:
          "bg-surface-secondary text-text-primary hover:bg-background-secondary",

        outline:
          "border border-border-primary bg-transparent hover:bg-background-secondary",

        ghost: "hover:bg-background-secondary",

        danger: "bg-red-600 text-white hover:bg-red-700",

        success: "bg-green-600 text-white hover:bg-green-700",

        link: "text-brand-primary underline-offset-4 hover:underline bg-transparent p-0 h-auto",
      },

      size: {
        xs: "h-8 px-3 text-xs",

        sm: "h-9 px-4 text-sm",

        md: "h-11 px-5",

        lg: "h-12 px-6 text-lg",

        xl: "h-14 px-8 text-xl",

        icon: "h-11 w-11 p-0 shrink-0",
      },

      rounded: {
        none: "rounded-none",

        sm: "rounded-md",

        md: "rounded-xl",

        lg: "rounded-2xl",

        full: "rounded-full",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",

      rounded: "md",

      fullWidth: false,
    },
  },
);
