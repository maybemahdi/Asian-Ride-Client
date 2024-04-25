import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";

const Layout = () => {
  return (
    <div className="font-poppins">
      <Nav />
      <div className="w-[85%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
