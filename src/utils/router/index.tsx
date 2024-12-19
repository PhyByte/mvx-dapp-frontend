import { Navigate, useRoutes } from "react-router-dom";

import Layout from "@/layout/Layout";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import UnlockPage from "@/pages/Unlock/UnlockPage";

export default function Router() {
  return useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="unlock" replace />,
        },
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        {
          path: "unlock",
          element: <UnlockPage />,
        },
      ],
    },
  ]);
}
