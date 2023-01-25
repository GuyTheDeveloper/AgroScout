import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
