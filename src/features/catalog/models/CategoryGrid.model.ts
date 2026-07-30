import type { CategoryCardModel } from "../../../components/commerce/category-card/CategoryCardModel";

export interface CategoryGridModel {
  title?: string;

  categories: CategoryCardModel[];
}
