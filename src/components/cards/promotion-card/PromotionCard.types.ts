export interface PromotionCardProps {
  /** Background image URL */
  backgroundImage?: string;
  /** Title */
  title: string;
  /** Description */
  description?: string;
  /** Call to action text */
  cta?: string;
  /** CTA link */
  ctaLink?: string;
  /** Background color (fallback) */
  backgroundColor?: string;
  /** Additional className */
  className?: string;
  /** Text alignment */
  align?: "left" | "center" | "right";
}
