import { createSlice } from "@reduxjs/toolkit";
const pageSlice = createSlice({
  name: "pageSlice",
  initialState: {
    pageNum: 1,
  },
  reducers: {
    setPageNum: (state, descObj) => {
      state.pageNum++;
    },
  },
});
