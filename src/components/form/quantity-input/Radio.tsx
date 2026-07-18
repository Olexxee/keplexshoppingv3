import React from "react";
import { cn } from "../../../lib/cn";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            ref={ref}
            type="radio"
            className={cn(
              "w-4 h-4 border-border-primary text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer",
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

Radio.displayName = "Radio";
