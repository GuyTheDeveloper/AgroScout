import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
