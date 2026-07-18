import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/cn";
import { X } from "lucide-react";
import { Button } from "../ui/actions/button/Button";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  variant?: "default" | "destructive" | "success" | "warning";
  isLoading?: boolean;
  closeOnOverlayClick?: boolean;
}

export const Dialog = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
  size = "md",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  variant = "default",
  isLoading = false,
  closeOnOverlayClick = true,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  const variantClasses = {
    default: "bg-primary hover:bg-primary/90",
    destructive: "bg-destructive hover:bg-destructive/90",
    success: "bg-success hover:bg-success/90",
    warning: "bg-warning hover:bg-warning/90",
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className={cn(
          "relative w-full bg-background rounded-xl shadow-2xl p-6",
          "animate-in zoom-in-95 duration-200",
          sizeClasses[size],
          className,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "dialog-title" : undefined}
        aria-describedby={description ? "dialog-description" : undefined}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-muted transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="space-y-4">
          {title && (
            <h2 id="dialog-title" className="text-lg font-semibold">
              {title}
            </h2>
          )}
          {description && (
            <p
              id="dialog-description"
              className="text-sm text-muted-foreground"
            >
              {description}
            </p>
          )}
          {children}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2 mt-6">
          <Button
            variant="outline"
            onClick={() => {
              onCancel?.();
              onClose();
            }}
            disabled={isLoading}
          >
            {cancelText}
          </Button>
          <Button
            className={variantClasses[variant]}
            onClick={() => {
              onConfirm?.();
              if (!isLoading) onClose();
            }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};
