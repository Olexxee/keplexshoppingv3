import { Typography } from "../../typography/Typography";

interface Props {
  score: number;
  strength: string;
}

export function PasswordStrength({ score, strength }: Props) {
  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={`h-1 flex-1 rounded-full transition-all ${
              score >= bar ? "bg-brand-primary" : "bg-border-primary"
            }`}
          />
        ))}
      </div>

      <Typography
        variant="caption"
        color={
          strength === "strong"
            ? "success"
            : strength === "good"
              ? "brand"
              : strength === "fair"
                ? "warning"
                : "danger"
        }
      >
        {strength.charAt(0).toUpperCase() + strength.slice(1)} password
      </Typography>
    </div>
  );
}
