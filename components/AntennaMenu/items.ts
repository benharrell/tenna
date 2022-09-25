import {
  Broadcast,
  Home
} from "@styled-icons/octicons";

type MenuOption = {
  name: string,
  icon: React.ComponentType,
  url?: string,
  subItems?: MenuOption[],
};

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Home",
    icon: Home,
    url: "/",
  },
  {
    name: "Antennas",
    icon: Broadcast,
    subItems: [
      {
        name: "Dipole",
        icon: Broadcast,
        url: "/antennas/dipole",
      },
      {
        name: "Quarter Wave",
        icon: Broadcast,
        url: "/antennas/quarter-wave",
      },
    ],
  },
];




export type MenuItem = {
  name: string,
  icon: React.ComponentType,
  url?: string,
  id: string,
  depth: number,
  subItems?: MenuItem[],
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);