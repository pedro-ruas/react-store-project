import { useContext } from "react";
import { Button } from "../button/button.component";
import "./cart-drawer.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../cart-item/cart-item.component";

export function CartDrawer() {
  const goToCart = () => console.log("Cart");
  const {
    productsInCart,
    setShowCartDrawer,
    showCartDrawer,
    cartItemsCount,
    cartTotal,
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
      {cartItemsCount > 0 ? (
        <div className="CartDrawer-Items">
          {Array.from(productsInCart.values()).map((product) => (
            <CartItem key={product.id} cartItem={product} />
          ))}
        </div>
      ) : (
        <div className="CartDrawer-Message">Your cart is empty</div>
      )}
      <Button
        className="CartDrawer-GoButton"
        text="Go to Cart"
        onClick={goToCart}
      />
    </div>
  );
}
