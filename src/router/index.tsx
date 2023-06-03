import { Navigate } from "react-router-dom";

import { EmployeesPage, PageNotFound } from "../pages";

export const AppRoutes = [
  { path: "/employees", element: <EmployeesPage /> },
  { path: "/*", element: <Navigate to="/employees" replace /> },
  // TODO: add other pages content when it done
  { path: "/calendar", element: <PageNotFound /> },
  { path: "/orders", element: <PageNotFound /> },
  { path: "/inventory", element: <PageNotFound /> },
  { path: "/database", element: <PageNotFound /> },
  { path: "/sales_analytics", element: <PageNotFound /> },
  { path: "/settings", element: <PageNotFound /> },
];
