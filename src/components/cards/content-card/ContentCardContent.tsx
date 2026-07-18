import * as React from "react";
import { cn } from "@/lib/cn";
import type { ContentCardContentProps } from "./ContentCard.types";

const spacingMap = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function ContentCardContent({
  children,
  className,
  align = "start",
  justify = "start",
  spacing = "md",
  ...props
}: ContentCardContentProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        spacingMap[spacing],
        {
          "items-start text-left": align === "start",
          "items-center text-center": align === "center",
          "items-end text-right": align === "end",
        },
        {
          "justify-start": justify === "start",
          "justify-center": justify === "center",
          "justify-end": justify === "end",
          "justify-between": justify === "between",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
