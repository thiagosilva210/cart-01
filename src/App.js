import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToAddCart from "./pages/ToAddCart";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ToAddCart />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
