import { Root, ContentSection } from "./ProductFeature.styles";
import { useProduct } from "./hooks";
import { ProductHero } from "./components/ProductHero/ProductHero";
import { ProductDescription } from "./components/ProductInfo/ProductInfo";
import { ProductSpecifications } from "./components";
import { ProductReviews } from "./components";
import { RelatedProducts } from "./components";
import { ProductSkeleton } from "../../components/feedback/ProductSkeleton";
import { ErrorBoundary } from "../../components/feedback/ErrorBoundary";

interface ProductFeatureProps {
  slug: string;
}

export function ProductFeature({ slug }: ProductFeatureProps) {
  const { presentation, isLoading, error, refetch } = useProduct(slug);

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
    <Root>
      <ProductHero hero={presentation.hero} quantity={0} />

      <ContentSection>
        <ProductDescription description={presentation.description} />

        <ProductSpecifications specifications={presentation.specifications} />

        <ProductReviews reviews={presentation.reviews} />

        <RelatedProducts related={presentation.relatedProducts} />
      </ContentSection>
    </Root>
  );
}
