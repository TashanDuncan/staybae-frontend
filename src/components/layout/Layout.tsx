import { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Favourites from "../favourites/favourites";

const Layout = () => {
  const [showFavourites, setShowFavourites] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col h-screen justify-between">
      <Header setIsShowingFavourites={setShowFavourites} />
      <Outlet />
      {showFavourites && <Favourites setIsShowing={setShowFavourites} />}
      <Footer />
    </div>
  );
};

export default Layout;
