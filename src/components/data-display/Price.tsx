import React from "react";
import { cn } from "@/lib/utils";

interface PriceProps {
  amount: number;
  currency?: string;
  locale?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "sale" | "muted";
  originalPrice?: number;
  showCurrency?: boolean;
}

export const Price = ({
  amount,
  currency = "USD",
  locale = "en-US",
  className,
  size = "md",
  variant = "default",
  originalPrice,
  showCurrency = true,
}: PriceProps) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
    xl: "text-3xl",
  };

  const variantClasses = {
    default: "text-foreground",
    sale: "text-destructive",
    muted: "text-muted-foreground",
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat(locale, {
      style: showCurrency ? "currency" : "decimal",
      currency: showCurrency ? currency : undefined,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span
        className={cn(
          "font-semibold",
          sizeClasses[size],
          variantClasses[variant],
        )}
      >
        {formatPrice(amount)}
      </span>
      {originalPrice && originalPrice > amount && (
        <span
          className={cn(
            "text-muted-foreground line-through",
            size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base",
          )}
        >
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
};
