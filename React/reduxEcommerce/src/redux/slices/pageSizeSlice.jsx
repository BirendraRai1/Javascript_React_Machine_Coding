import { createSlice } from "@reduxjs/toolkit";
const pageSizeSlice = createSlice({
  name: "pageSizeSlice",
  initialState: {
    pageSize: 4,
  },
});
export default pageSizeSlice;
