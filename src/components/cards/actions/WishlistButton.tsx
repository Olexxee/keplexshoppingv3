import { Heart } from "lucide-react";
import { OverlayActionButton } from "./OverlayActionButton/OverlayActionButton";

interface Props {
  active?: boolean;
  onClick?: () => void;
}

export function WishlistButton({ active, onClick }: Props) {
  return (
    <OverlayActionButton
      active={active}
      onClick={onClick}
      aria-label="Add to wishlist"
    >
      <Heart size={20} fill={active ? "currentColor" : "none"} />
    </OverlayActionButton>
  );
}
