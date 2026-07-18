import React from "react";
import { cn } from "../../lib/cn";

interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  time?: string;
  icon?: React.ReactNode;
  status?: "completed" | "current" | "pending" | "error";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  orientation?: "vertical" | "horizontal";
  lineColor?: string;
}

export const Timeline = ({
  items,
  className,
  orientation = "vertical",
  lineColor = "bg-border",
}: TimelineProps) => {
  const statusColors = {
    completed: "bg-success border-success",
    current: "bg-primary border-primary animate-pulse",
    pending: "bg-muted border-muted",
    error: "bg-destructive border-destructive",
  };


  if (orientation === "horizontal") {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        {items.map((item, index) => (
          <div key={item.id} className="flex-1 relative">
            <div className="flex flex-col items-center">
              <div className="relative w-full flex items-center">
                {index > 0 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5",
                      lineColor,
                      item.status === "completed" && "bg-success",
                    )}
                  />
                )}
                <div
                  className={cn(
                    "w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                    statusColors[item.status || "pending"],
                  )}
                >
                  {item.icon || (
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full",
                        statusColors[item.status || "pending"],
                      )}
                    />
                  )}
                </div>
                {index < items.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5",
                      lineColor,
                      item.status === "completed" && "bg-success",
                    )}
                  />
                )}
              </div>
              <div className="mt-2 text-center">
                <p className="text-sm font-medium">{item.title}</p>
                {item.time && (
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="relative flex gap-4 pb-8 last:pb-0">
          {/* Line */}
          {index < items.length - 1 && (
            <div
              className={cn(
                "absolute left-4 top-8 w-0.5 h-full",
                lineColor,
                item.status === "completed" && "bg-success",
              )}
            />
          )}

          {/* Icon */}
          <div
            className={cn(
              "w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10",
              statusColors[item.status || "pending"],
            )}
          >
            {item.icon || (
              <div
                className={cn(
                  "w-3 h-3 rounded-full",
                  statusColors[item.status || "pending"],
                )}
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pt-0.5">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium">{item.title}</h4>
              {item.time && (
                <span className="text-xs text-muted-foreground">
                  {item.time}
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-sm text-muted-foreground mt-0.5">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
