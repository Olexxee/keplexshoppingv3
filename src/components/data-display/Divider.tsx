import { cn } from "../../lib/cn";

interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
  thickness?: "thin" | "medium" | "thick";
  label?: string;
  labelPosition?: "left" | "center" | "right";
}

export const Divider = ({
  className,
  orientation = "horizontal",
  variant = "solid",
  thickness = "thin",
  label,
  labelPosition = "center",
}: DividerProps) => {
  const thicknessClasses = {
    thin: orientation === "horizontal" ? "h-px" : "w-px",
    medium: orientation === "horizontal" ? "h-0.5" : "w-0.5",
    thick: orientation === "horizontal" ? "h-1" : "w-1",
  };

  const variantClasses = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };

  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "inline-block bg-border",
          thicknessClasses[thickness],
          className,
        )}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  if (label) {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        {labelPosition === "left" && (
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {label}
          </span>
        )}
        <div
          className={cn(
            "flex-1 border-t",
            variantClasses[variant],
            thickness === "thin"
              ? "border-border"
              : thickness === "medium"
                ? "border-2 border-border"
                : "border-4 border-border",
          )}
          role="separator"
        />
        {labelPosition === "center" && (
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {label}
          </span>
        )}
        {labelPosition === "right" && (
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "border-t",
        variantClasses[variant],
        thickness === "thin"
          ? "border-border"
          : thickness === "medium"
            ? "border-2 border-border"
            : "border-4 border-border",
        className,
      )}
      role="separator"
    />
  );
};
