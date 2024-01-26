import { useContext, useEffect } from "react";
import "./cart.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { CartSummary } from "../../components/cart-summary/cart-summary.component";
import { CheckoutItems } from "../../components/checkout-items/checkout-items.component";

export function CartPage() {
  const { setShowCartDrawer, cartItemsCount, clearCart } =
    useContext(CartContext);

  useEffect(() => {
    setShowCartDrawer(false);
  });

  return (
    <div className="CartPage-Container">
      <div className="CartPage-CartItems">
        <div className="CartPage-CartItems-Header">
          <span className="CartPage-CartItems-Header-Title">Shopping Cart</span>
          <span className="CartPage-CartItems-Header-Counter">{`${cartItemsCount} Item${
            cartItemsCount === 1 ? "" : "s"
          }`}</span>
        </div>
        <CheckoutItems />
      </div>
      {cartItemsCount > 0 && (
        <div className="CartPage-Info">
          <div className="CartPage-Info-Header">
            <span className="CartPage-Info-Header-Title">Order Summary</span>
          </div>
          <CartSummary />
        </div>
      )}
    </div>
  );
}
