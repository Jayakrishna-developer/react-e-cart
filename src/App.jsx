import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import View from "./Pages/View";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Pass insideHome prop dynamically */}
      <Header insideHome={location.pathname === "/"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
