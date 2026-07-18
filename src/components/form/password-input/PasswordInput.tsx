import * as React from "react";

import { Eye, EyeOff } from "lucide-react";

import { InputBase, type InputBaseProps } from "../input-base";

import { PasswordStrength } from "./PasswordStrength";
import { usePasswordStrength } from "./usePasswordStrength";

export interface PasswordInputProps extends Omit<InputBaseProps, "type"> {
  showStrength?: boolean;
}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ showStrength = false, value, ...props }, ref) => {
  const [visible, setVisible] = React.useState(false);

  const password = typeof value === "string" ? value : "";

  const { score, strength } = usePasswordStrength(password);

  return (
    <div className="space-y-2">
      <InputBase
        ref={ref}
        type={visible ? "text" : "password"}
        value={value}
        rightSlot={
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label={visible ? "Hide password" : "Show password"}
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        {...props}
      />

      {showStrength && password.length > 0 && (
        <PasswordStrength score={score} strength={strength} />
      )}
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
