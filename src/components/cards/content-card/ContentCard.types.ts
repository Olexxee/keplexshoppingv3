import type { ReactNode, ElementType } from "react";
import type { VariantProps } from "class-variance-authority";
import type { PolymorphicComponentProps } from "../../../types/polymorphic";
import type { contentCardVariants } from "./ContentCard.variants";

export type ContentCardSize = "sm" | "md" | "lg";
export type ContentCardAppearance = "default" | "featured" | "compact";

type ContentCardOwnProps = {
  children: ReactNode;

  interactive?: boolean;

  size?: ContentCardSize;

  appearance?: ContentCardAppearance;

  aspectRatio?: "auto" | "square" | "video" | "portrait";
};

export type ContentCardProps<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, ContentCardOwnProps>;

export type ContentCardVariantProps = VariantProps<typeof contentCardVariants>;

export interface ContentCardImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fit?: "cover" | "contain" | "fill";
  position?: "center" | "top" | "bottom" | "left" | "right";
  zoomOnHover?: boolean;
}

export interface ContentCardOverlayProps {
  children: ReactNode;
  position?: "top" | "bottom" | "center" | "full";
  gradient?: string;
  className?: string;
  opacity?: number;
}

export interface ContentCardContentProps {
  children: ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between";
  spacing?: "none" | "sm" | "md" | "lg";
}

export interface ContentCardFooterProps {
  children: ReactNode;
  className?: string;
  divider?: boolean;
}
