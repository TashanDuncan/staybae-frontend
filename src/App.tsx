import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProgressBar from "@badrap/bar-of-progress";
import { useEffect } from "react";
import Home from "./pages/home/Home";
import PropertyDetails from "./pages/details/PropertyDetails";
import Search from "./pages/search/Search";
import NotFound from "./pages/404/NotFound";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

function App() {
  const location = useLocation();

  useEffect(() => {
    progress.start();

    setTimeout(() => {
      progress.finish();
    }, 1000);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/page-not-found" element={<NotFound />} />
          <Route
            path="/*"
            element={<Navigate to={"/page-not-found"} replace />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
