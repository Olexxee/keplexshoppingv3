import { NavLink } from "react-router-dom";

type NavigationItemProps = {
  item: {
    path: string;
    label: React.ReactNode;
  };
};

export function NavigationItem({ item }: NavigationItemProps) {
  return <NavLink to={item.path}>{item.label}</NavLink>;
}
