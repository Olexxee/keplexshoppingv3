import { Search } from "lucide-react";

import HeaderIconButton from "./HeaderIconButton";

export default function SearchButton() {
  return (
    <HeaderIconButton ariaLabel="Search">
      <Search />
    </HeaderIconButton>
  );
}
