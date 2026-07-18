import { ShoppingCart, Calendar } from "lucide-react";

import { Button } from "@/components/ui/actions/button/Button";

import type { CatalogItem } from "@/types/catalog";

interface CatalogActionsProps {
  item: CatalogItem;

  onAddToCart?: (item: CatalogItem) => void;

  onBookService?: (item: CatalogItem) => void;
}

export function CatalogActions({
  item,
  onAddToCart,
  onBookService,
}: CatalogActionsProps) {
  if (item.itemType === "SERVICE") {
    return (
      <Button className="w-full" onClick={() => onBookService?.(item)}>
        <Calendar size={16} className="mr-2" />
        Book Service
      </Button>
    );
  }

  return (
    <Button className="w-full" onClick={() => onAddToCart?.(item)}>
      <ShoppingCart size={16} className="mr-2" />
      Add to Cart
    </Button>
  );
}
