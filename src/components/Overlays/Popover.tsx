import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/cn";

interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  trigger?: "click" | "hover" | "focus";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
}

export const Popover = ({
  children,
  content,
  className,
  position = "bottom",
  align = "center",
  trigger = "click",
  open: controlledOpen,
  onOpenChange,
  disabled = false,
  closeOnOutsideClick = true,
  closeOnEsc = true,
}: PopoverProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const isOpen =
    controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const setOpen = (value: boolean) => {
    if (disabled) return;
    if (controlledOpen === undefined) {
      setUncontrolledOpen(value);
    }
    onOpenChange?.(value);
    if (value) {
      updatePosition();
    }
  };

  const toggleOpen = () => setOpen(!isOpen);

  const updatePosition = () => {
    if (!triggerRef.current || !popoverRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    const spacing = 8;

    switch (position) {
      case "top":
        top = rect.top - popoverRect.height - spacing;
        break;
      case "bottom":
        top = rect.bottom + spacing;
        break;
      case "left":
        top = rect.top + (rect.height - popoverRect.height) / 2;
        left = rect.left - popoverRect.width - spacing;
        break;
      case "right":
        top = rect.top + (rect.height - popoverRect.height) / 2;
        left = rect.right + spacing;
        break;
    }

    // Align
    switch (align) {
      case "start":
        if (position === "top" || position === "bottom") {
          left = rect.left;
        } else {
          top = rect.top;
        }
        break;
      case "center":
        if (position === "top" || position === "bottom") {
          left = rect.left + (rect.width - popoverRect.width) / 2;
        } else {
          top = rect.top + (rect.height - popoverRect.height) / 2;
        }
        break;
      case "end":
        if (position === "top" || position === "bottom") {
          left = rect.right - popoverRect.width;
        } else {
          top = rect.bottom - popoverRect.height;
        }
        break;
    }

    // Ensure popover stays in viewport
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    if (left < 0) left = 8;
    if (left + popoverRect.width > viewport.width) {
      left = viewport.width - popoverRect.width - 8;
    }
    if (top < 0) top = 8;
    if (top + popoverRect.height > viewport.height) {
      top = viewport.height - popoverRect.height - 8;
    }

    setCoords({ top, left });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        closeOnOutsideClick &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape") {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, closeOnOutsideClick, closeOnEsc]);

  const triggerProps = {
    ref: triggerRef,
    onClick: trigger === "click" ? toggleOpen : undefined,
    onMouseEnter: trigger === "hover" ? () => setOpen(true) : undefined,
    onMouseLeave: trigger === "hover" ? () => setOpen(false) : undefined,
    onFocus: trigger === "focus" ? () => setOpen(true) : undefined,
    onBlur: trigger === "focus" ? () => setOpen(false) : undefined,
  };

  return (
    <>
      <div {...triggerProps}>{children}</div>
      {isOpen && (
        <div
          ref={popoverRef}
          className={cn(
            "fixed z-50 min-w-[200px] bg-background rounded-lg shadow-lg border border-border p-4",
            "animate-in fade-in-0 zoom-in-95 duration-150",
            className,
          )}
          style={{ top: coords.top, left: coords.left }}
          role="dialog"
        >
          {content}
        </div>
      )}
    </>
  );
};
