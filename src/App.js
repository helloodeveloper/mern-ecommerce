import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    path: "*",
    element: (<Notfound />),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
