import React, { useState } from "react";
import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { InputBase } from "../../form/input-base";
import { Check, CreditCard, Wallet, Building } from "lucide-react";

interface PaymentMethod {
  id: string;
  type: "card" | "wallet" | "bank";
  name: string;
  description?: string;
  icon?: React.ReactNode;
  details?: {
    last4?: string;
    expiry?: string;
    balance?: number;
  };
}

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  onAddCard?: (cardData: any) => void;
  className?: string;
  showAddNew?: boolean;
}

export const PaymentMethodSelector = ({
  methods,
  selectedId,
  onSelect,
  onAddCard,
  className,
  showAddNew = true,
}: PaymentMethodSelectorProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const getTypeIcon = (type: PaymentMethod["type"]) => {
    switch (type) {
      case "card":
        return <CreditCard size={20} />;
      case "wallet":
        return <Wallet size={20} />;
      case "bank":
        return <Building size={20} />;
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      <Typography variant="title" weight="semibold">
        Payment Method
      </Typography>
      <div className="space-y-3">
        {methods.map((method) => {
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
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted/30">
                    {method.icon || getTypeIcon(method.type)}
                  </div>
                  <div>
                    <Typography variant="body" weight="medium">
                      {method.name}
                    </Typography>
                    {method.description && (
                      <Typography variant="bodySm" color="muted">
                        {method.description}
                      </Typography>
                    )}
                    {method.details && (
                      <div className="flex items-center gap-3 mt-1">
                        {method.details.last4 && (
                          <Typography variant="caption" color="muted">
                            •••• {method.details.last4}
                          </Typography>
                        )}
                        {method.details.expiry && (
                          <Typography variant="caption" color="muted">
                            Expires {method.details.expiry}
                          </Typography>
                        )}
                        {method.details.balance !== undefined && (
                          <Typography variant="caption" color="muted">
                            Balance: ${method.details.balance.toFixed(2)}
                          </Typography>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {isSelected && <Check size={16} className="text-primary" />}
              </div>
            </div>
          );
        })}
      </div>

      {showAddNew && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? "Cancel" : "Add New Payment Method"}
        </Button>
      )}

      {isAdding && (
        <PaymentCardForm
          onSubmit={(data) => {
            onAddCard?.(data);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      )}
    </div>
  );
};

// Payment Card Form
interface PaymentCardFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const PaymentCardForm = ({ onSubmit, onCancel }: PaymentCardFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(" ") : cleaned;
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-3">
      <InputBase
        placeholder="Name on Card"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <InputBase
        placeholder="Card Number"
        value={formatCardNumber(formData.number)}
        onChange={(e) => {
          const cleaned = e.target.value.replace(/\D/g, "");
          if (cleaned.length <= 16) {
            setFormData({ ...formData, number: cleaned });
          }
        }}
        required
      />
      <div className="grid grid-cols-2 gap-3">
        <InputBase
          placeholder="MM/YY"
          value={formatExpiry(formData.expiry)}
          onChange={(e) => {
            const cleaned = e.target.value.replace(/\D/g, "");
            if (cleaned.length <= 4) {
              setFormData({ ...formData, expiry: cleaned });
            }
          }}
          required
        />
        <InputBase
          placeholder="CVC"
          type="password"
          value={formData.cvc}
          onChange={(e) => {
            const cleaned = e.target.value.replace(/\D/g, "");
            if (cleaned.length <= 4) {
              setFormData({ ...formData, cvc: cleaned });
            }
          }}
          required
        />
      </div>
      <div className="flex gap-2">
        <Button type="submit">Add Card</Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
