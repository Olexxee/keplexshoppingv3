import { cn } from "../../../lib/cn";
import { useState } from "react";
import { Button } from "../../ui/actions/button/Button";
import { Spinner } from "../../feedback/Spinner";
import { Heart } from "lucide-react";

interface WishlistButtonProps {
  productId: string;
  isWishlisted?: boolean;
  onToggle?: (productId: string) => void;
  className?: string;
  variant?:
    | "outline"
    | "ghost"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "link"
    | null
    | undefined;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  loading?: boolean;
}

export const WishlistButton = ({
  productId,
  isWishlisted = false,
  onToggle,
  className,
  variant = "outline",
  size = "md",
  showLabel = true,
  loading = false,
}: WishlistButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isWishlistedState, setIsWishlistedState] = useState(isWishlisted);

  const handleToggle = () => {
    if (loading) return;
    setIsLoading(true);
    const newState = !isWishlistedState;
    setIsWishlistedState(newState);
    onToggle?.(productId);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggle}
      disabled={loading || isLoading}
      className={cn("gap-2", className)}
    >
      {isLoading ? (
        <Spinner size="sm" />
      ) : (
        <>
          <Heart
            className={cn(
              "transition-colors",
              isWishlistedState && "fill-red-500 text-red-500",
            )}
            size={16}
          />
          {showLabel &&
            (isWishlistedState ? "Remove from Wishlist" : "Add to Wishlist")}
        </>
      )}
    </Button>
  );
};
// use React's useState (imported above)
