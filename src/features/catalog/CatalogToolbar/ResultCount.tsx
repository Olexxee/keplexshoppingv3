import { Typography } from "../../../components/typography/Typography";

interface ResultCountProps {
  count: number;
}

export function ResultCount({ count }: ResultCountProps) {
  return (
    <Typography variant="bodySm" color="secondary">
      {count} Products
    </Typography>
  );
}
