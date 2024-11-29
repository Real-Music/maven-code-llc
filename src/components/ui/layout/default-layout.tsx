import { Outlet } from "react-router-dom";
import { Toaster } from "../toaster";

function DefaultLayout() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}

export default DefaultLayout;
