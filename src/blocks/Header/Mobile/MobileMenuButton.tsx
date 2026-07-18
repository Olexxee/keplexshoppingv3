import { Menu } from "lucide-react";
import { Button } from "../../../components/button/Button";

export function MobileMenuButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      rounded="full"
      aria-label="Open navigation"
    >
      <Menu size={20} />
    </Button>
  );
}
