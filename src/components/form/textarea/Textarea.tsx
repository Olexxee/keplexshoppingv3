import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/cn";
import { textareaVariants } from "./textarea.variants";

export interface TextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  showCount?: boolean;
  maxCharacters?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      state,
      size,
      showCount = false,
      maxCharacters,
      value,
      ...props
    },
    ref,
  ) => {
    const count = typeof value === "string" ? value.length : 0;

    return (
      <div className="space-y-2">
        <textarea
          ref={ref}
          className={cn(
            textareaVariants({
              state,
              size,
            }),
            className,
          )}
          value={value}
          {...props}
        />

        {showCount && (
          <div className="flex justify-end">
            <span className="text-xs text-text-muted">
              {count}

              {maxCharacters ? ` / ${maxCharacters}` : null}
            </span>
          </div>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
