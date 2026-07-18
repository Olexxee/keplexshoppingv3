import { Link } from "react-router-dom";
import { promotion } from "../../../config/storefront/promotion";
import { Button } from "../../../components/button";
import { Image } from "../../../components/image";
import { Typography } from "../../../components/typography/Typography";
import { Card, CardBody } from "../../../components/ui/card";
import { Container } from "../../../components/commerce/layout/container/Container";
import { Section } from "../../../components/commerce/layout/section/Section";
import * as S from "./PromotionBanner.styles";
import type { PromotionBannerProps } from "./PromotionBanner.types";

export function PromotionBanner({ className }: PromotionBannerProps) {
  return (
    <Section spacing="xl" className={className}>
      <Container>
        <Card elevated rounded="xl" padding="none">
          <CardBody>
            <S.Wrapper>
              <S.Content>
                {promotion.eyebrow && (
                  <Typography variant="label" color="primary">
                    {promotion.eyebrow}
                  </Typography>
                )}

                <Typography variant="displaySm" weight="bold">
                  {promotion.title}
                </Typography>

                <Typography variant="body" color="muted">
                  {promotion.description}
                </Typography>

                <Button as={Link} to={promotion.action.href}>
                  {promotion.action.label}
                </Button>
              </S.Content>

              <S.Media>
                <Image
                  src={promotion.image}
                  alt={promotion.title}
                  aspectRatio="wide"
                  rounded="lg"
                />
              </S.Media>
            </S.Wrapper>
          </CardBody>
        </Card>
      </Container>
    </Section>
  );
}
