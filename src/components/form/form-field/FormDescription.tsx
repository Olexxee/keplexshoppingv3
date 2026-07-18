import { Typography } from "../../typography/Typography";

interface Props {
  children?: React.ReactNode;
}

export function FormDescription({ children }: Props) {
  if (!children) return null;

  return (
    <Typography variant="caption" color="secondary">
      {children}
    </Typography>
  );
}
