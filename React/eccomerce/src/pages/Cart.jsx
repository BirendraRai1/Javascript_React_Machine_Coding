import React from "react";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
function Cart() {
  const { cartProducts } = useSelector((store) => store.cartState);
  return (
    <>
      <h1>Cart</h1>
      <h2>Add To Product List</h2>
      <div className="cart_product_wrapper">
        <ProductList productList={cartProducts}></ProductList>
      </div>
    </>
  );
}

export default Cart;
