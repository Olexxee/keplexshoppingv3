import { Container } from "../../components/commerce/layout/container";
import { Section } from "../../components/commerce/layout/section";
import { Skeleton } from "../../components/feedback/Skeleton";
import { ErrorBoundary } from "../../components/feedback/ErrorBoundary";
import { CatalogContent } from "./components/CatalogContent";
import { CategoryGrid } from "../../components/commerce/category-grid";
import { useCatalog } from "./hooks";
import { useStorefront } from "../storefront/hooks/storefront.hooks";
import type { CategoryCardModel } from "../../components/commerce/category-card/CategoryCardModel";

interface CatalogFeatureProps {
  variant?: "homepage" | "catalog";
}

export function CatalogFeature({ variant = "catalog" }: CatalogFeatureProps) {
  const { presentation, isLoading, error } = useCatalog();
  const { actions } = useStorefront((state) => state);

  const handleCategorySelect = (category: CategoryCardModel) => {
    console.log("Selected category:", category.slug);
  };

  if (isLoading) {
    return <Skeleton />;
  }

  if (error) {
    return <ErrorBoundary children={undefined} />;
  }

  if (!presentation) {
    return null;
  }

  const categories = presentation.categories.map((category) => ({
    ...category,
    image:
      category.image && typeof category.image === "object"
        ? ((category.image as any).url ?? (category.image as any).src)
        : category.image,
  })) as CategoryCardModel[];

  return (
    <Section spacing={variant === "homepage" ? "md" : "lg"}>
      <Container>
        <CategoryGrid
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
        <CatalogContent presentation={presentation} actions={actions} />
      </Container>
    </Section>
  );
}
