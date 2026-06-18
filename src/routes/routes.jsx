import HomePage from "../pages/homepage";
import App from "../App";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import ShopPage from "../pages/ShopPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ]
  },
];

export default routes;