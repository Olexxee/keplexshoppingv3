import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { Price } from "../../data-display/Price";
import { Divider } from "../../data-display/Divider";
import { Spinner } from "../../feedback/Spinner";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax?: number;
  discount?: number;
  total: number;
  onCheckout?: () => void;
  className?: string;
  showCheckout?: boolean;
  loading?: boolean;
}

export const CartSummary = ({
  subtotal,
  shipping,
  tax = 0,
  discount = 0,
  total,
  onCheckout,
  className,
  showCheckout = true,
  loading = false,
}: CartSummaryProps) => {
  return (
    <div
      className={cn(
        "space-y-4 p-6 rounded-lg border border-border-primary",
        className,
      )}
    >
      <Typography variant="title" weight="semibold">
        Order Summary
      </Typography>
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
      {showCheckout && (
        <Button
          variant="primary"
          className="w-full"
          onClick={onCheckout}
          disabled={loading}
        >
          {loading ? <Spinner size="sm" className="mr-2" /> : null}
          {loading ? "Processing..." : "Proceed to Checkout"}
        </Button>
      )}
    </div>
  );
};
