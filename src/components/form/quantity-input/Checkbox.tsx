import React from "react";
import { cn } from "../../../lib/cn";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, indeterminate, className, ...props }, ref) => {
    React.useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        ref.current.indeterminate = indeterminate || false;
      }
    }, [indeterminate, ref]);

    return (
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            className={cn(
              "w-4 h-4 rounded border-border-primary text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className,
            )}
            {...props}
          />
          {label && <span className="text-sm text-foreground">{label}</span>}
        </label>
        {error && <span className="text-sm text-destructive">{error}</span>}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
