import { Search } from "lucide-react";
import { InputBase } from "../../../components/form/input-base";

interface SearchControlProps {
  value: string;

  onChange(value: string): void;
}

export function SearchControl({ value, onChange }: SearchControlProps) {
  return (
    <InputBase
      value={value}
      placeholder="Search products..."
      leftSlot={<Search size={18} />}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
