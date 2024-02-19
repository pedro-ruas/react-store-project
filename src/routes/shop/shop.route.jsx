import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import CategoryPage from "../category/category.route";

export function ShopPage() {
  return (
    <div className="ShopPage-Container">
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default ShopPage;
