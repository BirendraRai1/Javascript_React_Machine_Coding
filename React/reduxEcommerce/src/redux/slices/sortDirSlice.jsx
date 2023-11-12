import { createSlice } from "@reduxjs/toolkit";
const sortDirSlice = createSlice({
  name: "sortDirSlice",
  initialState: {
    sortDir: 0,
  },
  reducers: {
    increasingSort: (state) => {
      state.sortDir = 1;
    },
    decreasingSort: (state) => {
      state.sortDir = -1;
    },
  },
});
export default sortDirSlice;
