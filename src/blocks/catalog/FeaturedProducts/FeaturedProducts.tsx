import { Link } from "react-router-dom";
import { featuredProducts } from "../../../config/storefront/featuredProducts";
import { Container } from "../../../components/commerce/layout/container";
import { Section } from "../../../components/commerce/layout/section/Section";
import { SectionHeader } from "../../../components/commerce/layout/SectionHeader";
import { CatalogCard } from "../../../components/cards/catalog/CatalogCard";

import * as S from "./FeaturedProducts.styles";

import type { FeaturedProductsProps } from "./FeaturedProducts.types";

export function FeaturedProducts({
  products,
  className,
}: FeaturedProductsProps) {
  return (
    <Section spacing="xl" className={className}>
      <Container>
        <SectionHeader
          eyebrow={featuredProducts.eyebrow}
          title={featuredProducts.title}
          description={featuredProducts.description}
          action={
            featuredProducts.action && (
              <Link to={featuredProducts.action.href}>
                {featuredProducts.action.label}
              </Link>
            )
          }
        />

        <S.Grid>
          {products.map((product) => (
            <CatalogCard item={undefined} key={product.id} {...product} />
          ))}
        </S.Grid>
      </Container>
    </Section>
  );
}
