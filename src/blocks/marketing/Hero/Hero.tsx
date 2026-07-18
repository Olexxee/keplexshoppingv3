import { Link } from "react-router-dom";
import { hero } from "../../../config/storefront/hero";
import { Button } from "../../../components/button";
import { Image } from "../../../components/image";
import { Typography } from "../../../components/typography";
import { Container } from "../../../components/commerce/layout/container/Container";
import { Section } from "../../../components/commerce/layout/section/Section";
import * as S from "./Hero.styles";

export function Hero() {
  return (
    <Section spacing="2xl">
      <Container>
        <S.Wrapper>
          <S.Content>
            {hero.eyebrow && (
              <Typography
                as="span"
                variant="label"
                color="brand"
                weight="semibold"
              >
                {hero.eyebrow}
              </Typography>
            )}

            <Typography as="h1" variant="displayLg">
              {hero.title}
            </Typography>

            <Typography variant="body" color="secondary">
              {hero.description}
            </Typography>

            <S.Actions>
              {hero.actions.map((action) => (
                <Button
                  key={action.href}
                  as={Link}
                  to={action.href}
                  variant={action.variant}
                >
                  {action.label}
                </Button>
              ))}
            </S.Actions>

            {!!hero.stats.length && (
              <S.Statistics>
                {hero.stats.map((item) => (
                  <S.Statistic key={item.label}>
                    <Typography as="strong" variant="h3">
                      {item.value}
                    </Typography>

                    <Typography variant="bodySm" color="secondary">
                      {item.label}
                    </Typography>
                  </S.Statistic>
                ))}
              </S.Statistics>
            )}
          </S.Content>

          <S.ImageWrapper>
            <Image
              src={hero.media.src}
              alt={hero.media.alt}
              aspectRatio="wide"
              rounded="lg"
            />
          </S.ImageWrapper>
        </S.Wrapper>
      </Container>
    </Section>
  );
}
