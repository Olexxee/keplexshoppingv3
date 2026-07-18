import { cn } from "../../../lib/cn";

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardBody({ className, ...props }: CardBodyProps) {
  return <div className={cn("flex flex-col", className)} {...props} />;
}
