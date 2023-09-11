import { v4 as uuid } from "uuid";

export const mapMainMenuItems = (menuItems: any) => {
  return menuItems.map((menuItem: any) => ({
    id: uuid(),
    destination: menuItem.menuItem.destination?.uri,
    label: menuItem.menuItem.label,
    subMenuItems: (menuItem.items || []).map((subMenuItem: any) => ({
      id: uuid(),
      destination: subMenuItem.destination?.uri,
      label: subMenuItem.label,
    })),
  }));
};