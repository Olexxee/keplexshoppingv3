import { useState } from "react";
import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Spinner } from "../../feedback/Spinner";
import { ArrowRight } from "lucide-react";

interface BuyNowButtonProps {
  productId: string;
  quantity?: number;
  onBuyNow?: (productId: string, quantity: number) => void;
  className?: string;
  variant?: "default" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
}

export const BuyNowButton = ({
  productId,
  quantity = 1,
  onBuyNow,
  className,
  variant = "success",
  size = "md",
  loading = false,
  disabled = false,
}: BuyNowButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  // Map local variant to Button component's allowed variant values
  const buttonVariant:
    | "success"
    | "danger"
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | null
    | undefined =
    variant === "success"
      ? "primary"
      : variant === "danger"
        ? "danger"
        : "secondary";

  const handleBuyNow = () => {
    if (disabled) return;
    setIsLoading(true);
    onBuyNow?.(productId, quantity);
  };

  return (
    <Button
      variant={buttonVariant}
      size={size}
      onClick={handleBuyNow}
      disabled={disabled || loading || isLoading}
      className={cn(
        "w-full transition-all",
        variant === "success" && "bg-green-600 hover:bg-green-700 text-white",
        variant === "warning" && "bg-yellow-600 hover:bg-yellow-700 text-white",
        variant === "danger" && "bg-red-600 hover:bg-red-700 text-white",
        className,
      )}
    >
      {loading || isLoading ? (
        <>
          <Spinner size="sm" className="mr-2" />
          Processing...
        </>
      ) : (
        <>
          Buy Now
          <ArrowRight size={16} className="ml-2" />
        </>
      )}
    </Button>
  );
};
