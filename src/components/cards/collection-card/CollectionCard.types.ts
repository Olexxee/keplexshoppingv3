import type { ReactNode } from "react";

export interface CollectionCardProps {
  /** Hero image URL */
  image: string;
  /** Collection title */
  title: string;
  /** Collection subtitle */
  subtitle?: string;
  /** Call to action text */
  cta?: string;
  /** Collection slug for navigation */
  slug: string;
  /** Additional className */
  className?: string;
  /** Custom overlay content */
  overlayContent?: ReactNode;
}
