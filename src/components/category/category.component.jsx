import { useNavigate } from "react-router-dom";
import "./category.styles.scss";

export function Category(props) {
  const { title, image } = props;
  const navigate = useNavigate();

  const onNavigate = () => navigate(`/shop/${title.toLowerCase()}`);

  return (
    <div key={title} className="Category-Container" onClick={onNavigate}>
      <div
        className="Category-Background"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="Category-Content">
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
}
