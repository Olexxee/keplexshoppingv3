import React from "react";
import { cn } from "../../../lib/cn";

interface ProductGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
  gap?: "sm" | "md" | "lg";
  variant?: "default" | "masonry";
}

export const ProductGrid = ({
  children,
  columns = 4,
  className,
  gap = "md",
  variant = "default",
}: ProductGridProps) => {
  const columnsClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  };

  const gapClasses = {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
  };

  if (variant === "masonry") {
    return (
      <div
        className={cn(
          "columns-1 sm:columns-2 lg:columns-3 xl:columns-4",
          gapClasses[gap],
          className,
        )}
      >
        {React.Children.map(children, (child) => (
          <div className="mb-4 break-inside-avoid">{child}</div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid",
        columnsClasses[columns],
        gapClasses[gap],
        className,
      )}
    >
      {children}
    </div>
  );
};
