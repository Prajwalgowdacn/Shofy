import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shop } from "./Pages/shop";
import { Cart } from "./Pages/Cart";
import { Product } from "./Pages/Product";
import { ShopCategory } from "./Pages/ShopCategory";
import men_banner from "./Compoments/Assets/banner_mens.png";
import women_banner from "./Compoments/Assets/banner_women.png";
import kid_banner from "./Compoments/Assets/banner_kids.png";
import Footer from "./Compoments/Footer/Footer";
import { Features } from "./Compoments/Features/Features";
import { Navbar } from "./Compoments/Navbar/Navbar";
import PaymentComponent from "./Compoments/Payment/Payment";
import { Login } from "./Compoments/Login/Login";
import { Signup } from "./Compoments/Signup/Signup";
// import { Image } from "./Compoments/Profile/Image";
import Profile from "./Compoments/Profile/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            render={(props) => <Profile {...props} additionalProp={props} />}
          />

          <Route path="/payment" element={<PaymentComponent />} />
        </Routes>
        <Features />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
