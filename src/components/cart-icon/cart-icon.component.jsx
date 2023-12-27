import { useContext } from "react";
import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export function CartIcon(props) {
  const itemsCount = 0;
  const { setShowCartDrawer } = useContext(CartContext);
  const openDrawer = () => setShowCartDrawer(true);

  return (
    <div className="CartIcon-Container" onClick={openDrawer}>
      <BagIcon className="CartIcon-Icon" />
      <span className="CartIcon-Counter">{itemsCount}</span>
    </div>
  );
}
