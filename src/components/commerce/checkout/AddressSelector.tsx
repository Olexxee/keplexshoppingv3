import React, { useState } from "react";
import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { InputBase } from "../../form/input-base";
import { Checkbox } from "../../form/quantity-input/Checkbox";
import { Check, Edit2, Plus, X } from "lucide-react";

interface Address {
  id: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault?: boolean;
}

interface AddressSelectorProps {
  addresses: Address[];
  selectedId?: string;
  onSelect?: (addressId: string) => void;
  onAdd?: (address: Omit<Address, "id">) => void;
  onEdit?: (address: Address) => void;
  onDelete?: (addressId: string) => void;
  className?: string;
  showAddNew?: boolean;
}

export const AddressSelector = ({
  addresses,
  selectedId,
  onSelect,
  onAdd,
  onEdit,
  onDelete,
  className,
  showAddNew = true,
}: AddressSelectorProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAdd = (address: Omit<Address, "id">) => {
    onAdd?.(address);
    setIsAdding(false);
  };

  if (isAdding) {
    return (
      <AddressForm onSubmit={handleAdd} onCancel={() => setIsAdding(false)} />
    );
  }

  if (editingId) {
    const address = addresses.find((a) => a.id === editingId);
    if (address) {
      return (
        <AddressForm
          initialValues={address}
          onSubmit={(updated) => {
            onEdit?.({ ...address, ...updated });
            setEditingId(null);
          }}
          onCancel={() => setEditingId(null)}
        />
      );
    }
  }

  return (
    <div className={cn("space-y-3", className)}>
      {addresses.map((address) => {
        const isSelected = selectedId === address.id;
        return (
          <div
            key={address.id}
            className={cn(
              "p-4 rounded-lg border-2 transition-all cursor-pointer",
              isSelected
                ? "border-primary bg-primary/5"
                : "border-border-primary hover:border-muted-foreground",
            )}
            onClick={() => onSelect?.(address.id)}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Typography variant="body" weight="medium">
                    {address.firstName} {address.lastName}
                  </Typography>
                  {address.isDefault && (
                    <span className="text-xs bg-muted px-2 py-0.5 rounded">
                      Default
                    </span>
                  )}
                </div>
                <Typography variant="bodySm" color="muted" className="mt-1">
                  {address.address1}
                  {address.address2 && `, ${address.address2}`}
                </Typography>
                <Typography variant="bodySm" color="muted">
                  {address.city}, {address.state} {address.postalCode}
                </Typography>
                <Typography variant="bodySm" color="muted">
                  {address.country}
                </Typography>
                <Typography variant="bodySm" color="muted">
                  {address.phone}
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                {isSelected && <Check size={16} className="text-primary" />}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingId(address.id);
                  }}
                  className="p-1 hover:bg-muted rounded transition-colors"
                >
                  <Edit2 size={14} />
                </button>
                {!address.isDefault && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete?.(address.id);
                    }}
                    className="p-1 hover:bg-muted rounded transition-colors text-destructive"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {showAddNew && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsAdding(true)}
        >
          <Plus size={16} className="mr-2" />
          Add New Address
        </Button>
      )}
    </div>
  );
};

// Address Form Component
interface AddressFormProps {
  initialValues?: Partial<Address>;
  onSubmit: (address: Omit<Address, "id">) => void;
  onCancel: () => void;
}

const AddressForm = ({
  initialValues,
  onSubmit,
  onCancel,
}: AddressFormProps) => {
  const [formData, setFormData] = useState({
    firstName: initialValues?.firstName || "",
    lastName: initialValues?.lastName || "",
    address1: initialValues?.address1 || "",
    address2: initialValues?.address2 || "",
    city: initialValues?.city || "",
    state: initialValues?.state || "",
    postalCode: initialValues?.postalCode || "",
    country: initialValues?.country || "",
    phone: initialValues?.phone || "",
    isDefault: initialValues?.isDefault || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <InputBase
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange("firstName")}
          required
        />
        <InputBase
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange("lastName")}
          required
        />
      </div>
      <InputBase
        placeholder="Address Line 1"
        value={formData.address1}
        onChange={handleChange("address1")}
        required
      />
      <InputBase
        placeholder="Address Line 2 (Optional)"
        value={formData.address2}
        onChange={handleChange("address2")}
      />
      <div className="grid grid-cols-2 gap-3">
        <InputBase
          placeholder="City"
          value={formData.city}
          onChange={handleChange("city")}
          required
        />
        <InputBase
          placeholder="State/Province"
          value={formData.state}
          onChange={handleChange("state")}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <InputBase
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleChange("postalCode")}
          required
        />
        <InputBase
          placeholder="Country"
          value={formData.country}
          onChange={handleChange("country")}
          required
        />
      </div>
      <InputBase
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange("phone")}
        required
      />
      <Checkbox
        label="Set as default address"
        checked={formData.isDefault}
        onChange={(e) =>
          setFormData({ ...formData, isDefault: e.target.checked })
        }
      />
      <div className="flex gap-2">
        <Button type="submit">
          {initialValues ? "Update" : "Add"} Address
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
