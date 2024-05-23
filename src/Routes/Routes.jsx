import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path: '/order/:category',
        element: <Order/>
      },
      {
        path: '/login',
        element: <Login/>
      }
    ],
  },
]);
export default router;
