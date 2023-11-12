import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import categoriesSlice from "./slices/categoriesSlice";
import currCategoriesSlice from "./slices/currCategoriesSlice";
import pageNumSlice from "./slices/pageNumSlice";
import pageSizeSlice from "./slices/pageSizeSlice";
import sortDirSlice from "./slices/sortDirSlice";
const store = configureStore({
  reducer: {
    cartState: cartSlice.reducer,
    categoriesState: categoriesSlice.reducer,
    currCategoriesState: currCategoriesSlice.reducer,
    pageNumState: pageNumSlice.reducer,
    pageSizeState: pageSizeSlice.reducer,
    sortDirState: sortDirSlice.reducer,
  },
});

export default store;
