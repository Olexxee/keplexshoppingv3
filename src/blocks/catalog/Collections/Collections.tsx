import { Link } from "react-router-dom";
import { collectionsSection } from "./collectionsSection";
import { Container } from "../../../components/commerce/layout/container/Container";
import { Section } from "../../../components/commerce/layout/section/Section";
import { SectionHeader } from "../../../components/commerce/layout/SectionHeader";
import { CollectionCard } from "../../../components/cards/collection-card";
import * as S from "./Collections.styles";
import type { CollectionsProps } from "./Collections.types";


export function Collections({ collections, className }: CollectionsProps) {
  return (
    <Section spacing="xl" className={className}>
      <Container>
        <SectionHeader
          eyebrow={collectionsSection.eyebrow}
          title={collectionsSection.title}
          description={collectionsSection.description}
          action={
            <Link to={collectionsSection.action.href}>
              {collectionsSection.action.label}
            </Link>
          }
        />

        <S.Grid>
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </S.Grid>
      </Container>
    </Section>
  );
}
