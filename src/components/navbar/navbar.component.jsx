import { Link } from "react-router-dom";
import { ReactComponent as StoreLogo } from "../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

import "./navbar.styles.scss";
import { signOutUser } from "../../utils/utils.firebase";

export function Navbar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const onSignOut = async () =>
    await signOutUser().then(() => setCurrentUser(null));

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
          <span className="Navbar-Link" onClick={onSignOut}>
            SIGN OUT
          </span>
        ) : (
          <Link className="Navbar-Link" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}
