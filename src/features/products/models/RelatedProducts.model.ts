import type { ProductCardModel } from "../presentation/ProductCard.model";

export interface RelatedProductsModel {
  title: string;
  products: ProductCardModel[];
}
