import { cn } from "../../../lib/cn";
import { EmptyState } from "../../feedback/EmptyState";
import { ShoppingBag } from "lucide-react";

interface CartEmptyStateProps {
  className?: string;
  title?: string;
  description?: string;
  onStartShopping?: () => void;
}

export const CartEmptyState = ({
  className,
  title = "Your cart is empty",
  description = "Looks like you haven't added any items to your cart yet.",
  onStartShopping,
}: CartEmptyStateProps) => {
  return (
    <div className={cn("py-12", className)}>
      <EmptyState
        title={title}
        description={description}
        icon={<ShoppingBag className="w-16 h-16" />}
        action={
          onStartShopping
            ? {
                label: "Start Shopping",
                onClick: onStartShopping,
                variant: "primary",
              }
            : undefined
        }
      />
    </div>
  );
};
