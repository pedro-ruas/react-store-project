import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { ProductCard } from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

export function ShopPage() {
  const { availableProducts = [] } = useContext(ProductsContext);

  return (
    <div className="ShopPage-Container">
      {availableProducts.map(({ id, ...product }) => (
        <ProductCard key={id} {...product} />
      ))}
    </div>
  );
}

export default ShopPage;
