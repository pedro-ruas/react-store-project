import './categories.styles.scss';

const CATEGORIES = [
  {
    title: "Hats",
    image: "",
  },
  {
    title: "Jackets",
    image: "",
  },
  {
    title: "Sneakers",
    image: "",
  },
  {
    title: "Women",
    image: "",
  },
  {
    title: "Men",
    image: "",
  },
];

function App() {
  return (
    <div className="Categories-Container">
      {CATEGORIES.map((category) => (
        <div key={category.title} className="Category-Container">
          <div className="Category-Background">
            {/* <img src={category.image} /> */}
          </div>
          <div className="Category-Content">
            <h2>{category.title}</h2>
            <p>Show Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
