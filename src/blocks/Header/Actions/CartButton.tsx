import { ShoppingBag } from "lucide-react";

import HeaderIconButton from "./HeaderIconButton";

export default function CartButton() {
  return (
    <HeaderIconButton ariaLabel="Shopping Cart" badge={3}>
      <ShoppingBag />
    </HeaderIconButton>
  );
}
