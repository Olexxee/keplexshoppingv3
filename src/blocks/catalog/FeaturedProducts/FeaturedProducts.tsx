import { featuredProducts } from "../../../config/storefront/featuredProducts";
import { Container } from "../../../components/commerce/layout/container";
import { Section } from "../../../components/commerce/layout/section/Section";
import { SectionHeader } from "../../../components/commerce/layout/SectionHeader";
import { CatalogCard } from "../../../components/cards/catalog/CatalogCard";
import { EmptyState } from "../../../components/feedback";
import * as S from "./FeaturedProducts.styles";
import type { FeaturedProductsProps } from "./FeaturedProducts.types";

type Props = FeaturedProductsProps & { loading?: boolean };

export function FeaturedProducts({
  products,
  loading = false,
  className,
}: Props) {

  // Loading State
  if (loading) {
    return (
      <Section spacing="xl" className={className}>
        <Container>
          <SectionHeader
            eyebrow={featuredProducts.eyebrow}
            title={featuredProducts.title}
            description={featuredProducts.description}
          />

          <EmptyState title={""} />
        </Container>
      </Section>
    );
  }

  // Empty State
  if (!products.length) {
    return (
      <Section spacing="xl" className={className}>
        <Container>
          <SectionHeader
            eyebrow={featuredProducts.eyebrow}
            title={featuredProducts.title}
            description={featuredProducts.description}
          />

          <EmptyState
            title="No featured products"
            description="Check back later for new arrivals."
          />
        </Container>
      </Section>
    );
  }

  // Normal State
  return (
    <Section spacing="xl" className={className}>
      <Container>
        <SectionHeader
          eyebrow={featuredProducts.eyebrow}
          title={featuredProducts.title}
          description={featuredProducts.description}
        />

        <S.Grid>
          {products.map((product) => (
            <CatalogCard
              key={product.id}
              item={product}
            />
          ))}
        </S.Grid>
      </Container>
    </Section>
  );
}
