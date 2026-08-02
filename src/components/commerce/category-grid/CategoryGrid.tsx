import { CategoryCard } from "../category-card";
import * as S from "./CategoryGrid.styles";
import type { CategoryGridProps } from "./CategoryGrid.types";

export function CategoryGrid({ categories, onCategorySelect }: CategoryGridProps) {
  return (
    <S.Root>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onClick={() => onCategorySelect?.(category)}
        />
      ))}
    </S.Root>
  );
}
