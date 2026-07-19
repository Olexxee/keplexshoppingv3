import { testimonials } from "../../../config/storefront/testimonials";
import { Container } from "../../../components/commerce/layout/container/Container";
import { Section } from "../../../components/commerce/layout/section/Section";
import { SectionHeader } from "../../../components/commerce/layout/SectionHeader";
import { TestimonialCard } from "../../../components/cards/testimonial-card/TestimonialCard";
import * as S from "./Testimonials.styles";

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <Section spacing="xl" className={className}>
      <Container>
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
        />

        <S.Grid>
          {testimonials.items.map((testimonial) => (
            <TestimonialCard
                  key={String(testimonial.id)}
                  testimonial={testimonial as any} name={""}            />
          ))}
        </S.Grid>
      </Container>
    </Section>
  );
}
