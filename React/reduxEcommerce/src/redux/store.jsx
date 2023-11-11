import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import ThunkMiddleware from "redux-thunk";
const store = configureStore({
  reducer: {
    cartState: cartSlice.reducer,
  },
  middleware: [ThunkMiddleware],
});

export default store;
