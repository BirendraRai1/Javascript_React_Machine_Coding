// import createSlice from redux toolkit indicates that to create a slice we need a redux;
//This is an example of synchronous redux
import { createSlice } from "@reduxjs/toolkit";
//1
//CreateSlice is not a function .Everything is managed by redux
const counterSlice = createSlice({
  name: "countername", //There is no usecase of name you can put anything.Redux uses it internally to identify it.
  initialState: {
    count: 5,
  },
  // all the update logic happens here .reducers is the keyword
  reducers: {
    // in the state parameter of increment and decrement we get the intial state ,
    // that is updated inside it
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count == 0) {
        console.log("reached zero state");
        return;
      }
      state.count -= 1;
    },
  },
});

export default counterSlice;
