import { cn } from "../../../lib/cn";
import { Typography } from "../../typography/Typography";
import { Price } from "../../data-display/Price";
import { Check } from "lucide-react";

interface DeliveryMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: number;
  type: "standard" | "express" | "same-day" | "pickup";
}

interface DeliveryMethodSelectorProps {
  methods: DeliveryMethod[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export const DeliveryMethodSelector = ({
  methods,
  selectedId,
  onSelect,
  className,
}: DeliveryMethodSelectorProps) => {
  const getTypeConfig = (type: DeliveryMethod["type"]) => {
    const configs = {
      standard: {
        label: "Standard",
        variant: "default" as const,
      },
      express: {
        label: "Express",
        variant: "success" as const,
      },
      "same-day": {
        label: "Same Day",
        variant: "warning" as const,
      },
      pickup: {
        label: "Pickup",
        variant: "info" as const,
      },
    };
    return configs[type];
  };

  return (
    <div className={cn("space-y-3", className)}>
      <Typography variant="title" weight="semibold">
        Delivery Method
      </Typography>
      <div className="grid gap-3">
        {methods.map((method) => {
          const config = getTypeConfig(method.type);
          const isSelected = selectedId === method.id;

          return (
            <div
              key={method.id}
              className={cn(
                "p-4 rounded-lg border-2 transition-all cursor-pointer",
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-border-primary hover:border-muted-foreground",
              )}
              onClick={() => onSelect?.(method.id)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Typography variant="body" weight="medium">
                      {method.name}
                    </Typography>
                    <span
                      className={cn(
                        "text-xs px-2 py-0.5 rounded",
                        config.variant === "success" &&
                          "bg-success/10 text-success",
                        config.variant === "warning" &&
                          "bg-warning/10 text-warning",
                        config.variant === "info" &&
                          "bg-blue-100 text-blue-800",
                        config.variant === "default" &&
                          "bg-muted text-muted-foreground",
                      )}
                    >
                      {config.label}
                    </span>
                  </div>
                  <Typography variant="bodySm" color="muted" className="mt-0.5">
                    {method.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="muted"
                    className="flex items-center gap-1 mt-1"
                  >
                    {method.estimatedDays} days
                  </Typography>
                </div>
                <div className="text-right">
                  <Price amount={method.price} size="md" />
                  {isSelected && (
                    <Check size={16} className="text-primary mt-1 ml-auto" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
