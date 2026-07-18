import { Minus, Plus } from "lucide-react";

interface NumberStepperProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

export function NumberStepper({
  onIncrement,
  onDecrement,
}: NumberStepperProps) {
  return (
    <div className="flex items-center divide-x rounded-lg border border-border-primary overflow-hidden">
      <button
        type="button"
        onClick={onDecrement}
        className="p-2 hover:bg-background-secondary transition-colors"
      >
        <Minus size={16} />
      </button>
      <button
        type="button"
        onClick={onIncrement}
        className="p-2 hover:bg-background-secondary transition-colors"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
