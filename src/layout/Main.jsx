import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
    const location = useLocation()
    console.log(location);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup')
  return (
    <div className="">
      { noHeaderFooter || <Navbar/> }
      <Outlet />
      { noHeaderFooter || <Footer/> }
    </div>
  );
};

export default Main;
