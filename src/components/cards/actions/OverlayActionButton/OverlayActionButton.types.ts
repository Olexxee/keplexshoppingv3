import type { ButtonHTMLAttributes } from "react";

export interface OverlayActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}
