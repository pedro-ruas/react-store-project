import { Link } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import "./category-preview.styles.scss";

export function CategoryPreview({
  title,
  products,
  showTitle = true,
  showAll = false,
}) {
  const filteredProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="CategoryPreview-Container">
      {showTitle && (
        <Link className="CategoryPreview-Title" to={`/shop/${title}`}>
          {title}
        </Link>
      )}
      <div className="CategoryPreview-Products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
