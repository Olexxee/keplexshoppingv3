import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { Price } from "../../data-display/Price";
import { QuantityInput } from "../../form/quantity-input/QuantityInput";
import { Trash2, X } from "lucide-react";

interface CartItemProps {
  id: string;
  productId: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  variant?: string;
  maxQuantity?: number;
  onQuantityChange?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
  className?: string;
  compact?: boolean;
}

export const CartItem = ({
  id,
  name,
  price,
  originalPrice,
  quantity,
  image,
  variant,
  maxQuantity = 99,
  onQuantityChange,
  onRemove,
  className,
  compact = false,
}: CartItemProps) => {
  if (compact) {
    return (
      <div className={cn("flex items-center gap-3 p-2", className)}>
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <Typography variant="bodySm" weight="medium" className="truncate">
            {name}
          </Typography>
          <Price amount={price} size="sm" />
        </div>
        <Typography variant="bodySm">x{quantity}</Typography>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove?.(id)}
          className="text-muted-foreground hover:text-destructive"
        >
          <X size={14} />
        </Button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-4 p-4 border-b border-border-primary last:border-0",
        className,
      )}
    >
      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <Typography variant="body" weight="medium">
              {name}
            </Typography>
            {variant && (
              <Typography variant="bodySm" color="muted">
                {variant}
              </Typography>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove?.(id)}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 size={16} />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <QuantityInput
            value={quantity}
            onChange={(val) => onQuantityChange?.(id, val)}
            min={1}
            max={maxQuantity}
          />
          <div className="text-right">
            <Price amount={price * quantity} size="md" />
            {originalPrice && (
              <Typography
                variant="caption"
                color="muted"
                className="line-through"
              >
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(originalPrice * quantity)}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
