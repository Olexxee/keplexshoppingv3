import React from "react";
import { cn } from "../../lib/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "outline";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  dotColor?: string;
}

export const Badge = ({
  variant = "default",
  size = "md",
  dot = false,
  dotColor,
  className,
  children,
  ...props
}: BadgeProps) => {
  const variantClasses = {
    default: "bg-muted text-foreground",
    primary: "bg-primary text-primary-foreground",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
    danger: "bg-destructive text-destructive-foreground",
    info: "bg-blue-500 text-white",
    outline: "border border-border-primary text-foreground bg-transparent",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3 py-1",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "inline-block rounded-full",
            dotColor || "bg-current",
            size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2",
          )}
        />
      )}
      {children}
    </div>
  );
};
