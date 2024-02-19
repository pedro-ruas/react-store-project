import { Fragment, useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";

export function CategoriesPreview() {
  const { availableCategories = {} } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.entries(availableCategories).map(([title, products]) => (
        <CategoryPreview title={title} products={products} key={title} />
      ))}
    </Fragment>
  );
}

export default CategoriesPreview;
