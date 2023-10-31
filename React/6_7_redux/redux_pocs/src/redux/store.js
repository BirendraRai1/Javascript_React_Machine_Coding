import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import TodoSlice from "./slices/TodoSlice";
import userslice from "./slices/UserSlice";

import thunkMiddleWare from "redux-thunk";
// 2
const store = configureStore({
  reducer: {
    counterState: counterSlice.reducer,
    todoState: TodoSlice.reducer,
    userState: userslice.reducer,
  },
  middleware: [thunkMiddleWare],
});
export default store;
