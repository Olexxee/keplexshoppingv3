import * as React from "react";
import { cn } from "@/lib/cn";
import type { ContentCardFooterProps } from "./ContentCard.types";

export function ContentCardFooter({
  children,
  className,
  divider = true,
  ...props
}: ContentCardFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-6 py-4",
        divider && "border-t border-border-primary",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
