import type { ReactNode } from "react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-end justify-between gap-6 mb-10",
        centered && "flex-col items-center text-center",
        className,
      )}
    >
      <div className="space-y-2 max-w-2xl">
        {eyebrow && (
          <Typography variant="label" weight="semibold" color="primary">
            {eyebrow}
          </Typography>
        )}

        <Typography variant="displaySm" weight="bold">
          {title}
        </Typography>

        {description && (
          <Typography variant="body" color="secondary">
            {description}
          </Typography>
        )}
      </div>

      {action && action}
    </div>
  );
}
