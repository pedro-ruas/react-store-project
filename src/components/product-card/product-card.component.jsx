import { useContext } from "react";
import { SecondaryButton } from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addProductToCart } = useContext(CartContext);

  const onAddToCart = () => addProductToCart(product);

  return (
    <div className="ProductCard-Container">
      <img src={imageUrl} alt={name} className="ProductCard-Image" />
      <div className="ProductCard-Info">
        <span className="ProductCard-Info-Name">{name}</span>
        <span className="ProductCard-Info-Price">{`U$${price}`}</span>
      </div>
      <SecondaryButton text="Add to Cart" onClick={onAddToCart} />
    </div>
  );
}
