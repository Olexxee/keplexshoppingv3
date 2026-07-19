import { cta } from "../../../config/storefront/cta";
import { Container } from "../../../components/commerce/layout/container/Container";
import { Section } from "../../../components/commerce/layout/section";
import { SectionHeader } from "../../../components/commerce/layout/SectionHeader";
import { Input } from "../../../components/form/input/Input";
import { Button } from "../../../components/button/Button";
import * as S from "./CTA.styles";
import type { CTAProps } from "./CTA.types";

export function CTA({ className }: CTAProps) {
  return (
    <Section spacing="xl" className={className}>
      <Container>
        <S.Wrapper>
          <SectionHeader
            eyebrow={cta.eyebrow}
            title={cta.title}
            description={cta.description}
            centered={true}
          />

          <S.Form>
            <Input placeholder={cta.placeholder} />

            <Button>{cta.buttonLabel}</Button>
          </S.Form>
        </S.Wrapper>
      </Container>
    </Section>
  );
}
