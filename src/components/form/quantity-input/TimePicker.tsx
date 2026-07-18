import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { InputBase } from "../input-base";

interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  format?: "12h" | "24h";
  interval?: number;
}

export const TimePicker = ({
  value = "12:00",
  onChange,
  className,
  disabled,
  placeholder = "Select time",
  format = "12h",
  interval = 30,
}: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const generateTimeSlots = () => {
    const slots = [];
    const totalMinutes = format === "12h" ? 12 * 60 : 24 * 60;
    const startHour = format === "12h" ? 0 : 0;

    for (let minutes = 0; minutes < totalMinutes; minutes += interval) {
      const hour = Math.floor(minutes / 60) + startHour;
      const minute = minutes % 60;

      if (format === "12h") {
        const period = hour >= 12 ? "PM" : "AM";
        const displayHour = hour % 12 || 12;
        slots.push({
          value: `${String(displayHour).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${period}`,
          minutes: minutes,
        });
      } else {
        slots.push({
          value: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
          minutes: minutes,
        });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const formatDisplayValue = (val: string) => {
    if (!val) return "";
    if (format === "12h") {
      const [hours, minutes] = val.split(":");
      const hour = parseInt(hours);
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour % 12 || 12;
      return `${String(displayHour).padStart(2, "0")}:${minutes} ${period}`;
    }
    return val;
  };

  const handleTimeSelect = (timeValue: string) => {
    onChange?.(timeValue);
    setIsOpen(false);
  };

  const displayValue = value ? formatDisplayValue(value) : "";

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <InputBase
        type="text"
        value={displayValue}
        placeholder={placeholder}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        readOnly
        disabled={disabled}
        rightSlot={<Clock size={16} className="text-muted-foreground" />}
      />

      {isOpen && !disabled && (
        <div className="absolute top-full mt-2 bg-background rounded-lg shadow-lg border border-border-primary z-50 max-h-60 overflow-y-auto w-full">
          <div className="p-2">
            {timeSlots.map((slot) => (
              <button
                key={slot.value}
                onClick={() => handleTimeSelect(slot.value)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded hover:bg-background-secondary transition-colors",
                  value === slot.value &&
                    "bg-primary text-white hover:bg-primary",
                )}
              >
                {slot.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
