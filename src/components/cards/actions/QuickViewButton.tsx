import { Eye } from "lucide-react";
import { OverlayActionButton } from "./OverlayActionButton/OverlayActionButton";

interface Props {
  onClick?: () => void;
}

export function QuickViewButton({ onClick }: Props) {
  return (
    <OverlayActionButton onClick={onClick} aria-label="Quick view">
      <Eye size={20} />
    </OverlayActionButton>
  );
}
