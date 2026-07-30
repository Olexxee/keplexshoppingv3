import type { CategoryCardModel } from "../category-card/CategoryCardModel";

export interface CategoryGridProps {
  title?: string;

  categories: CategoryCardModel[];
}
