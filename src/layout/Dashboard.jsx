import { FaCalendar, FaEnvelope, FaHome, FaList, FaListAlt, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdBook, MdMenuBook, MdReviews } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome />
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              <FaUtensils />
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList />
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <MdBook />
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
            <FaUsers />
              All Uers
            </NavLink>
          </li>
            </> : <>
            <li>
            <NavLink to="/dashboard/userHome">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdReviews />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
              <FaListAlt />
              My Booking
            </NavLink>
          </li>
            </>
          }
          
          {/* shared navlink */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdMenuBook />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome />
              User Home
            </NavLink>
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
