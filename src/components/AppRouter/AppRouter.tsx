import { Route, Routes } from "react-router-dom";

import { AppRoutes } from "../../router";

const AppRouter = () => {
  return (
    <Routes>
      {AppRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};
export default AppRouter;
