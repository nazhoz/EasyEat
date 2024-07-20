import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cooking from "./components/Cooking/Cooking";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import SingleListView from "./pages/products/productsList/SingleListView";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/items" element={<Products />} />
          <Route path="/cooking" element={<Cooking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productview/:id" element={<SingleListView />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
