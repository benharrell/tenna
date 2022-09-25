import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "./styles";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {

  // we have to track the state of the drawer
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  // now we need a helper that UI can use to change state
  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  }

  return (
    <Container>
      <Header isOpened={isDrawerOpen} toggleDrawer={toggleDrawer}/>
      <Content>
        <Sidebar isOpened={isDrawerOpen}/>
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </Container>
  );
}
