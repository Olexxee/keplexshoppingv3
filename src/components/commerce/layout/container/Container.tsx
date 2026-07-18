import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../../lib/cn";
import { containerVariants } from "./container.variants";

export interface ContainerProps
  extends
    HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export function Container({
  className,
  size,
  padding,
  fluid,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        containerVariants({
          size,
          padding,
          fluid,
        }),
        className,
      )}
      {...props}
    />
  );
}
