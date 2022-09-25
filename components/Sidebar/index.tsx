
import { SidebarContainer } from "./styles";
import { MENU_ITEMS } from "../AntennaMenu/items";
import MenuItemsList from "../AntennaMenu/MenuItemList";

type SidebarProps = {
  isOpened: boolean,
};

export default function Sidebar({ isOpened }: SidebarProps) {
  return (
    <SidebarContainer isOpened={isOpened}>
      <MenuItemsList options={MENU_ITEMS} />
    </SidebarContainer>
  );
}