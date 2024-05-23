import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Wishlist from "./components/Wishlist.js";
import Cart from "./components/Cart.js";
import SingleItem from "./components/SingleItem";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleItem />} />
          {/* <Route path="/product/:id" element={<Pros/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
