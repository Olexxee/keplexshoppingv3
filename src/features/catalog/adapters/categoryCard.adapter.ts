import type { Category } from "../../../types/catalog.types";
import type { CategoryCardModel } from "../../../components/commerce/category-card/CategoryCardModel";

export function adaptCategoryCard(category: Category): CategoryCardModel {
  return {
    id: category.id,

    slug: category.slug,

    title: category.name,

    description: category.description,

    image: category.image?.url,

    productCount: category.productCount,
  };
}
