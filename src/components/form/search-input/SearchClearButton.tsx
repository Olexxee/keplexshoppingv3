import { X } from "lucide-react";

interface Props {
  onClick: () => void;
}

export function SearchClearButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        text-text-muted
        hover:text-text-primary
        transition-colors
      "
      aria-label="Clear search"
    >
      <X size={18} />
    </button>
  );
}
