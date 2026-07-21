import { CreditCard } from "lucide-react";
import { Button } from "../../../button/Button";
import type { BuyNowButtonProps } from "./BuyNowButton.types";

export function BuyNowButton({
  label = "Buy Now",
  ...props
}: BuyNowButtonProps) {
  return (
    <Button leftIcon={<CreditCard size={18} />} {...props}>
      {label}
    </Button>
  );
}
