import { Calendar, Eye, ShoppingCart } from "lucide-react";
import { Button } from "../../button";
import type { CatalogItem } from "../../../types/catalog.types";

interface CatalogCardActionsProps {
  item: CatalogItem;

  onQuickView?: (item: CatalogItem) => void;

  onAddToCart?: (item: CatalogItem) => void;

  onBookService?: (item: CatalogItem) => void;
}

export function CatalogCardActions({
  item,
  onQuickView,
  onAddToCart,
  onBookService,
}: CatalogCardActionsProps) {
  const isProduct = item.itemType === "PRODUCT";

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          onQuickView?.(item);
        }}
      >
        <Eye size={16} />
      </Button>

      {isProduct ? (
        <Button
          className="flex-1"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.(item);
          }}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      ) : (
        <Button
          className="flex-1"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onBookService?.(item);
          }}
        >
          <Calendar size={16} />
          Book Service
        </Button>
      )}
    </div>
  );
}
