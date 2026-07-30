import type { BadgeModel } from "../../../models/commerce";
import type { Product, ProductVariant } from "../../../types/product.types";

export function createBadgeModels(
  product: Product,
  variant?: ProductVariant,
): BadgeModel[] {
  const badges: BadgeModel[] = [];

  if (product.isNew) {
    badges.push({
      type: "new",
      label: "New",
      id: "",
    });
  }

  if (product.isBestSeller) {
    badges.push({
      type: "bestSeller",
      label: "Best Seller",
      id: "",
    });
  }

  if (variant?.compareAtPrice && variant.compareAtPrice > variant.price) {
    badges.push({
      type: "sale",
      label: `-${Math.round(
        ((variant.compareAtPrice - variant.price) / variant.compareAtPrice) *
          100,
      )}%`,
      id: "",
    });
  }

  return badges;
}
