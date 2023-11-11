import React, { useState, useEffect, useContext } from "react";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import basicOps from "../utility/basicOps";
import { usePaginationContext } from "../contexts/PaginationContext";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]); //here null is better instead of empty array because filtered array length can be empty in case of searching also
  const {
    pageNum,
    pageSize,
    setPageNum,
    setPageSize,
    sortDir,
    setsortDir,
    categories,
    setCategories,
    currCategory,
    setCurrCategory,
  } = usePaginationContext();

  const object = basicOps(
    products,
    searchTerm,
    sortDir,
    currCategory,
    pageNum,
    pageSize
  );

  console.log("basicsObjs", object);
  const { filteredAndSortArr, totalPage } = object;
  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://fakestoreapi.com/products`);
      const productData = await resp.json();
      console.log("line 10", productData);
      setProducts(productData);
    })();
  }, []);
  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://fakestoreapi.com/products/categories`);
      const categoriesData = await resp.json();
      console.log("line 30", categoriesData);
      setCategories(["All categories", ...categoriesData]);
    })();
  }, []);
  console.log("currCategory is ", currCategory);

  return (
    <>
      <header className="nav_wrapper">
        <div className="search_sortWrapper">
          <input
            className="search_input"
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPageNum(1);
            }}
          />
          <ArrowUpwardIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={() => {
              setsortDir(-1);
              setPageNum(1);
            }}
          ></ArrowUpwardIcon>
          <ArrowDownwardIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={() => {
              setsortDir(1);
              setPageNum(1);
            }}
          ></ArrowDownwardIcon>
        </div>
        <div className="categories_wrapper">
          <Categories
            categories={categories}
            setCurrCategory={setCurrCategory}
            setPageNum={setPageNum}
          ></Categories>
        </div>
      </header>
      <main className="product_wrapper">
        <ProductList productList={filteredAndSortArr}></ProductList>
      </main>
      <div className="pagination">
        <button
          onClick={() => {
            setPageNum(pageNum - 1);
          }}
          disabled={pageNum == 1 ? true : false}
        >
          <KeyboardArrowLeftIcon fontSize="large"></KeyboardArrowLeftIcon>
        </button>
        <div className="pagenum">{pageNum}</div>
        <button
          onClick={() => {
            setPageNum(pageNum + 1);
          }}
          disabled={pageNum == totalPage ? true : false}
        >
          <KeyboardArrowRightIcon fontSize="large"></KeyboardArrowRightIcon>
        </button>
      </div>
    </>
  );
}

export default Home;

//filtering :-Hiding them temporarily
//delete :-remove the element
