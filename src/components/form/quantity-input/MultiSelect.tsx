import { useState, useRef, useEffect } from "react";
import { cn } from "../../../lib/cn";
import { ChevronDown, Check } from "lucide-react";
import { InputBase } from "../input-base";

interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  values?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxSelections?: number;
}

export const MultiSelect = ({
  options,
  values = [],
  onChange,
  placeholder = "Select...",
  className,
  disabled,
  maxSelections,
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const selectedOptions = options.filter((opt) => values.includes(opt.value));

  const handleToggle = (option: MultiSelectOption) => {
    if (option.disabled) return;

    let newValues: string[];
    if (values.includes(option.value)) {
      newValues = values.filter((v) => v !== option.value);
    } else {
      if (maxSelections !== undefined && values.length >= maxSelections) {
        return;
      }
      newValues = [...values, option.value];
    }
    onChange?.(newValues);
  };


  const displayValue = isOpen
    ? searchTerm
    : selectedOptions.map((o) => o.label).join(", ");

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div onClick={() => !disabled && setIsOpen(!isOpen)}>
        <InputBase
          type="text"
          value={displayValue}
          placeholder={placeholder}
          onChange={(e) => setSearchTerm(e.target.value)}
          disabled={disabled}
          className="cursor-pointer min-h-[42px]"
          rightSlot={
            <div className="flex items-center">
              {maxSelections && (
                <span className="text-xs text-muted-foreground mr-2">
                  {values.length}/{maxSelections}
                </span>
              )}
              <ChevronDown
                size={16}
                className={cn(
                  "text-muted-foreground transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </div>
          }
        />
      </div>

      {isOpen && !disabled && (
        <div className="absolute top-full mt-2 bg-background rounded-lg shadow-lg border border-border-primary z-50 max-h-60 overflow-y-auto w-full">
          <div className="p-2 border-b border-border-primary">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-1 text-sm border border-border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {filteredOptions.length === 0 ? (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              No options found
            </div>
          ) : (
            filteredOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleToggle(option)}
                disabled={
                  option.disabled ||
                  (!values.includes(option.value) &&
                    maxSelections !== undefined &&
                    values.length >= maxSelections)
                }
                className={cn(
                  "w-full text-left px-4 py-2 flex items-center justify-between hover:bg-background-secondary transition-colors",
                  option.disabled && "opacity-50 cursor-not-allowed",
                  values.includes(option.value) && "bg-primary/5",
                )}
              >
                <span>{option.label}</span>
                {values.includes(option.value) && (
                  <Check size={16} className="text-primary" />
                )}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};
