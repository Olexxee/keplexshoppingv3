import { Root, Label, Options, Option } from "./VariantSelector.styles";
import type { VariantSelectorProps } from "./VariantSelector.types";



export function VariantSelector({
  purchase,
  selectedVariantId,
  onChange,
}: VariantSelectorProps) {
  if (!purchase.hasVariants) {
    return null;
  }

  return (
    <Root>
      <Label>Choose Variant</Label>

      <Options>
        {purchase.variants.map((variant) => (
          <Option
            key={variant.id}
            $selected={variant.id === selectedVariantId}
            disabled={!variant.available}
            onClick={() => onChange?.(variant.id)}
          >
            {variant.label}
          </Option>
        ))}
      </Options>
    </Root>
  );
}
