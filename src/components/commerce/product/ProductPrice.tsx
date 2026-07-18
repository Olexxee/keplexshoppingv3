import { cn } from "../../../lib/cn";
import { Typography } from "../../typography/Typography";

interface ProductPriceProps {
  amount: number;
  originalPrice?: number;
  currency?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showDiscount?: boolean;
  showSavings?: boolean;
}

export const ProductPrice = ({
  amount,
  originalPrice,
  currency = "USD",
  className,
  size = "md",
  showDiscount = true,
  showSavings = false,
}: ProductPriceProps) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const discount =
    originalPrice && originalPrice > amount
      ? Math.round(((originalPrice - amount) / originalPrice) * 100)
      : 0;

  const savings =
    originalPrice && originalPrice > amount ? originalPrice - amount : 0;

  const variantMap = {
    sm: "bodySm",
    md: "body",
    lg: "title",
    xl: "h3",
  } as const;

  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center gap-3">
        <Typography variant={variantMap[size]} color="primary" weight="bold">
          {formatPrice(amount)}
        </Typography>
        {originalPrice && originalPrice > amount && (
          <Typography variant="bodySm" color="muted" className="line-through">
            {formatPrice(originalPrice)}
          </Typography>
        )}
        {showDiscount && discount > 0 && (
          <Typography
            variant="caption"
            color="success"
            weight="medium"
            className="px-2 py-0.5 bg-success/10 rounded"
          >
            -{discount}%
          </Typography>
        )}
      </div>
      {showSavings && savings > 0 && (
        <Typography variant="bodySm" color="success">
          You save {formatPrice(savings)}
        </Typography>
      )}
    </div>
  );
};
