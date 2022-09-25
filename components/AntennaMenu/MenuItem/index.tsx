//components/MenuItem/index.tsx

import Link from "next/link";
import { useRouter } from "next/router";
import { MenuItem as MenuItemType } from "../items";
import { MenuItemContainer } from "./styles";
import { useState } from "react";
import ExpandIcon from "../ExpandIcon";
import MenuItemsList from "../MenuItemList";

type MenuItemProps = {
  menuItem: MenuItemType;
};

export default function MenuItem({
  menuItem: { name, icon: Icon, url, depth, subItems },
}: MenuItemProps) {
  const [isExpanded, toggleExpanded] = useState(true);

  const router = useRouter();
  const selected = router.asPath === url;
  const isNested = subItems && subItems?.length > 0;

  const onClick = () => {
    toggleExpanded((prev) => !prev);
  };

  return (
    <>
      <MenuItemContainer className={selected ? "selected" : ""} depth={depth}>
        {url ? (
          <Link href={url} passHref>
            <div className="menu-item">
              <Icon />
              <span>{name}</span>
            </div>
          </Link>
        ) : (
          <div className="menu-item">
            <Icon />
            <span>{name}</span>
          </div>
        )}
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
        ) : null}
      </MenuItemContainer>
      {isExpanded && isNested ? <MenuItemsList options={subItems} /> : null}
    </>
  );
}
