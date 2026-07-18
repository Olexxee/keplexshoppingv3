import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { InputBase } from "../input-base";

interface DateRangePickerProps {
  startDate?: Date;
  endDate?: Date;
  onChange?: (range: { startDate?: Date; endDate?: Date }) => void;
  min?: Date;
  max?: Date;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const DateRangePicker = ({
  startDate,
  endDate,
  onChange,
  min,
  max,
  className,
  disabled,
  placeholder = "Select date range",
}: DateRangePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(startDate || new Date());
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
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

  const formatDateRange = () => {
    if (!startDate && !endDate) return "";
    if (startDate && !endDate) return `From ${startDate.toLocaleDateString()}`;
    if (!startDate && endDate) return `Until ${endDate.toLocaleDateString()}`;
    return `${startDate?.toLocaleDateString()} - ${endDate?.toLocaleDateString()}`;
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const isInHoverRange = (date: Date) => {
    if (!startDate || !hoverDate) return false;
    return date >= startDate && date <= hoverDate;
  };

  const handleDateSelect = (date: Date) => {
    if (disabled) return;
    if (min && date < min) return;
    if (max && date > max) return;

    if (!startDate || (startDate && endDate)) {
      onChange?.({ startDate: date, endDate: undefined });
    } else {
      if (date < startDate) {
        onChange?.({ startDate: date, endDate: startDate });
      } else {
        onChange?.({ startDate, endDate: date });
      }
      setIsOpen(false);
    }
  };

  const changeMonth = (delta: number) => {
    setViewDate(
      new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1),
    );
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <InputBase
        type="text"
        value={formatDateRange()}
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
                onMouseEnter={() => date && setHoverDate(date)}
                onMouseLeave={() => setHoverDate(null)}
                disabled={!date}
                className={cn(
                  "text-center p-2 rounded transition-colors relative",
                  !date && "invisible",
                  date && "hover:bg-background-secondary",
                  date &&
                    isInRange(date) &&
                    "bg-primary text-white hover:bg-primary",
                  date &&
                    isInHoverRange(date) &&
                    !isInRange(date) &&
                    "bg-primary/20",
                  date &&
                    startDate &&
                    date.toDateString() === startDate.toDateString() &&
                    "bg-primary text-white",
                  date &&
                    endDate &&
                    date.toDateString() === endDate.toDateString() &&
                    "bg-primary text-white",
                )}
              >
                {date?.getDate()}
              </button>
            ))}
          </div>

          <div className="mt-4 text-sm text-muted-foreground text-center">
            Click to select start date, click again to select end date
          </div>
        </div>
      )}
    </div>
  );
};
