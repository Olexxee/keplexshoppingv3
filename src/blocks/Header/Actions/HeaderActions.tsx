import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "../../../components/button/Button";
import { ActionsWrapper } from "./HeaderActions.styles";

export function HeaderActions() {
  return (
    <ActionsWrapper>
      <Button variant="ghost" size="icon" rounded="full" aria-label="Search">
        <Search size={20} />
      </Button>

      <Button variant="ghost" size="icon" rounded="full" aria-label="Wishlist">
        <Heart size={20} />
      </Button>

      <Button variant="ghost" size="icon" rounded="full" aria-label="Cart">
        <ShoppingBag size={20} />
      </Button>

      <Button variant="ghost" size="icon" rounded="full" aria-label="Account">
        <User size={20} />
      </Button>
    </ActionsWrapper>
  );
}
