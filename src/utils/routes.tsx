import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", lazy: () => import("@pages/Login") },
  { path: "/dashboard", lazy: () => import("@pages/Dashboard") },
]);

export default router;
