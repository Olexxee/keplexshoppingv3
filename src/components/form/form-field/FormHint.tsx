import { Typography } from "../../typography/Typography";

interface Props {
  children?: React.ReactNode;
}

export function FormHint({ children }: Props) {
  if (!children) return null;

  return (
    <Typography variant="caption" color="muted">
      {children}
    </Typography>
  );
}
