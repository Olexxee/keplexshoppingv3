import { Typography } from "../../typography/Typography";

interface Props {
  children?: React.ReactNode;
}

export function FormError({ children }: Props) {
  if (!children) return null;

  return (
    <Typography variant="caption" color="danger">
      {children}
    </Typography>
  );
}
