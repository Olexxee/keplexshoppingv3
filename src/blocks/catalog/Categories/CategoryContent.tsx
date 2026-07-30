import { Link } from "react-router-dom";
import { Container } from "../../../components/commerce/layout/container/Container";
import { Section } from "../../../components/commerce/layout/section/Section";
import { SectionHeader } from "../../../components/commerce/layout/SectionHeader";
import { CategoryGrid } from "../../../components/commerce/category-grid";
import type { CategoryPresentationModel } from "../presentation/models";


interface CategoryContentProps {
  presentation: CategoryPresentationModel;
  variant?: "homepage" | "catalog";
}

export function CategoryContent({
  presentation,
  variant = "homepage",
}: CategoryContentProps) {
  return (
    <Section spacing={variant === "homepage" ? "xl" : "lg"}>
      <Container>
        <SectionHeader
          eyebrow={presentation.hero.eyebrow}
          title={presentation.hero.title}
          description={presentation.hero.description}
        />

        <CategoryGrid
          categories={presentation.grid.categories}
          renderLink={(category) => (
            <Link to={`/catalog?category=${category.slug}`} />
          )}
        />
      </Container>
    </Section>
  );
}
