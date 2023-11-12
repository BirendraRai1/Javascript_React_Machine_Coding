import { createSlice } from "@reduxjs/toolkit";
const currCategoriesSlice = createSlice({
  name: "currCategoriesSlice",
  initialState: {
    currCategory: "All categories",
  },
  reducers: {
    updateCurrCategory: (state, action) => {
      state.currCategory = action.payload;
    },
  },
});
export default currCategoriesSlice;
