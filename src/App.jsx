// Main page w/ heading, desc, nav link

import { 
  Link, 
  Outlet, 
} from "react-router";

const App = () => {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-logo">
          <div className="favicon"></div>
        </div>
        <div className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="shop">Shop</Link></li>
            <li><Link to="cart">Cart</Link></li>
          </ul>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;