import type { ReactNode } from "react";

export interface ServiceCardProps {
  /** Icon component or element */
  icon: ReactNode;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** Additional className */
  className?: string;
}
