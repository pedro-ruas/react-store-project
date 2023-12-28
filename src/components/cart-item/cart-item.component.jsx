import { useContext } from "react";
import "./cart-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export function CartItem({ cartItem }) {
  const { name, price, imageUrl, quantity } = cartItem;
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);

  const onIncreaseQuantity = () => addProductToCart(cartItem);
  const onDecreaseQuantity = () => removeProductFromCart(cartItem, false);
  const onRemoveFromCart = () => removeProductFromCart(cartItem, true);

  return (
    <div className="CartItem-Container">
      <div className="CartItem-Image-Container">
        <img src={imageUrl} alt={name} className="CartItem-Image" />
      </div>
      <div className="CartItem-Info">
        <div className="CartItem-Info-Name">{name}</div>
        <div className="CartItem-Info-Actions-Container">
          <button
            className="CartItem-Info-Actions-Delete"
            onClick={onRemoveFromCart}
          >
            X
          </button>
          <div className="CartItem-Info-Actions">
            <button
              className="CartItem-Info-Actions-QuantityChanger"
              onClick={onDecreaseQuantity}
            >
              -
            </button>
            <span className="CartItem-Info-Quantity">{quantity}</span>
            <button
              className="CartItem-Info-Actions-QuantityChanger"
              onClick={onIncreaseQuantity}
            >
              +
            </button>
          </div>
          <span className="CartItem-Info-Price">{`U$${price}`}</span>
        </div>
      </div>
    </div>
  );
}
