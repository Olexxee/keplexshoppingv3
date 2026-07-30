import type { Product } from "../../../types/product.types";
import type { RelatedProductsModel } from "../presentation/models";
import { adaptProductCard } from "./productCard.adapter";

export function adaptRelatedProducts(
  products: Product[],
): RelatedProductsModel {
  return {
    title: "Related Products",

    products: products.map(adaptProductCard),
  };
}
