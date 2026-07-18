import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/cn";
import { inputBaseVariants } from "./nput-base.variants";

export interface InputBaseProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputBaseVariants> {
  leftSlot?: React.ReactNode;

  rightSlot?: React.ReactNode;
}

export const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, size, state, leftSlot, rightSlot, ...props }, ref) => {
    return (
      <div
        className={cn(
          inputBaseVariants({
            size,
            state,
          }),
          className,
        )}
      >
        {leftSlot && (
          <div className="flex items-center text-text-muted">{leftSlot}</div>
        )}

        <input
          ref={ref}
          className="
            flex-1
            bg-transparent
            outline-none
            placeholder:text-text-muted
            disabled:cursor-not-allowed
          "
          {...props}
        />

        {rightSlot && <div className="flex items-center">{rightSlot}</div>}
      </div>
    );
  },
);

InputBase.displayName = "InputBase";
