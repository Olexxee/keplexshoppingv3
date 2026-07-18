import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Result } from "../../feedback/Result";
import { RefreshCw, HelpCircle, CreditCard } from "lucide-react";
import { Typography } from "../../typography";

interface OrderFailureProps {
  error?: string;
  onRetry?: () => void;
  onContactSupport?: () => void;
  onTryDifferentPayment?: () => void;
  className?: string;
}

export const OrderFailure = ({
  error,
  onRetry,
  onContactSupport,
  onTryDifferentPayment,
  className,
}: OrderFailureProps) => {
  return (
    <div className={cn("max-w-md mx-auto", className)}>
      <Result
        status="error"
        title="Order Failed"
        subTitle={error || "We couldn't process your order. Please try again."}
        extra={
          <div className="space-y-4 w-full">
            <div className="flex flex-col gap-2">
              <Button onClick={onRetry} className="w-full gap-2">
                <RefreshCw size={16} />
                Try Again
              </Button>
              {onTryDifferentPayment && (
                <Button
                  variant="outline"
                  onClick={onTryDifferentPayment}
                  className="w-full gap-2"
                >
                  <CreditCard size={16} />
                  Try Different Payment
                </Button>
              )}
              {onContactSupport && (
                <Button
                  variant="ghost"
                  onClick={onContactSupport}
                  className="w-full gap-2"
                >
                  <HelpCircle size={16} />
                  Contact Support
                </Button>
              )}
            </div>
            <div className="text-center">
              <Typography variant="bodySm" color="muted">
                Your payment has not been charged. If you continue to experience
                issues, please contact our support team.
              </Typography>
            </div>
          </div>
        }
      />
    </div>
  );
};
