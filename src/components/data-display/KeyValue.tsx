import React from "react";
import { cn } from "../../lib/cn";

interface KeyValueItem {
  key: string;
  value: React.ReactNode;
  className?: string;
}

interface KeyValueProps {
  items: KeyValueItem[];
  className?: string;
  direction?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  bordered?: boolean;
  striped?: boolean;
}

export const KeyValue = ({
  items,
  className,
  direction = "horizontal",
  size = "md",
  bordered = false,
  striped = false,
}: KeyValueProps) => {
  const sizeClasses = {
    sm: "text-sm gap-2",
    md: "text-base gap-3",
    lg: "text-lg gap-4",
  };

  const keyClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  if (direction === "horizontal") {
    return (
      <div className={cn("flex flex-wrap", sizeClasses[size], className)}>
        {items.map((item, index) => (
          <div
            key={index}
            className={cn("flex items-center gap-2", item.className)}
          >
            <span
              className={cn(
                "font-medium text-muted-foreground",
                keyClasses[size],
              )}
            >
              {item.key}:
            </span>
            <span className="text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "divide-y divide-border",
        bordered && "border border-border rounded-lg overflow-hidden",
        className,
      )}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center justify-between",
            size === "sm"
              ? "px-3 py-2"
              : size === "md"
                ? "px-4 py-3"
                : "px-6 py-4",
            striped && index % 2 === 1 && "bg-muted/30",
            item.className,
          )}
        >
          <span
            className={cn(
              "font-medium text-muted-foreground",
              keyClasses[size],
            )}
          >
            {item.key}
          </span>
          <span className="text-foreground text-right">{item.value}</span>
        </div>
      ))}
    </div>
  );
};
