import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar.component";
import "./default-layout.styles.scss";

export function DefaultPageLayout() {
  return (
    <>
      <Navbar />
      <div className="Layout-Body">
        <Outlet />
      </div>
    </>
  );
}

export default DefaultPageLayout;
