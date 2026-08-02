import { ChevronDown } from "lucide-react";
import { Button } from "../../../components/button/Button";
import { Popover } from "../../../components/Overlays/Popover";
import type { SortControlProps } from "./SortControl.types";


const options = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popular", label: "Most Popular" },
] as const;

export function SortControl({ value, onChange }: SortControlProps) {
  const selected =
    options.find((item) => item.value === value)?.label ?? "Featured";

  return (
    <Popover
      content={
        <div className="min-w-56 space-y-1">
          {options.map((option) => (
            <Button
              key={option.value}
              variant="ghost"
              fullWidth
              className="justify-start"
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      }
    >
      <Button variant="outline" rightIcon={<ChevronDown size={16} />}>
        {selected}
      </Button>
    </Popover>
  );
}
