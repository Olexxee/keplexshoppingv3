import React, { useState, useRef, useEffect, cloneElement } from "react";
import { cn } from "../../lib/cn";

interface TooltipProps {
  children: React.ReactElement<any>;
  content: React.ReactNode;
  delay?: number;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
  variant?: "light" | "dark";
  disabled?: boolean;
  showArrow?: boolean;
}

export const Tooltip = ({
  children,
  content,
  delay = 200,
  className,
  position = "top",
  variant = "dark",
  disabled = false,
  showArrow = true,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);


  const arrowClasses = {
    top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-gray-800 dark:border-t-gray-700",
    bottom:
      "top-[-6px] left-1/2 -translate-x-1/2 border-b-gray-800 dark:border-b-gray-700",
    left: "right-[-6px] top-1/2 -translate-y-1/2 border-l-gray-800 dark:border-l-gray-700",
    right:
      "left-[-6px] top-1/2 -translate-y-1/2 border-r-gray-800 dark:border-r-gray-700",
  };

  const variantClasses = {
    light: "bg-white text-gray-900 border border-gray-200",
    dark: "bg-gray-800 text-white dark:bg-gray-700",
  };

  const arrowVariantClasses = {
    light: {
      top: "border-t-white",
      bottom: "border-b-white",
      left: "border-l-white",
      right: "border-r-white",
    },
    dark: {
      top: "border-t-gray-800 dark:border-t-gray-700",
      bottom: "border-b-gray-800 dark:border-b-gray-700",
      left: "border-l-gray-800 dark:border-l-gray-700",
      right: "border-r-gray-800 dark:border-r-gray-700",
    },
  };

  const showTooltip = () => {
    if (disabled) return;
    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(true);
      updatePosition();
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top = rect.top - tooltipRect.height - 8;
        left = rect.left + (rect.width - tooltipRect.width) / 2;
        break;
      case "bottom":
        top = rect.bottom + 8;
        left = rect.left + (rect.width - tooltipRect.width) / 2;
        break;
      case "left":
        top = rect.top + (rect.height - tooltipRect.height) / 2;
        left = rect.left - tooltipRect.width - 8;
        break;
      case "right":
        top = rect.top + (rect.height - tooltipRect.height) / 2;
        left = rect.right + 8;
        break;
    }

    setCoords({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isVisible]);

  const child = cloneElement(children, {
    ref: (node: HTMLElement | null) => {
      triggerRef.current = node;
      const childRef = (children as any).ref;
      if (typeof childRef === "function") childRef(node);
      else if (childRef && typeof childRef === "object") (childRef as any).current = node;
    },
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    onFocus: showTooltip,
    onBlur: hideTooltip,
  } as any);

  return (
    <>
      {child}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            "fixed z-50 px-3 py-1.5 text-sm rounded-lg shadow-lg",
            "animate-in fade-in-0 zoom-in-95 duration-150",
            variantClasses[variant],
            className,
          )}
          style={{ top: coords.top, left: coords.left }}
          role="tooltip"
        >
          {content}
          {showArrow && (
            <div
              className={cn(
                "absolute w-0 h-0 border-4 border-transparent",
                arrowClasses[position],
                arrowVariantClasses[variant][position],
              )}
            />
          )}
        </div>
      )}
    </>
  );
};
