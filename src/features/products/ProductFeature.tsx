import { Root, ContentSection } from "./ProductFeature.styles";
import { useProduct } from "./hooks";
import { ProductHero } from "./components/ProductHero/ProductHero";
import { ProductDescription } from "./components/ProductDescription";
import { ProductSpecifications } from "./components/ProductSpecifications";
import { ProductReviews } from "./components/ProductReviews";
import { RelatedProducts } from "./components/RelatedProducts";
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
      <ProductHero
        gallery={presentation.gallery}
        info={presentation.info}
        purchase={presentation.purchase}
      />

      <ContentSection>
        <ProductDescription />

        <ProductSpecifications />

        <ProductReviews reviews={presentation.reviews} />

        <RelatedProducts related={presentation.relatedProducts} />
      </ContentSection>
    </Root>
  );
}
