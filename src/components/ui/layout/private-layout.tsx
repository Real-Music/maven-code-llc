import { RootStore } from "@/store/configure-store";
import { useSelector } from "react-redux";
import DefaultLayout from "./default-layout";
import { Navigate } from "react-router-dom";
import routePaths from "@/utils/route-paths";

function PrivateLayout() {
  const { home } = routePaths;
  const { isLoggedIn } = useSelector((state: RootStore) => state.user);

  return isLoggedIn ? <DefaultLayout /> : <Navigate to={home} replace />;
}

export const Component = PrivateLayout;
export default PrivateLayout;
