import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./pages/ProductDetails";
import User from "./pages/User";
import Cart from "./pages/Cart";
import "./App.css";
import PaginationProvider from "./contexts/PaginationContext";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PaginationProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            {" "}
          </Route>
          <Route path="/product" element={<ProductList></ProductList>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          >
            {" "}
          </Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}>
            {" "}
          </Route>
        </Routes>
      </PaginationProvider>
    </Provider>
  );
}

export default App;
//
