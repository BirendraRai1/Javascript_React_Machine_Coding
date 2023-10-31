// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";
//1
const cartSlice = createSlice({
  name: "countername",
  initialState: {
    cartQuantity: 0,
    // cartProducts contains array of object .Inside the object [{details of the product, individal quantity},]
    cartProducts: [],
    totalPrice: 0,
  },
  // all the update logic
  reducers: {
    addToCart: (state, action) => {
      state.cartQuantity++;
      const productToBeAdded = action.payload;
      const requiredProduct = state.cartProducts.find((cProduct) => {
        return cProduct.id == productToBeAdded.id;
      });
      if (requiredProduct == undefined) {
        //quantity
        productToBeAdded.indQuantity = 1;
        state.cartProducts.push(productToBeAdded);
      } else {
        // already present
        requiredProduct.indQuantity++;
      }
      state.totalPrice += productToBeAdded.price;
    },

    deleteFromCart: (state, action) => {
      let productToBeDeleted = action.payload;
      let productIdx = state.cartProducts.findIndex(
        (cProduct) => cProduct.id == productToBeDeleted.id
      );
      if (productIdx != -1) {
        state.cartProducts[productIdx].indQuantity--;
        if (state.cartProducts[productIdx].indQuantity == 0)
          state.cartProducts.splice(productIdx, 1);
        state.cartQuantity--;
        state.totalPrice -= productToBeDeleted.price;
      }
    },
  },
});

export const action = cartSlice.actions;
export default cartSlice;
