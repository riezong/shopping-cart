// Main page w/ heading, desc, nav link

import { 
  Link, 
  Outlet, 
} from "react-router";

const App = () => {
  return (
    <div>
      <h1>Andrew's Shop</h1>
      <p>A few images</p>
      <p>information</p>
      <nav>
        <ul>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;