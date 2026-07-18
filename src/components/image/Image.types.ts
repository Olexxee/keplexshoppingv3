import type { ImgHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { imageVariants } from "./Image.variants";

export interface ImageProps
  extends
    ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  fallbackSrc?: string;
}
