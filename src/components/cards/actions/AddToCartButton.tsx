import { ShoppingCart } from "lucide-react";
import { Button } from "../../button/Button";
import type { AddToCartButtonProps } from "./AddToCartButton.types";

export function AddToCartButton({
  ...props
}: AddToCartButtonProps) {
  return (
    <Button fullWidth leftIcon={<ShoppingCart size={18} />} {...props}>
      Add to Cart
    </Button>
  );
}
