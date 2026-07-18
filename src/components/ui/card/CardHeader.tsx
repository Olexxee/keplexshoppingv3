import { cn } from "../../../lib/cn";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <header className={cn("p-4", className)} {...props} />;
}
