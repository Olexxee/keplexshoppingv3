import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/cn";
import { X } from "lucide-react";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  title?: string;
  className?: string;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
}

export const Sheet = ({
  isOpen,
  onClose,
  children,
  side = "right",
  size = "md",
  title,
  className,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  showCloseButton = true,
}: SheetProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape" && isOpen) {
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
  }, [isOpen, onClose, closeOnEsc]);

  const sizeClasses = {
    left: {
      sm: "w-64",
      md: "w-80",
      lg: "w-96",
      xl: "w-[480px]",
      full: "w-full",
    },
    right: {
      sm: "w-64",
      md: "w-80",
      lg: "w-96",
      xl: "w-[480px]",
      full: "w-full",
    },
    top: {
      sm: "h-64",
      md: "h-80",
      lg: "h-96",
      xl: "h-[480px]",
      full: "h-full",
    },
    bottom: {
      sm: "h-64",
      md: "h-80",
      lg: "h-96",
      xl: "h-[480px]",
      full: "h-full",
    },
  };

  const positionClasses = {
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
  };

  const animationClasses = {
    left: {
      enter: "animate-in slide-in-from-left duration-300",
      exit: "animate-out slide-out-to-left duration-300",
    },
    right: {
      enter: "animate-in slide-in-from-right duration-300",
      exit: "animate-out slide-out-to-right duration-300",
    },
    top: {
      enter: "animate-in slide-in-from-top duration-300",
      exit: "animate-out slide-out-to-top duration-300",
    },
    bottom: {
      enter: "animate-in slide-in-from-bottom duration-300",
      exit: "animate-out slide-out-to-bottom duration-300",
    },
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={sheetRef}
        className={cn(
          "fixed bg-background shadow-2xl flex flex-col",
          positionClasses[side],
          sizeClasses[side][size],
          animationClasses[side].enter,
          className,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "sheet-title" : undefined}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-4 border-b border-border">
            {title && (
              <h2 id="sheet-title" className="text-lg font-semibold">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close sheet"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
};
