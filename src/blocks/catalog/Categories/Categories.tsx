import { Link } from "react-router-dom";
import { categories } from "../../../config/storefront/categories";
import { Container } from "../../../components/commerce/layout/container/Container";
import { Section } from "../../../components/commerce/layout/section/Section";
import { SectionHeader } from "../../../components/commerce/layout/SectionHeader";
import { CategoryCard } from "../../../components/cards/category-card";
import type { CategoriesProps } from "./Categories.types";
import * as S from "./Categories.styles";

export function Categories({ className }: CategoriesProps) {
  return (
    <Section spacing="xl" className={className}>
      <Container>
        <SectionHeader
          eyebrow={categories.eyebrow}
          title={categories.title}
          description={categories.description}
        />

        <S.Grid>
          {categories.items.map((category) => (
            <CategoryCard
              key={category.id}
              as={Link}
              to={category.href}
              title={category.title}
              description={category.description}
              image={category.image}
              productCount={category.productCount}
            />
          ))}
        </S.Grid>
      </Container>
    </Section>
  );
}