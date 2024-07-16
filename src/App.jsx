import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Shop from "./Pages/Shop.jsx"; // Import the Shop component
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />{" "}
          {/* Assuming '/' should render Shop */}
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Shop />} />{" "}
          {/* Adjusted to render Shop */}
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
      {/* <Hero /> */}
    </div>
  );
}

export default App;
