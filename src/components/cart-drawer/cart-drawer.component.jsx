import { useContext } from "react";
import { Button, SecondaryButton } from "../button/button.component";
import "./cart-drawer.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { CartItems } from "../cart-items/cart-items.component";

export function CartDrawer() {
  const navigate = useNavigate();
  const goToCart = () => navigate("/cart");

  const {
    setShowCartDrawer,
    showCartDrawer,
    cartItemsCount,
    cartTotal,
    clearCart,
  } = useContext(CartContext);

  const closeDrawer = () => setShowCartDrawer(false);

  return (
    <div className={`CartDrawer-Container${showCartDrawer ? "" : "_isClosed"}`}>
      <div className="CartDrawer-Header">
        <h2 className="CartDrawer-Header-Counter">{`Item(s): ${cartItemsCount} U$${cartTotal}`}</h2>
        <button className="CartDrawer-CloseButton" onClick={closeDrawer}>
          X
        </button>
      </div>
      <CartItems showFullInfo={false} />
      <div className="CartDrawer-Actions">
        <SecondaryButton
          className="CartDrawer-ClearButton"
          text="Clear Cart"
          onClick={clearCart}
        />
        <Button
          className="CartDrawer-GoButton"
          text="Go to Cart"
          onClick={goToCart}
        />
      </div>
    </div>
  );
}
