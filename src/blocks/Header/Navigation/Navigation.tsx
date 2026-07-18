import { navigation } from "../../../config/storefront/navigation";
import { NavigationItem } from "./NavigationItem";

export function Navigation() {
  return (
    <>
      {navigation.map((item) => (
        <NavigationItem key={item.id} item={item} />
      ))}
    </>
  );
}
