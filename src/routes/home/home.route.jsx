import { Categories } from "../../components/categories/categories.component";
import "./home.styles.scss";

export function HomePage() {
  return (
    <div className="HomePage-Container">
      <Categories />
    </div>
  );
}

export default HomePage;
