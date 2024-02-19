import "./cart-summary.styles.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

export function CartSummary() {
  const { cartItemsCount, cartTotal, cartTotalTax, cartTotalWithTax } =
    useContext(CartContext);
  const [promo, setPromo] = useState("");
  const [shipping, setShipping] = useState(null);

  return (
    <div className="CartSummary-Container">
      <div className="CartSummary-Info">
        <div className="CartSummary-Info-Items">
          <span>{`Item${
            cartItemsCount === 1 ? "" : "s"
          } ${cartItemsCount}`}</span>
          <span>{`U$${cartTotal}`}</span>
        </div>
        <div className="CartSummary-Info-Shipping">
          <span>Shipping</span>
          <div className="SELECT_PLACEHOLDER">Select Delivery</div>
        </div>
        <div className="CartSummary-Info-Promo">
          <span>Promo Code</span>
          <input
            className="CartSummary-Info-Promo-Input"
            placeholder="Enter your code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          />
          <button className="CartSummary-Info-Promo-Button">Apply</button>
        </div>
      </div>
      <div className="CartSummary-Total">
        <div className="CartSummary-Total-Overview">
          <span>Total Cost</span>
          <span>{`U$${cartTotalWithTax}`}</span>
        </div>
      </div>
      <button className="CartSummary-CheckoutButton">Checkout</button>
    </div>
  );
}
