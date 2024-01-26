import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export function CheckoutItem({ cartItem }) {
  const { name, price, imageUrl, quantity, description, tax } = cartItem;
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);

  const onIncreaseQuantity = () => addProductToCart(cartItem);
  const onDecreaseQuantity = () => removeProductFromCart(cartItem, false);
  const onRemoveFromCart = () => removeProductFromCart(cartItem, true);
  const onChangeQuantity = (newQty) => {};
  const onSaveForLater = () => {};

  return (
    <tr className="CheckoutItem-Container">
      <td className="CheckoutItem-Info">
        <div className="CheckoutItem-Image-Container">
          <img src={imageUrl} alt={name} className="CheckoutItem-Image" />
        </div>
        <div className="CheckoutItem-Info-Container">
          <h3 className="CheckoutItem-Info-Name">{name}</h3>
          <p className="CheckoutItem-Info-Description">{description}</p>
          <p className="CheckoutItem-Info-Actions">
            <button
              className="CheckoutItem-Info-Actions-Button-Delete"
              onClick={onRemoveFromCart}
            >
              Remove
            </button>
            <button
              className="CheckoutItem-Info-Actions-Button-Save"
              onClick={onSaveForLater}
            >
              Save for Later
            </button>
          </p>
        </div>
      </td>

      <td className="CheckoutItem-Quantity">
        <button
          className="CheckoutItem-Quantity-Changer"
          onClick={onDecreaseQuantity}
        >
          -
        </button>
        <input
          value={quantity}
          className="CheckoutItem-Quantity-Input"
          onChange={onChangeQuantity}
        />
        <button
          className="CheckoutItem-Quantity-Changer"
          onClick={onIncreaseQuantity}
        >
          +
        </button>
      </td>

      <td className="CheckoutItem-Price">
        <span className="CheckoutItem-Price-Text">{`U$${parseFloat(
          price
        ).toFixed(2)}`}</span>
        <span className="CheckoutItem-Price-Text-Tax">{`+U$${parseFloat(
          price * tax
        ).toFixed(2)}`}</span>
      </td>
      <td className="CheckoutItem-Total">
        <span className="CheckoutItem-Total-Text">{`U$${parseFloat(
          price * quantity
        ).toFixed(2)}`}</span>
        <span className="CheckoutItem-Total-Text-Tax">{`+U$${parseFloat(
          price * quantity * tax
        ).toFixed(2)}`}</span>
      </td>
    </tr>
  );
}
