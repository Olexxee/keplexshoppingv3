import { cn } from "../../../lib/cn";
import { Typography } from "../../typography/Typography";
import { Check } from "lucide-react";

interface Step {
  id: string;
  label: string;
  description?: string;
}

interface CheckoutStepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
  onStepClick?: (index: number) => void;
}

export const CheckoutStepper = ({
  steps,
  currentStep,
  className,
  onStepClick,
}: CheckoutStepperProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Progress line */}
      <div className="absolute left-0 right-0 top-5 h-0.5 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>

      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <button
              key={step.id}
              className="flex flex-col items-center"
              onClick={() => onStepClick?.(index)}
              disabled={!isCompleted && !isCurrent}
            >
              <div
                className={cn(
                  "relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all",
                  isCompleted
                    ? "bg-primary border-primary text-white"
                    : isCurrent
                      ? "border-primary bg-background text-primary"
                      : "border-muted bg-background text-muted-foreground",
                )}
              >
                {isCompleted ? (
                  <Check size={16} />
                ) : (
                  <Typography variant="bodySm" weight="medium">
                    {index + 1}
                  </Typography>
                )}
              </div>
              <div className="mt-2 text-center">
                <Typography
                  variant="bodySm"
                  weight={isCurrent ? "semibold" : "regular"}
                  color={isCurrent ? "primary" : "muted"}
                >
                  {step.label}
                </Typography>
                {step.description && (
                  <Typography variant="caption" color="muted">
                    {step.description}
                  </Typography>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
