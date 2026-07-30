import type { CategoryCardModel } from "../../../../features/catalog/models";

export interface CategoryGridModel {
  categories: CategoryCardModel[];

  total: number;

  showViewAll: boolean;
}
