import React from "react";
import { cn } from "../../lib/cn";
import { Spinner } from "./Spinner";

interface LoadingOverlayProps {
  loading: boolean;
  children?: React.ReactNode;
  className?: string;
  spinnerSize?: "sm" | "md" | "lg" | "xl";
  overlayColor?: string;
  text?: string;
}

export const LoadingOverlay = ({
  loading,
  children,
  className,
  spinnerSize = "lg",
  overlayColor = "bg-background/80 dark:bg-background/90",
  text,
}: LoadingOverlayProps) => {
  if (!loading) return <>{children}</>;

  return (
    <div className={cn("relative", className)}>
      {children}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center",
          overlayColor,
          "backdrop-blur-sm transition-opacity duration-200 z-50",
        )}
        role="status"
        aria-live="polite"
      >
        <Spinner size={spinnerSize} />
        {text && (
          <span className="mt-3 text-sm font-medium text-foreground">
            {text}
          </span>
        )}
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
};
