import { Link } from "react-router-dom";
import { Typography } from "../../../components/typography";
import { branding } from "../../../config/storefront/branding";

export function Logo() {
  return (
    <Link to="/">
      <Typography variant="displayLg" weight="bold">
        {branding.name}
      </Typography>
    </Link>
  );
}
