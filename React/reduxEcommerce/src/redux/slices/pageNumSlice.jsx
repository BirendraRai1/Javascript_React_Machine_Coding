import { createSlice } from "@reduxjs/toolkit";
const pageNumSlice = createSlice({
  name: "pageSlice",
  initialState: {
    pageNum: 1,
  },
  reducers: {
    incrementPage: (state) => {
      state.pageNum++;
    },
    decrementPage: (state) => {
      state.pageNum--;
    },
    fixedPage: (state) => {
      state.pageNum = 1;
    },
  },
});
export default pageNumSlice;
