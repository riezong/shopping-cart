import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="hero">
      <div>
        <h1>My Shop</h1>
      </div>
      <div className="cta">
        <button>Shop Now</button>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default HomePage;