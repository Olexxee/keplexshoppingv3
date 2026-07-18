import React from "react";
import { cn } from "../../lib/cn";
import { X } from "lucide-react";

interface ChipProps {
  label: string;
  onRemove?: () => void;
  onClick?: () => void;
  variant?:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  removable?: boolean;
}

export const Chip = ({
  label,
  onRemove,
  onClick,
  variant = "default",
  size = "md",
  icon,
  className,
  disabled = false,
  removable = false,
}: ChipProps) => {
  const variantClasses = {
    default: "bg-muted text-foreground",
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    danger: "bg-destructive/10 text-destructive",
    outline: "border border-border-primary text-foreground bg-transparent",
  };

  const sizeClasses = {
    sm: "text-xs px-2.5 py-0.5 gap-1",
    md: "text-sm px-3 py-1 gap-1.5",
    lg: "text-base px-4 py-1.5 gap-2",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const removeIconSizes = {
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-4 h-4",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        onClick && !disabled && "cursor-pointer hover:opacity-80",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      onClick={!disabled ? onClick : undefined}
    >
      {icon && <span className={iconSizes[size]}>{icon}</span>}
      <span>{label}</span>
      {(removable || onRemove) && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          disabled={disabled}
          className={cn(
            "rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
            disabled && "cursor-not-allowed",
          )}
        >
          <X className={removeIconSizes[size]} />
        </button>
      )}
    </div>
  );
};
