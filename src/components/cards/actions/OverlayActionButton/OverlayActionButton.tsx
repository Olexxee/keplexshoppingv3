import { forwardRef } from "react";
import { StyledOverlayActionButton } from "./OverlayActionButton.styles";
import type { OverlayActionButtonProps } from "./OverlayActionButton.types";

export const OverlayActionButton = forwardRef<
  HTMLButtonElement,
  OverlayActionButtonProps
>(({ active, children, ...props }, ref) => {
  return (
    <StyledOverlayActionButton ref={ref} $active={active} {...props}>
      {children}
    </StyledOverlayActionButton>
  );
});

OverlayActionButton.displayName = "OverlayActionButton";
