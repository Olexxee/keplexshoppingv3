// adapters/productDescription.adapter.ts

import type { Product } from "../../../types/product.types";
import type { ProductDescriptionModel } from "../presentation";

export function adaptProductDescription(
  product: Product,
): ProductDescriptionModel {
  return {
    title: "Description",

    description: product.description,

    features: [],

    highlights: [],
  };
}
