import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";

const Layout = () => {
  return (
    <div className="w-[85%] mx-auto font-poppins">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
