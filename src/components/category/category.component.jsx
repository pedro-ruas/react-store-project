import "./category.styles.scss";

export function Category(props) {
  const { title, image } = props;

  return (
    <div key={title} className="Category-Container">
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
