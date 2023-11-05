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
      //state.totalPrice += productToBeAdded.price;
      let a = state.totalPrice;
      let b = productToBeAdded.price;
      let c = String(a).split(".")[1];
      c = c == undefined ? 0 : c.length;
      let d = String(b).split(".")[1];
      d = d == undefined ? 0 : d.length;
      let dec = c > d ? c : d;
      let stringFormOfNumberToBeMultiplied = "1";
      while (dec) {
        stringFormOfNumberToBeMultiplied += "0";
        dec--;
      }
      state.totalPrice =
        (a * Number(stringFormOfNumberToBeMultiplied) +
          b * Number(stringFormOfNumberToBeMultiplied)) /
        Number(stringFormOfNumberToBeMultiplied);
      console.log("state.totalPrice is ", state.totalPrice);
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
        let a = state.totalPrice;
        let b = productToBeDeleted.price;
        let c = String(a).split(".")[1];
        c = c == undefined ? 0 : c.length;
        let d = String(b).split(".")[1];
        d = d == undefined ? 0 : d.length;
        let dec = c > d ? c : d;
        let stringFormOfNumberToBeMultiplied = "1";
        while (dec) {
          stringFormOfNumberToBeMultiplied += "0";
          dec--;
        }
        state.totalPrice =
          (a * Number(stringFormOfNumberToBeMultiplied) -
            b * Number(stringFormOfNumberToBeMultiplied)) /
          Number(stringFormOfNumberToBeMultiplied);
        console.log("state.totalPrice is ", state.totalPrice);
      }
    },
  },
});

export const action = cartSlice.actions;
export default cartSlice;
