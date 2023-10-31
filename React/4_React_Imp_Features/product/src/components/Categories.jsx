import React, { useContext } from "react";
import { usePaginationContext } from "./contexts/PaginationContext";

function Categories(props) {
  const { categories } = props;
  console.log("categories inside props ", categories);
  const { setPageNum, setCurrCategory } = usePaginationContext();
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="category_option"
            onClick={() => {
              setCurrCategory(category);
              setPageNum(1);
            }}
          >
            {" "}
            {category}
          </button>
        );
      })}
    </>
  );
}

export default Categories;
