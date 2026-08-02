import { X } from "lucide-react";
import { Button } from "../../../components/button";

import type { ActiveFiltersProps } from "./ActiveFilters.types";

export function ActiveFilters({
  filters,
  onRemove,
  onClear,
}: ActiveFiltersProps) {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant="secondary"
          size="sm"
          rightIcon={<X size={14} />}
          onClick={() => onRemove(filter.id)}
        >
          {filter.label}
        </Button>
      ))}

      <Button variant="link" size="sm" onClick={onClear}>
        Clear all
      </Button>
    </div>
  );
}
