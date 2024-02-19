import { useContext } from "react";
import "./checkout-items.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../checkout-item/checkout-item.component";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../button/button.component";

export function CheckoutItems() {
  const { productsInCart, setShowCartDrawer, cartItemsCount } =
    useContext(CartContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onContinueShopping = () => {
    if (pathname.includes("/cart")) {
      return navigate("/");
    } else {
      return setShowCartDrawer(false);
    }
  };

  return (
    <div className="CheckoutItems-Container">
      {cartItemsCount > 0 ? (
        <div className="CheckoutItems">
          <table className="CheckoutItems-Items-Container">
            <thead className="CheckoutItems-Header">
              <th className="CheckoutItems-Header-Product">Product Details</th>
              <th className="CheckoutItems-Header-Quantity">Quantity</th>
              <th className="CheckoutItems-Header-Price">Price</th>
              <th className="CheckoutItems-Header-Total">Total</th>
            </thead>
            <tbody className="CheckoutItems-Items">
              {Array.from(productsInCart.values()).map((product) => (
                <CheckoutItem key={product.id} cartItem={product} />
              ))}
            </tbody>
          </table>
          <button
              className="CheckoutItems-ContinueButton"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
        </div>
      ) : (
        <div className="CheckoutItems-Empty">
          <div className="CheckoutItems-Message">Your cart is empty</div>
          <Button text="Continue Shopping" onClick={onContinueShopping} />
        </div>
      )}
    </div>
  );
}
