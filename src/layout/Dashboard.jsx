import { FaCalendar, FaHome, FaListAlt, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdMenuBook, MdReviews } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
        <li>
            <NavLink to="/dashboard/userHome">
            <FaHome />
                User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
            <FaCalendar />
                Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
            <FaShoppingCart />
                My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
            <MdReviews />
                Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
            <FaListAlt />
                My Booking</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
            <FaHome />
                Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">
            <MdMenuBook />
                Menu</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userHome">
            <FaHome />
                User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userHome">
            <FaHome />
                User Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="p-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
