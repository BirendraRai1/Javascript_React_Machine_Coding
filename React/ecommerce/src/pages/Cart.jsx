import React from "react";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
function Cart() {
  const { cartProducts, totalPrice } = useSelector((store) => {
    return store.cartReducer;
  });
  return (
    <>
      <h1>Cart</h1>
      <h2>Add to Product List</h2>
      <h3>Price:{totalPrice}</h3>
      <div className="cart_product_wrapper">
        <ProductList productList={cartProducts}></ProductList>
      </div>
    </>
  );
}

export default Cart;
