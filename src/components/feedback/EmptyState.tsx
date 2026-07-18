import React from "react";
import { cn } from "../../lib/cn";
import { Button } from "../ui/actions/button/Button";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "outline";
  };
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const EmptyState = ({
  title,
  description,
  icon,
  action,
  className,
  size = "md",
}: EmptyStateProps) => {
  const sizeClasses = {
    sm: "py-8 px-4",
    md: "py-12 px-6",
    lg: "py-16 px-8",
  };

  const iconSize = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  return (
    <div className={cn("text-center", sizeClasses[size], className)}>
      {icon && (
        <div
          className={cn("mx-auto text-muted-foreground mb-4", iconSize[size])}
        >
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
          {description}
        </p>
      )}
      {action && (
        <Button onClick={action.onClick} variant={action.variant || "primary"}>
          {action.label}
        </Button>
      )}
    </div>
  );
};
