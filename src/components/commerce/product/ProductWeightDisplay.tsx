import { cn } from "../../../lib/cn";
import { Typography } from "../../typography/Typography";
import { WeightInput } from "../../form/quantity-input/WeightInput";

interface ProductWeightDisplayProps {
  weight: number;
  unit?: "kg" | "g" | "lb";
  className?: string;
  showUnit?: boolean;
  label?: string;
  editable?: boolean;
  onChange?: (weight: number) => void;
}

export const ProductWeightDisplay = ({
  weight,
  unit = "kg",
  className,
  showUnit = true,
  label = "Weight",
  editable = false,
  onChange,
}: ProductWeightDisplayProps) => {
  if (editable) {
    return (
      <WeightInput
        value={weight}
        onChange={onChange}
        unit={unit}
        label={label}
        className={className}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Typography variant="bodySm" color="muted" weight="medium">
        {label}:
      </Typography>
      <Typography variant="bodySm" weight="medium">
        {weight} {showUnit && unit}
      </Typography>
    </div>
  );
};
