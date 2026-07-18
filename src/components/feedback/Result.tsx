import React from "react";
import { cn } from "../../lib/cn";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

interface ResultProps {
  status: "success" | "error" | "warning" | "info";
  title: string;
  subTitle?: string;
  icon?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Result = ({
  status,
  title,
  subTitle,
  icon,
  extra,
  className,
  size = "md",
}: ResultProps) => {
  const iconMap = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const colorMap = {
    success: "text-success",
    error: "text-destructive",
    warning: "text-warning",
    info: "text-primary",
  };

  const sizeClasses = {
    sm: "py-8 px-4",
    md: "py-12 px-6",
    lg: "py-16 px-8",
  };

  const iconSizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const IconComponent = iconMap[status];

  return (
    <div className={cn("text-center", sizeClasses[size], className)}>
      <div className={cn("mx-auto mb-4", iconSizes[size], colorMap[status])}>
        {icon || <IconComponent className="w-full h-full" />}
      </div>
      <h3
        className={cn(
          "font-semibold text-foreground",
          size === "sm" ? "text-lg" : size === "md" ? "text-2xl" : "text-3xl",
        )}
      >
        {title}
      </h3>
      {subTitle && (
        <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
          {subTitle}
        </p>
      )}
      {extra && <div className="mt-6">{extra}</div>}
    </div>
  );
};
