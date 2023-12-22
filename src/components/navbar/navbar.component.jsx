import { Link } from "react-router-dom";
import { ReactComponent as StoreLogo } from "../../assets/logo.svg";
import "./navbar.styles.scss";

export function Navbar() {
  return (
    <div className="Navbar">
      <Link className="Navbar-Link_isLogo" to="/">
        <StoreLogo className="Navbar-Logo-Image" />
      </Link>
      <div className="Navbar-Links-Container">
        <Link className="Navbar-Link" to="/shop">
          SHOP
        </Link>
        <Link className="Navbar-Link" to="/auth">
          SIGN IN
        </Link>
      </div>
    </div>
  );
}
