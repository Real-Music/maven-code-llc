import { createBrowserRouter } from "react-router-dom";
import routePaths from "./route-paths";

const router = createBrowserRouter([
  {
    path: routePaths.home,
    lazy: () => import("@components/ui/layout/public-layout"),
    children: [{ index: true, lazy: () => import("@pages/Login") }],
  },
  {
    path: routePaths.dashboard,
    lazy: () => import("@components/ui/layout/private-layout"),
    children: [{ index: true, lazy: () => import("@pages/Dashboard") }],
  },
]);

export default router;
