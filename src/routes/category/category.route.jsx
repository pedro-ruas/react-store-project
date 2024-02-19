import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";

export function CategoryPage() {
  const { category } = useParams();
  const { availableCategories } = useContext(ProductsContext);
  const [products, setProducts] = useState(availableCategories[category]);

  useEffect(() => {
    setProducts(availableCategories[category]);
  }, [category, availableCategories]);

  return (
    <CategoryPreview
      title={category}
      products={products}
      showAll={true}
      showTitle={false}
    />
  );
}

export default CategoryPage;
