import * as React from "react";
import { cn } from "../../../lib/cn";
import { cardImageVariants } from "./ContentCard.variants";
import type { ContentCardImageProps } from "./ContentCard.types";

export function ContentCardImage({
  src,
  alt,
  className,
  loading = "lazy",
  fit = "cover",
  position = "center",
  zoomOnHover = true,
  ...props
}: ContentCardImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="relative overflow-hidden bg-background-secondary">
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn(
          cardImageVariants({ fit, zoomOnHover }),
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className,
        )}
        style={{ objectPosition: position }}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-background-secondary" />
      )}
    </div>
  );
}
