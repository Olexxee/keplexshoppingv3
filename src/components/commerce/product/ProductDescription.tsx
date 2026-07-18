import { useState } from "react";
import { cn } from "../../../lib/cn";
import { Typography } from "../../typography/Typography";
import { Button } from "../../ui/actions/button/Button";

interface ProductDescriptionProps {
  description: string;
  className?: string;
  maxLines?: number;
  expandable?: boolean;
  expandText?: string;
  collapseText?: string;
}

export const ProductDescription = ({
  description,
  className,
  maxLines = 4,
  expandable = true,
  expandText = "Show more",
  collapseText = "Show less",
}: ProductDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const lines = description.split("\n");
  const shouldTruncate = lines.length > maxLines;

  const displayDescription =
    shouldTruncate && !isExpanded
      ? lines.slice(0, maxLines).join("\n")
      : description;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="prose prose-sm max-w-none">
        {displayDescription.split("\n").map((line, index) => (
          <Typography key={index} variant="body" color="secondary">
            {line || "\u00A0"}
          </Typography>
        ))}
      </div>
      {shouldTruncate && expandable && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-0 hover:bg-transparent text-primary"
        >
          {isExpanded ? collapseText : expandText}
        </Button>
      )}
    </div>
  );
};
