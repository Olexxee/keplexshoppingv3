import { cn } from "../../../lib/cn";
import { Drawer } from "../../../features/navigation/navigation/Drawer";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: any[];
  subtotal: number;
  shipping: number;
  total: number;
  onQuantityChange?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
  onCheckout?: () => void;
  className?: string;
}

export const CartDrawer = ({
  isOpen,
  onClose,
  items,
  subtotal,
  shipping,
  total,
  onQuantityChange,
  onRemove,
  onCheckout,
  className,
}: CartDrawerProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      size="lg"
      title="Shopping Cart"
      className={cn("bg-background", className)}
    >
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full py-12">
          <div className="text-4xl mb-4">🛒</div>
          <Typography variant="title" weight="semibold">
            Your cart is empty
          </Typography>
          <Typography variant="body" color="muted" className="mt-1">
            Add items to get started
          </Typography>
          <Button
            variant="ghost"
            onClick={onClose}
            className="mt-4 text-primary hover:text-primary/80"
          >
            Continue Shopping →
          </Button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <div className="divide-y divide-border">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onQuantityChange={onQuantityChange}
                  onRemove={onRemove}
                />
              ))}
            </div>
          </div>
          <div className="border-t border-border pt-4">
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              onCheckout={onCheckout}
              showCheckout={items.length > 0}
            />
          </div>
        </div>
      )}
    </Drawer>
  );
};
