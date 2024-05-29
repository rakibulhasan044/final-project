import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Secret from "../pages/shared/secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import Allusers from "../pages/dashboard/allUsers/Allusers";
import AddItems from "../pages/dashboard/addItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../pages/dashboard/manageItems/ManageItem";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";

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
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />
      },
      //admin route
      {
        path: "users",
        element: (
          <AdminRoutes>
            <Allusers />
          </AdminRoutes>
        ),
      },
      {
        path: 'manageItems',
        element: <AdminRoutes>
          <ManageItem />
        </AdminRoutes>

      },
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <AddItems />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
export default router;
