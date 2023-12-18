import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar.component";

export function DefaultPageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default DefaultPageLayout;
