import type{ ReactNode } from "react";
import { Button } from "./HeaderActions.styles";

interface HeaderIconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  badge?: number;
  ariaLabel: string;
}

export default function HeaderIconButton({
  children,
  onClick,
  badge,
  ariaLabel,
}: HeaderIconButtonProps) {
  return (
    <Button onClick={onClick} aria-label={ariaLabel} type="button">
      {children}

      {badge !== undefined && badge > 0 && <span>{badge}</span>}
    </Button>
  );
}
