import { cn } from "../../lib/cn";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave" | "none";
}

export const Skeleton = ({
  variant = "rectangular",
  width,
  height,
  animation = "pulse",
  className,
  ...props
}: SkeletonProps) => {
  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-shimmer",
    none: "",
  };

  const style = {
    width: width || (variant === "text" ? "100%" : undefined),
    height: height || (variant === "text" ? "1em" : undefined),
  };

  return (
    <div
      className={cn(
        "bg-muted",
        variantClasses[variant],
        animationClasses[animation],
        className,
      )}
      style={style}
      {...props}
    />
  );
};

// Skeleton variants for common use cases
export const SkeletonText = ({
  lines = 3,
  className,
  ...props
}: { lines?: number } & SkeletonProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? "75%" : "100%"}
          {...props}
        />
      ))}
    </div>
  );
};

export const SkeletonCard = ({ className, ...props }: SkeletonProps) => {
  return (
    <div className={cn("space-y-3", className)}>
      <Skeleton variant="rectangular" height={200} {...props} />
      <SkeletonText lines={3} {...props} />
    </div>
  );
};

export const SkeletonAvatar = ({
  size = 40,
  className,
  ...props
}: { size?: number } & SkeletonProps) => {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
};
