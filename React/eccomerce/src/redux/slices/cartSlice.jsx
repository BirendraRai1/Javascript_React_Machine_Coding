import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartQuantity: 0,
    cartProducts: [],
  },
  reducers: {
    addToCart: (state, descObj) => {
      state.cartQuantity++;
      const productToBeAdded = descObj.payload;
      const requiredProduct = state.cartProducts.find(
        (cProduct) => cProduct.id == productToBeAdded.id
      );
      if (requiredProduct == undefined) {
        productToBeAdded.quantity = 1;
        state.cartProducts.push(productToBeAdded);
      } else {
        requiredProduct.quantity++;
      }
    },
    deleteFromCart: (state, descObj) => {
      let productToBeDeleted = descObj.payload;
      let productIdx = state.cartProducts.findIndex(
        (cProduct) => cProduct.id == productToBeDeleted.id
      );
      if (productIdx != -1) {
        state.cartProducts[productIdx].quantity--;
        if (state.cartProducts[productIdx].quantity == 0)
          state.cartProducts.splice(productIdx, 1);
        state.cartQuantity--;
      }
    },
  },
});

export default cartSlice;
