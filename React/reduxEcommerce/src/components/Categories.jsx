import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import pageNumSlice from "../redux/slices/pageNumSlice";
import currCategoriesSlice from "../redux/slices/currCategoriesSlice";
const actions3 = pageNumSlice.actions;
const actions4 = currCategoriesSlice.actions;

function Categories(props) {
  const dispatch = useDispatch();
  let { categories } = props;
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            className="category_option"
            key={index}
            onClick={() => {
              dispatch(actions4.updateCurrCategory(category));
              dispatch(actions3.fixedPage());
            }}
          >
            {category}
          </button>
        );
      })}
    </>
  );
}

export default Categories;
