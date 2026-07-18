import { useMemo } from "react";

export type PasswordStrength = "weak" | "fair" | "good" | "strong";

export function usePasswordStrength(password: string) {
  return useMemo(() => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const strength: PasswordStrength =
      score <= 1
        ? "weak"
        : score === 2
          ? "fair"
          : score === 3
            ? "good"
            : "strong";

    return {
      score,
      strength,
    };
  }, [password]);
}
