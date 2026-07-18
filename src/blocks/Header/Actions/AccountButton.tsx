import { User } from "lucide-react";

import HeaderIconButton from "./HeaderIconButton";

export default function AccountButton() {
  return (
    <HeaderIconButton ariaLabel="Account">
      <User />
    </HeaderIconButton>
  );
}
