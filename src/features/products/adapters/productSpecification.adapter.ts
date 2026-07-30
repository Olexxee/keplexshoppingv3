import type { Product } from "../../../types/product.types";
import type { ProductSpecificationModel } from "../presentation";
import { getDefaultVariant } from "../domain";

export function adaptProductSpecifications(
  product: Product,
): ProductSpecificationModel {
  const variant = getDefaultVariant(product);

  return {
    groups: [
      {
        title: "General",

        items: [
          {
            label: "Brand",
            value: product.brand?.name ?? "-",
          },
          {
            label: "SKU",
            value: variant?.sku ?? "-",
          },
          {
            label: "Category",
            value: product.category?.name ?? "-",
          },
        ],
      },

      {
        title: "Inventory",

        items: [
          {
            label: "Stock",
            value: String(variant?.stock ?? 0),
          },
        ],
      },
    ],
  };
}
