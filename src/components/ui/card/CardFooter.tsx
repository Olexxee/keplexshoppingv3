import { cn } from "../../../lib/cn";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <footer
      className={cn("flex items-center justify-between p-4", className)}
      {...props}
    />
  );
}
