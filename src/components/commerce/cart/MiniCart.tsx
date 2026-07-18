import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { Price } from "../../data-display/Price";
import { CartItem } from "./CartItem";
import { ShoppingBag } from "lucide-react";

interface MiniCartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface MiniCartProps {
  items: MiniCartItem[];
  total: number;
  onRemove?: (id: string) => void;
  onQuantityChange?: (id: string, quantity: number) => void;
  onViewCart?: () => void;
  onCheckout?: () => void;
  className?: string;
  maxHeight?: number;
}

export const MiniCart = ({
  items,
  total,
  onRemove,
  onQuantityChange,
  onViewCart,
  onCheckout,
  className,
  maxHeight = 400,
}: MiniCartProps) => {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className={cn("p-4 text-center", className)}>
        <ShoppingBag size={32} className="mx-auto text-muted-foreground mb-2" />
        <Typography variant="body" color="muted">
          Your cart is empty
        </Typography>
        <Button
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={onViewCart}
        >
          Start Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("w-80", className)}>
      <div className="p-4 border-b border-border-primary">
        <div className="flex items-center justify-between">
          <Typography variant="title" weight="semibold">
            Shopping Cart
          </Typography>
          <Typography variant="bodySm" color="muted">
            {itemCount} item{itemCount !== 1 ? "s" : ""}
          </Typography>
        </div>
      </div>
      <div
        className="overflow-y-auto p-2"
        style={{ maxHeight: `${maxHeight}px` }}
      >
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onRemove={onRemove}
            onQuantityChange={onQuantityChange}
            compact
          />
        ))}
      </div>
      <div className="p-4 border-t border-border-primary space-y-3">
        <div className="flex items-center justify-between">
          <Typography variant="body" weight="semibold">
            Total
          </Typography>
          <Price amount={total} size="md" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={onViewCart}>
            View Cart
          </Button>
          <Button className="flex-1" onClick={onCheckout}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
