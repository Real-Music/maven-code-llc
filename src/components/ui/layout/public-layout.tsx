import { RootStore } from "@/store/configure-store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import DefaultLayout from "./default-layout";
import routePaths from "@/utils/route-paths";

function PublicLayout() {
  const { dashboard } = routePaths;
  const { isLoggedIn } = useSelector((state: RootStore) => state.user);

  return isLoggedIn ? <Navigate to={dashboard} replace /> : <DefaultLayout />;
}

export const Component = PublicLayout;
export default PublicLayout;
