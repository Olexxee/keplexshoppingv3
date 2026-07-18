import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";
import { InputBase } from "../input-base";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
}

export const Select = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className,
  disabled,
  searchable = false,
  clearable = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;
    onChange?.(option.value);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleClear = () => {
    onChange?.(undefined as any);
    setSearchTerm("");
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        <InputBase
          ref={inputRef}
          type="text"
          value={
            searchable && isOpen ? searchTerm : selectedOption?.label || ""
          }
          placeholder={placeholder}
          readOnly={!searchable || !isOpen}
          disabled={disabled}
          className="cursor-pointer"
          rightSlot={
            <div className="flex items-center gap-2">
              {clearable && value && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClear();
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>
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
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isOpen && !disabled && (
        <div className="absolute top-full mt-2 bg-background rounded-lg shadow-lg border border-border-primary z-50 max-h-60 overflow-y-auto w-full">
          {filteredOptions.length === 0 ? (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              No options found
            </div>
          ) : (
            filteredOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                disabled={option.disabled}
                className={cn(
                  "w-full text-left px-4 py-2 flex items-center justify-between hover:bg-background-secondary transition-colors",
                  option.disabled && "opacity-50 cursor-not-allowed",
                  option.value === value && "bg-primary/5",
                )}
              >
                <span>{option.label}</span>
                {option.value === value && (
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
