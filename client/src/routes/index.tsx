import { Routes, Route } from "react-router-dom";

import { lazy } from "react";
const AppLayout = lazy(() => import("../ui/AppLayout"));
const Country = lazy(() => import("../components/Country"));
const CountryDetail = lazy(() => import("../components/CountryDetail"));

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
