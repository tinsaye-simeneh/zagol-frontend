import React from "react";
import ReactDOM from "react-dom/client";
import Fixed from "./Fixed-comps";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Exclusive from "./components/Exclusive";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import Category from "./components/Category";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fixed />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<Home />} />
            <Route path="exclusive" element={<Exclusive />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="profile" element={<Profile />} />
            <Route path="category" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
