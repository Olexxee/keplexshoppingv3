import * as React from "react";
import { cn } from "@/lib/cn";
import { cardOverlayVariants } from "./ContentCard.variants";
import type { ContentCardOverlayProps } from "./ContentCard.types";

export function ContentCardOverlay({
  children,
  position = "bottom",
  gradient,
  className,
  opacity = 0.6,
  ...props
}: ContentCardOverlayProps) {
  return (
    <div
      className={cn(
        cardOverlayVariants({ position }),
        "flex items-center p-6",
        className,
      )}
      style={
        gradient
          ? { backgroundImage: gradient }
          : { backgroundColor: `rgba(0,0,0,${opacity})` }
      }
      {...props}
    >
      {children}
    </div>
  );
}
