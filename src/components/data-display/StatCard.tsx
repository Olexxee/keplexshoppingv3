import React from "react";
import { cn } from "../../lib/cn";
import { Card, CardBody } from "../ui/card/CardBody";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    direction: "up" | "down";
  };
  className?: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
}

export const StatCard = ({
  title,
  value,
  icon,
  trend,
  className,
  variant = "default",
}: StatCardProps) => {
  const variantClasses = {
    default: "",
    primary: "border-primary/20 bg-primary/5",
    success: "border-success/20 bg-success/5",
    warning: "border-warning/20 bg-warning/5",
    danger: "border-destructive/20 bg-destructive/5",
  };

  const iconVariantClasses = {
    default: "text-muted-foreground",
    primary: "text-primary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-destructive",
  };

  return (
    <Card className={cn("border", variantClasses[variant], className)}>
      <CardBody className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
            {trend && (
              <div className="flex items-center gap-1.5 mt-2">
                <span
                  className={cn(
                    "flex items-center text-xs font-medium",
                    trend.direction === "up"
                      ? "text-success"
                      : "text-destructive",
                  )}
                >
                  {trend.direction === "up" ? (
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-0.5" />
                  )}
                  {Math.abs(trend.value)}%
                </span>
                <span className="text-xs text-muted-foreground">
                  {trend.label}
                </span>
              </div>
            )}
          </div>
          {icon && (
            <div
              className={cn(
                "p-3 rounded-full",
                variant === "default" ? "bg-muted" : "bg-background",
                iconVariantClasses[variant],
              )}
            >
              {icon}
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
