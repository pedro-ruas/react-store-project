import { Link, useLocation } from "react-router-dom";
import { ReactComponent as StoreLogo } from "../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase.utils";
import { CartIcon } from "../cart-icon/cart-icon.component";

import "./navbar.styles.scss";
import { CartDrawer } from "../cart-drawer/cart-drawer.component";

export function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { pathname } = useLocation();

  return (
    <div className="Navbar">
      <Link className="Navbar-Link_isLogo" to="/">
        <StoreLogo className="Navbar-Logo-Image" />
      </Link>
      <div className="Navbar-Links-Container">
        <Link className="Navbar-Link" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <span className="Navbar-Link" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="Navbar-Link" to="/auth">
            SIGN IN
          </Link>
        )}

        {!pathname.includes("/cart") && <CartIcon />}
      </div>

      <CartDrawer />
    </div>
  );
}
