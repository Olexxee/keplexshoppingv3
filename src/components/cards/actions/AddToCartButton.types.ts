// import type { ButtonHTMLAttributes } from "react";

// export interface AddToCartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children?: React.ReactNode;
// }

export interface AddToCartButtonProps {
  status?: "idle" | "loading" | "success";
  disabled?: boolean;
  className?: string;

  onClick?: () => void;
}