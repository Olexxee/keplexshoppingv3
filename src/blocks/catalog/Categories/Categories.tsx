import { ProductSkeleton } from "../../../components/feedback/Skeleton";
import { ErrorBoundary } from "../../../components/feedback/ErrorBoundary";
import { CategoryContent } from "./CategoryContent";
import { useCategory } from "../../../features/catalog/hooks/useCatalog";

interface CategoryFeatureProps {
  variant?: "homepage" | "catalog";
}

export function CategoryFeature({
  variant = "homepage",
}: CategoryFeatureProps) {
  const { presentation, isLoading, error, refetch } = useCategory();

  if (isLoading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <ErrorBoundary onRetry={refetch} />;
  }

  if (!presentation) {
    return null;
  }

  return <CategoryContent presentation={presentation} variant={variant} />;
}
