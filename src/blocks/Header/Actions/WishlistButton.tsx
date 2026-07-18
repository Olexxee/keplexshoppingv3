import { Heart } from "lucide-react";

import HeaderIconButton from "./HeaderIconButton";

export default function WishlistButton() {
  return (
    <HeaderIconButton ariaLabel="Wishlist" badge={2}>
      <Heart />
    </HeaderIconButton>
  );
}
