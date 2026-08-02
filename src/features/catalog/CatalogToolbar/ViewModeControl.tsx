import { Grid2X2, List } from "lucide-react";
import { Button } from "../../../components/button";
import type { ViewModeControlProps } from "./ViewModeControl.types";


export function ViewModeControl({ value, onChange }: ViewModeControlProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={value === "grid" ? "primary" : "ghost"}
        size="icon"
        onClick={() => onChange("grid")}
      >
        <Grid2X2 size={18} />
      </Button>
      <Button
        variant={value === "list" ? "primary" : "ghost"}
        size="icon"
        onClick={() => onChange("list")}
      >
        <List size={18} />
      </Button>
    </div>
  );
}
