import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Root, Label, Options } from "./VariantSelector.styles";
import type { VariantSelectorProps } from "./VariantSelector.types";


export function VariantSelector({ purchase }: VariantSelectorProps) {
  return (
    <Root>
      <Label>Options</Label>

      <Options>
        {purchase.variants.map((variant: { id: Key | null | undefined; label: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
          <button key={variant.id} type="button">
            {variant.label}
          </button>
        ))}
      </Options>
    </Root>
  );
}
