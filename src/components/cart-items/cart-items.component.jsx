import { useContext } from "react";
import "./cart-items.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../cart-item/cart-item.component";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../button/button.component";

export function CartItems() {
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
    <div className="CartItems-Container">
      {cartItemsCount > 0 ? (
        <div className="CartItems-Items">
          {Array.from(productsInCart.values()).map((product) => (
            <CartItem
              key={product.id}
              cartItem={product}
            />
          ))}
        </div>
      ) : (
        <div className="CartItems-Empty">
          <div className="CartItems-Message">Your cart is empty</div>
          <Button text="Continue Shopping" onClick={onContinueShopping} />
        </div>
      )}
    </div>
  );
}
