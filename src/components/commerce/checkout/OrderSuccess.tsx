import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { Result } from "../../feedback/Result";
import { Package, Mail, Printer } from "lucide-react";

interface OrderSuccessProps {
  orderId: string;
  email: string;
  total: number;
  onContinueShopping?: () => void;
  onViewOrder?: () => void;
  onPrint?: () => void;
  className?: string;
}

export const OrderSuccess = ({
  orderId,
  email,
  total,
  onContinueShopping,
  onViewOrder,
  onPrint,
  className,
}: OrderSuccessProps) => {
  return (
    <div className={cn("max-w-md mx-auto", className)}>
      <Result
        status="success"
        title="Order Placed Successfully!"
        subTitle={`We've sent a confirmation email to ${email}`}
        extra={
          <div className="space-y-4 w-full">
            <div className="p-4 rounded-lg bg-muted/30 space-y-2">
              <div className="flex justify-between">
                <Typography variant="bodySm" color="muted">
                  Order ID
                </Typography>
                <Typography variant="bodySm" weight="medium">
                  #{orderId}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="bodySm" color="muted">
                  Total
                </Typography>
                <Typography variant="bodySm" weight="medium">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(total)}
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button onClick={onViewOrder} className="w-full gap-2">
                <Package size={16} />
                View Order Details
              </Button>
              <Button
                variant="outline"
                onClick={onContinueShopping}
                className="w-full"
              >
                Continue Shopping
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onPrint}
                  className="flex-1"
                >
                  <Printer size={14} className="mr-1" />
                  Print
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => (window.location.href = `mailto:${email}`)}
                  className="flex-1"
                >
                  <Mail size={14} className="mr-1" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
