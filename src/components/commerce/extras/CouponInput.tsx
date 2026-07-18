import { useState } from "react";
import { cn } from "../../../lib/cn";
import { InputBase } from "../../form/input-base";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { Spinner } from "../../feedback/Spinner";
import { Gift, Check, X } from "lucide-react";

interface CouponInputProps {
  onApply: (
    code: string,
  ) => Promise<{ success: boolean; message?: string; discount?: number }>;
  className?: string;
  placeholder?: string;
  buttonText?: string;
  loading?: boolean;
  appliedCode?: string;
  onRemove?: () => void;
}

export const CouponInput = ({
  onApply,
  className,
  placeholder = "Enter coupon code",
  buttonText = "Apply",
  loading = false,
  appliedCode,
  onRemove,
}: CouponInputProps) => {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = async () => {
    if (!code.trim() || isLoading) return;
    setIsLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const result = await onApply(code);
      if (result.success) {
        setStatus("success");
        setMessage(result.message || "Coupon applied successfully!");
      } else {
        setStatus("error");
        setMessage(result.message || "Invalid coupon code");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = () => {
    setCode("");
    setStatus("idle");
    setMessage("");
    onRemove?.();
  };

  if (appliedCode) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200",
          className,
        )}
      >
        <Check size={16} className="text-green-600" />
        <Typography variant="bodySm" className="text-green-700 flex-1">
          Coupon "{appliedCode}" applied!
        </Typography>
        <button
          onClick={handleRemove}
          className="text-green-600 hover:text-green-800 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <InputBase
            type="text"
            placeholder={placeholder}
            value={code}
            onChange={(e) => {
              setCode(e.target.value.toUpperCase());
              setStatus("idle");
              setMessage("");
            }}
            className={cn(
              status === "success" && "border-green-500",
              status === "error" && "border-red-500",
            )}
            leftSlot={<Gift size={16} className="text-muted-foreground" />}
            disabled={isLoading || loading}
          />
        </div>
        <Button
          onClick={handleApply}
          disabled={!code.trim() || isLoading || loading}
          className="whitespace-nowrap"
        >
          {isLoading || loading ? <Spinner size="sm" /> : buttonText}
        </Button>
      </div>
      {message && (
        <Typography
          variant="bodySm"
          color={status === "success" ? "success" : "danger"}
        >
          {message}
        </Typography>
      )}
    </div>
  );
};
