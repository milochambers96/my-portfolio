import Background from "./Background";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface BackgroundProps {
  children: ReactNode;
}

const Layout = ({ children }: BackgroundProps) => {
  return (
    <Background>
      <Navbar />
      {children}
      <Footer />
    </Background>
  );
};

export default Layout;
