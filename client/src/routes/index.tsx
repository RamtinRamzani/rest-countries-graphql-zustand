import { Routes, Route } from "react-router-dom";
import AppLayout from "../ui/AppLayout";
import Country from "../components/Country";
import CountryDetail from "../components/CountryDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Country />} />
        <Route path="country" element={<Country />} />
        <Route path="country/:code" element={<CountryDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
