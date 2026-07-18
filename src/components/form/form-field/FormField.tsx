import * as React from "react";
import { cn } from "../../../lib/cn";
import { FormDescription } from "./FormDescription";
import { FormError } from "./FormError";
import { FormHint } from "./FormHint";
import { FormLabel } from "./FormLabel";

export interface FormFieldProps {
  label?: React.ReactNode;

  description?: React.ReactNode;

  hint?: React.ReactNode;

  error?: React.ReactNode;

  required?: boolean;

  className?: string;

  children: React.ReactNode;
}

export function FormField({
  label,
  description,
  hint,
  error,
  required,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <FormLabel required={required}>{label}</FormLabel>}

      {description && <FormDescription>{description}</FormDescription>}

      {children}

      {error ? (
        <FormError>{error}</FormError>
      ) : (
        hint && <FormHint>{hint}</FormHint>
      )}
    </div>
  );
}
