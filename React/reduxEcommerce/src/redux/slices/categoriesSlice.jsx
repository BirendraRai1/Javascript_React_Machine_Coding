import { createSlice } from "@reduxjs/toolkit";
const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: {
    categories: [],
  },
  reducers: {
    categoriesUpdate: (state, action) => {
      state.categories = action.payload;
    },
  },
});
export default categoriesSlice;
