import { SlidersHorizontal } from "lucide-react";
import { Button } from "../../../components/button";
import type { FilterButtonProps } from "./FilterButton.types";



export function FilterButton({ activeFilters, onClick }: FilterButtonProps) {
  return (
    <Button
      variant="outline"
      leftIcon={<SlidersHorizontal size={16} />}
      onClick={onClick}
    >
      Filters
      {activeFilters > 0 && (
        <span className="ml-1 rounded-full bg-brand-primary px-2 py-0.5 text-xs text-white">
          {activeFilters}
        </span>
      )}
    </Button>
  );
}
