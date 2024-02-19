import "./categories.styles.scss";
import CATEGORIES from "../../data/categories.json";
import { Category } from "../category/category.component";

export function Categories() {
  return (
    <div className="Categories-Container">
      {CATEGORIES.map(({ title, image }) => (
        <Category key={title} image={image} title={title} />
      ))}
    </div>
  );
}
