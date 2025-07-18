import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useDarkMode } from "../store/useDarkMode";
import { useEffect } from "react";

const AppLayout = () => {
  const setDarkModeFromStorage = useDarkMode(
    (state) => state.setDarkModeFromStorage
  );

  useEffect(() => {
    setDarkModeFromStorage();
  }, [setDarkModeFromStorage]);

  return (
    <div className="text-primary-950 bg-white dark:bg-gray-700">
      <Header />
      <main className="pb-20">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
