import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../../lib/cn";
import { sectionVariants } from "./section.variants";


export interface SectionProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {}

export function Section({
  className,
  spacing,
  background,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionVariants({
          spacing,
          background,
        }),
        className,
      )}
      {...props}
    />
  );
}
