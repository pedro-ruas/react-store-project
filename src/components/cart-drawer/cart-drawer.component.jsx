import { useContext } from "react";
import { Button } from "../button/button.component";
import "./cart-drawer.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export function CartDrawer() {
  const goToCart = () => console.log("Cart");
  const { productsInCart, setShowCartDrawer, showCartDrawer } =
    useContext(CartContext);
  const closeDrawer = () => setShowCartDrawer(false);

  return (
    <div className={`CartDrawer-Container${showCartDrawer ? "" : "_isClosed"}`}>
      <div className="CartDrawer-Header">
        <h2 className="CartDrawer-Header-Counter">{`Item(s): ${0}`}</h2>
        <button className="CartDrawer-CloseButton" onClick={closeDrawer}>
          X
        </button>
      </div>
      <div className="CartDrawer-Items"></div>
      <Button
        className="CartDrawer-GoButton"
        text="Go to Cart"
        onClick={goToCart}
      />
    </div>
  );
}
