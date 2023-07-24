import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full flex flex-col h-screen justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
