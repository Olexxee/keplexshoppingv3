import React from "react";
import { cn } from "../../lib/cn";
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from "lucide-react";

interface AlertProps {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  description?: string;
  className?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Alert = ({
  variant = "info",
  title,
  description,
  className,
  dismissible = false,
  onDismiss,
  icon,
  children,
}: AlertProps) => {
  const variantClasses = {
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950/50 dark:border-blue-800 dark:text-blue-200",
    success:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-950/50 dark:border-green-800 dark:text-green-200",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-950/50 dark:border-yellow-800 dark:text-yellow-200",
    error:
      "bg-red-50 border-red-200 text-red-800 dark:bg-red-950/50 dark:border-red-800 dark:text-red-200",
  };

  const iconMap = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
  };

  const IconComponent = iconMap[variant];

  return (
    <div
      className={cn(
        "relative rounded-lg border p-4",
        variantClasses[variant],
        className,
      )}
      role="alert"
    >
      <div className="flex gap-3">
        {icon !== null && (
          <div className="flex-shrink-0">
            {icon || <IconComponent className="w-5 h-5" />}
          </div>
        )}
        <div className="flex-1">
          {title && <h5 className="font-semibold text-sm">{title}</h5>}
          {description && <div className="text-sm mt-1">{description}</div>}
          {children}
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 text-current/60 hover:text-current transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
