import { Container } from "../../components/commerce/layout/container";
import { Section } from "../../components/commerce/layout/section";
import { ProductSkeleton } from "../../components/feedback/Skeleton";
import { ErrorBoundary } from "../../components/feedback/ErrorBoundary";
import { CatalogContent } from "./components/CatalogContent";
import { useCatalog } from "./hooks";


interface CatalogFeatureProps {
  variant?: "homepage" | "catalog";
}

export function CatalogFeature({ variant = "catalog" }: CatalogFeatureProps) {
  const { presentation, isLoading, error, refetch } = useCatalog();

  if (isLoading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <ErrorBoundary onRetry={refetch} />;
  }

  if (!presentation) {
    return null;
  }

  return (
    <Section spacing={variant === "homepage" ? "md" : "lg"}>
      <Container>
        <CatalogContent presentation={presentation} variant={variant} />
      </Container>
    </Section>
  );
}
