import { useState } from "react";
import { cn } from "../../../lib/cn";
import { Button } from "../../button";
import { QuantityInput } from "../../form/quantity-input/QuantityInput";
import { Spinner } from "../../feedback/Spinner";
import { ShoppingCart, Check } from "lucide-react";

interface AddToCartButtonProps {
  productId: string;
  inStock?: boolean;
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
  onAddToCart?: (productId: string, quantity: number) => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showQuantity?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

export const AddToCartButton = ({
  productId,
  inStock = true,
  quantity = 1,
  onQuantityChange,
  onAddToCart,
  className,
  variant = "primary",
  size = "md",
  showQuantity = true,
  loading = false,
  disabled = false,
}: AddToCartButtonProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!inStock || disabled) return;
    setIsAdding(true);
    onAddToCart?.(productId, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(false);
    }, 2000);
  };

  const buttonContent = () => {
    if (isAdding || loading) {
      return (
        <>
          <Spinner size="sm" className="mr-2" />
          Adding...
        </>
      );
    }
    if (isAdded) {
      return (
        <>
          <Check size={16} className="mr-2" />
          Added!
        </>
      );
    }
    return (
      <>
        <ShoppingCart size={16} className="mr-2" />
        Add to Cart
      </>
    );
  };

  if (!inStock) {
    return (
      <Button
        variant="outline"
        size={size}
        disabled
        className={cn("w-full", className)}
      >
        Out of Stock
      </Button>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {showQuantity && (
        <QuantityInput
          value={quantity}
          onChange={onQuantityChange}
          min={1}
          max={99}
          className="flex-shrink-0"
        />
      )}
      <Button
        variant={variant}
        size={size}
        onClick={handleAddToCart}
        disabled={disabled || !inStock || isAdding || loading}
        className="flex-1 min-w-[120px]"
      >
        {buttonContent()}
      </Button>
    </div>
  );
};
