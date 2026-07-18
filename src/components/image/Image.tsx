import * as React from "react";
import { cn } from "../../lib/cn";
import { imageVariants } from "./Image.variants";
import { Wrapper, StyledImage } from "./Image.styles";

import type { ImageProps } from "./Image.types";

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    { src, alt, fallbackSrc, rounded, fit, className, onError, ...props },
    ref,
  ) => {
    const [imageSrc, setImageSrc] = React.useState(src);

    React.useEffect(() => {
      setImageSrc(src);
    }, [src]);

    const handleError = (
      event: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
      if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc);
      }

      onError?.(event);
    };

    return (
      <Wrapper>
        <StyledImage
          ref={ref}
          src={imageSrc}
          alt={alt}
          className={cn(
            imageVariants({
              rounded,
              fit,
            }),
            className,
          )}
          onError={handleError}
          loading="lazy"
          decoding="async"
          {...props}
        />
      </Wrapper>
    );
  },
);

Image.displayName = "Image";
