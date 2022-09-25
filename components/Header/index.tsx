//components/Header/index.tsx

import { HeaderContainer, IconContainer, TitleContainer } from "./styles";
import { Menu, ChevronLeft } from "@styled-icons/material";

type headerProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ isOpened, toggleDrawer }: headerProps) {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer>
      <TitleContainer>Tenna!</TitleContainer>
    </HeaderContainer>
  );
}
