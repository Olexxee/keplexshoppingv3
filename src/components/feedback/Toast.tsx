import { useState, useEffect } from "react";
import { cn } from "../../lib/cn";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

export type ToastVariant = "success" | "error" | "warning" | "info";

interface ToastProps {
  id?: string;
  variant?: ToastVariant;
  title: string;
  description?: string;
  duration?: number;
  onClose?: (id: string) => void;
  className?: string;
}

export const Toast = ({
  id = "toast",
  variant = "info",
  title,
  description,
  duration = 5000,
  onClose,
  className,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.(id);
    }, 300);
  };

  const variantClasses = {
    success:
      "bg-green-50 border-green-200 dark:bg-green-950/50 dark:border-green-800",
    error: "bg-red-50 border-red-200 dark:bg-red-950/50 dark:border-red-800",
    warning:
      "bg-yellow-50 border-yellow-200 dark:bg-yellow-950/50 dark:border-yellow-800",
    info: "bg-blue-50 border-blue-200 dark:bg-blue-950/50 dark:border-blue-800",
  };

  const iconMap = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const textColors = {
    success: "text-green-800 dark:text-green-200",
    error: "text-red-800 dark:text-red-200",
    warning: "text-yellow-800 dark:text-yellow-200",
    info: "text-blue-800 dark:text-blue-200",
  };

  const IconComponent = iconMap[variant];

  return (
    <div
      className={cn(
        "relative rounded-lg border shadow-lg p-4 transition-all duration-300",
        variantClasses[variant],
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      )}
      role="alert"
    >
      <div className="flex gap-3">
        <IconComponent
          className={cn("w-5 h-5 flex-shrink-0", textColors[variant])}
        />
        <div className="flex-1">
          <h4 className={cn("font-semibold text-sm", textColors[variant])}>
            {title}
          </h4>
          {description && (
            <p className={cn("text-sm mt-1", textColors[variant])}>
              {description}
            </p>
          )}
        </div>
        <button
          onClick={handleClose}
          className={cn(
            "flex-shrink-0",
            textColors[variant],
            "opacity-60 hover:opacity-100 transition-colors",
          )}
          aria-label="Close toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Toast Container
interface ToastContainerProps {
  toasts: (Omit<ToastProps, "onClose"> & { id: string })[];
  onClose: (id: string) => void;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  className?: string;
}

export const ToastContainer = ({
  toasts,
  onClose,
  position = "top-right",
  className,
}: ToastContainerProps) => {
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col gap-3 max-w-md w-full",
        positionClasses[position],
        className,
      )}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
};
