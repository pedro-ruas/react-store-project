import { SecondaryButton } from "../button/button.component";
import "./product-card.styles.scss";

export function ProductCard(props) {
  const { name, price, imageUrl } = props;

  const onAddToCart = () => console.log(`Added ${name} to cart`);

  return (
    <div className="ProductCard-Container">
      <img src={imageUrl} alt={name} className="ProductCard-Image"/>
      <div className="ProductCard-Info">
        <span className="ProductCard-Info-Name">{name}</span>
        <span className="ProductCard-Info-Price">{`U$ ${price}`}</span>
      </div>
      <SecondaryButton text="Add to Cart" onClick={onAddToCart} />
    </div>
  )
}
