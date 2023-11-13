import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/login",
    element: (<LoginPage />),
  },
  {
    path: "/signup",
    element: (<SignupPage />),
  },
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/cart",
    element: (<CartPage />),
  },
  {
    path: "/checkout",
    element: (<Checkout />),
  },
  {
    path: "/product-detail",
    element: (<ProductDetailPage />),
  },
  {
    path: "/*",
    element: (<Notfound />),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
