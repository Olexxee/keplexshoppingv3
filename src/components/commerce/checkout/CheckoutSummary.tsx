import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { Price } from "../../data-display/Price";
import { Divider } from "../../data-display/Divider";
import { Spinner } from "../../feedback/Spinner";
import { CheckCircle, Lock } from "lucide-react";

interface CheckoutSummaryProps {
  subtotal: number;
  shipping: number;
  tax?: number;
  discount?: number;
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  onPlaceOrder?: () => void;
  className?: string;
  loading?: boolean;
  showItems?: boolean;
}

export const CheckoutSummary = ({
  subtotal,
  shipping,
  tax = 0,
  discount = 0,
  total,
  items,
  onPlaceOrder,
  className,
  loading = false,
  showItems = true,
}: CheckoutSummaryProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      {showItems && (
        <div className="space-y-2">
          <Typography variant="body" weight="medium">
            Order Items
          </Typography>
          {items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <Typography variant="bodySm">
                {item.name} × {item.quantity}
              </Typography>
              <Price amount={item.price * item.quantity} size="sm" />
            </div>
          ))}
          <Divider />
        </div>
      )}

      <div className="space-y-2">
        <div className="flex justify-between">
          <Typography variant="bodySm" color="muted">
            Subtotal
          </Typography>
          <Price amount={subtotal} size="sm" />
        </div>
        <div className="flex justify-between">
          <Typography variant="bodySm" color="muted">
            Shipping
          </Typography>
          <Price amount={shipping} size="sm" />
        </div>
        {tax > 0 && (
          <div className="flex justify-between">
            <Typography variant="bodySm" color="muted">
              Tax
            </Typography>
            <Price amount={tax} size="sm" />
          </div>
        )}
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <Typography variant="bodySm" color="success">
              Discount
            </Typography>
            <Typography variant="bodySm" color="success">
              -
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(discount)}
            </Typography>
          </div>
        )}
      </div>

      <Divider />

      <div className="flex justify-between">
        <Typography variant="title" weight="bold">
          Total
        </Typography>
        <Price amount={total} size="lg" />
      </div>

      <Button
        variant="primary"
        className="w-full gap-2"
        onClick={onPlaceOrder}
        disabled={loading}
      >
        {loading ? <Spinner size="sm" className="mr-2" /> : <Lock size={16} />}
        {loading ? "Processing..." : "Place Order"}
      </Button>

      <div className="flex items-center justify-center gap-1">
        <CheckCircle size={12} className="text-muted-foreground" />
        <Typography variant="caption" color="muted">
          Secure checkout • Your payment is encrypted
        </Typography>
      </div>
    </div>
  );
};
