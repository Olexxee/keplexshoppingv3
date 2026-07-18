import { Typography } from "../../typography/Typography";
import { cn } from "../../../lib/cn";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function FormLabel({
  children,
  required,
  className,
  ...props
}: FormLabelProps) {
  return (
    <label
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    >
      <Typography as="span" variant="label">
        {children}
      </Typography>

      {required && <span className="text-danger">*</span>}
    </label>
  );
}
