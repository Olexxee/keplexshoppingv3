import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { InputBase } from "../input-base";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  min?: Date;
  max?: Date;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  format?: "short" | "long" | "numeric";
}

export const DatePicker = ({
  value,
  onChange,
  min,
  max,
  className,
  disabled,
  placeholder = "Select date",
  format = "numeric",
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(value || new Date());
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

  const formatDate = (date: Date) => {
    if (!date) return "";
    if (format === "short") {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
    if (format === "long") {
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
    return date.toLocaleDateString("en-US");
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Add padding days
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    // Add month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleDateSelect = (date: Date) => {
    if (min && date < min) return;
    if (max && date > max) return;
    onChange?.(date);
    setIsOpen(false);
  };

  const changeMonth = (delta: number) => {
    setViewDate(
      new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1),
    );
  };

  const isDateDisabled = (date: Date) => {
    if (min && date < min) return true;
    if (max && date > max) return true;
    return false;
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <InputBase
        type="text"
        value={value ? formatDate(value) : ""}
        placeholder={placeholder}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        readOnly
        disabled={disabled}
        rightSlot={<Calendar size={16} className="text-muted-foreground" />}
      />

      {isOpen && !disabled && (
        <div className="absolute top-full mt-2 p-4 bg-background rounded-lg shadow-lg border border-border-primary z-50 w-72">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => changeMonth(-1)}
              className="p-1 hover:bg-background-secondary rounded"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-medium">
              {viewDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              onClick={() => changeMonth(1)}
              className="p-1 hover:bg-background-secondary rounded"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div
                key={day}
                className="text-center text-xs text-muted-foreground py-1"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(viewDate).map((date, index) => (
              <button
                key={index}
                onClick={() => date && handleDateSelect(date)}
                disabled={!date || isDateDisabled(date)}
                className={cn(
                  "text-center p-2 rounded hover:bg-background-secondary transition-colors",
                  !date && "invisible",
                  date &&
                    value &&
                    date.toDateString() === value.toDateString() &&
                    "bg-primary text-white hover:bg-primary",
                  date &&
                    isDateDisabled(date) &&
                    "opacity-50 cursor-not-allowed",
                )}
              >
                {date?.getDate()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
