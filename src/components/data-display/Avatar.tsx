import React from "react";
import { cn } from "../../lib/cn";
import { User } from "lucide-react";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  status?: "online" | "offline" | "away" | "busy";
  statusSize?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export const Avatar = ({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  className,
  status,
  statusSize = "md",
  onClick,
}: AvatarProps) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
    "2xl": "w-20 h-20 text-xl",
  };

  const statusSizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
  };

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-full",
        sizeClasses[size],
        className,
      )}
      onClick={onClick}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
          {fallback ? (
            <span className="font-medium">{getInitials(fallback)}</span>
          ) : (
            <User className="w-1/2 h-1/2" />
          )}
        </div>
      )}

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-background",
            statusSizeClasses[statusSize],
            statusColors[status],
          )}
        />
      )}
    </div>
  );
};

// Avatar Group
interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  className?: string;
  size?: AvatarProps["size"];
}

export const AvatarGroup = ({
  children,
  max = 5,
  className,
  size = "md",
}: AvatarGroupProps) => {
  const childrenArray = React.Children.toArray(children);
  const displayChildren = childrenArray.slice(0, max);
  const remaining = childrenArray.length - max;

  return (
    <div className={cn("flex -space-x-2", className)}>
      {displayChildren.map((child, index) => (
        <div key={index} className="ring-2 ring-background rounded-full">
          {React.cloneElement(child as React.ReactElement<AvatarProps>, { size })}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background",
            size === "sm"
              ? "w-8 h-8 text-xs"
              : size === "md"
                ? "w-10 h-10 text-sm"
                : size === "lg"
                  ? "w-12 h-12 text-base"
                  : size === "xl"
                    ? "w-16 h-16 text-lg"
                    : "w-20 h-20 text-xl",
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};
