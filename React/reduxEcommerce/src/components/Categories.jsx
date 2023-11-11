import React, { useContext } from "react";
import { usePaginationContext } from "../contexts/PaginationContext";

function Categories(props) {
  const { pageNum, pageSize, setPageNum, setPageSize } = usePaginationContext();
  let { categories, setCurrCategory } = props;
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            className="category_option"
            key={index}
            onClick={() => {
              setCurrCategory(category);
              setPageNum(1);
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
