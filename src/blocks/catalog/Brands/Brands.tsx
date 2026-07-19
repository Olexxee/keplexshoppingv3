import { Link } from "react-router-dom";
import { brandsSection } from "../../../config/storefront/brandsSection";
import { Container } from "../../../components/commerce/layout/container/Container";
import { Section } from "../../../components/commerce/layout/section/Section";
import { SectionHeader } from "../../../components/commerce/layout/SectionHeader";
import { BrandCard } from "../../../components/cards/brand-card";
import * as S from "./Brands.styles";
import type { BrandsProps } from "./Brands.types";

export function Brands({ brands, className }: BrandsProps) {
  return (
    <Section spacing="xl" className={className}>
      <Container>
        <SectionHeader
          eyebrow={brandsSection.eyebrow}
          title={brandsSection.title}
          description={brandsSection.description}
          action={
            <Link to={brandsSection.action.href}>
              {brandsSection.action.label}
            </Link>
          }
        />

        <S.Grid>
          {brands.map((brand) => (
            <BrandCard
              key={brand.id}
              as={Link}
              to={`/brands/${brand.slug}`}
              brand={brand}
            />
          ))}
        </S.Grid>
      </Container>
    </Section>
  );
}
