import React, { useState } from "react";
import { cn } from "../../../lib/cn";
import { InputBase } from "../input-base";

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  countryCode?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

const COUNTRY_CODES = [
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+234", label: "NG" },
  { code: "+91", label: "IN" },
  { code: "+86", label: "CN" },
  { code: "+81", label: "JP" },
  { code: "+49", label: "DE" },
  { code: "+33", label: "FR" },
  { code: "+39", label: "IT" },
  { code: "+55", label: "BR" },
  { code: "+61", label: "AU" },
  { code: "+82", label: "KR" },
];

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    { value, onChange, countryCode = "+1", className, disabled, placeholder },
    ref,
  ) => {
    const [selectedCode, setSelectedCode] = useState(countryCode);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/\D/g, "");
      onChange?.(raw);
    };

    const formatPhoneNumber = (value?: string) => {
      if (!value) return "";
      const cleaned = value.replace(/\D/g, "");
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
      }
      return cleaned;
    };

    return (
      <div className={cn("flex gap-2", className)}>
        <select
          value={selectedCode}
          onChange={(e) => setSelectedCode(e.target.value)}
          className="px-3 py-2 rounded-lg border border-border-primary bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={disabled}
        >
          {COUNTRY_CODES.map(({ code, label }) => (
            <option key={code} value={code}>
              {code} ({label})
            </option>
          ))}
        </select>
        <InputBase
          ref={ref}
          type="tel"
          value={value ? formatPhoneNumber(value) : ""}
          onChange={handlePhoneChange}
          placeholder={placeholder || "Phone number"}
          disabled={disabled}
          className="flex-1"
        />
      </div>
    );
  },
);

PhoneInput.displayName = "PhoneInput";
