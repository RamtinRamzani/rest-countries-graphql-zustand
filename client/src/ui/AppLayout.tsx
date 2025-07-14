import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="text-primary-950 bg-white">
      <Header />
      <main className="pb-20">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
