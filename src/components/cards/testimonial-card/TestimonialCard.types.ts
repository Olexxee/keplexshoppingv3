export interface TestimonialCardProps {
  /** Customer avatar URL */
  avatar?: string;
  /** Customer name */
  name: string;
  /** Customer company */
  company?: string;
  /** Rating (1-5) */
  rating?: number;
  /** Testimonial text */
  testimonial: string;
  /** Additional className */
  className?: string;
}
