import React, { useState, useEffect, useContext } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductList from "./ProductList";
import Categories from "./Categories";
import basicOps from "./utility/basicOps";
import { usePaginationContext } from "./contexts/PaginationContext";

function Home() {
  // preserver -> pagination
  /***single source of truth for all the products***/
  const [products, setProducts] = useState([]);
  /************ all the categories that are there for a product**********/
  const [categories, setCategories] = useState(["All categories"]); //here we are using empty array instead on null because while initial render categories are mapped on header so empty array will not return error while null returns error on rendering
  /**********Just to perform Action we have below three states***********/
  /*********************** state :-It is a term with which you want to filter the product list*****************************/
  const [searchTerm, setSearchTerm] = useState("");
  /**************************sort : 0 : for unsorted , 1: for increasing order , -1 : for decreasing order ************************************/
  const [sortDir, setsortDir] = useState(0);
  /**************************** currcategory stores which category group you want to store the result **********************************/

  // To do pagination we need page num and page size
  const { pageSize, pageNum, setPageNum, currCategory, setCurrCategory } =
    usePaginationContext();
  /****************get all the products*********************/
  /*
   *why we are creating async function inside a normal function??
   **Ans:-useEffect has two portions :-first is a function and second is a cleanUp function.When a useEffect takes a function it expects that it returns a function or nothing but a async function returns only a promise.
   *Thats why we are creating async function inside a normal function
   ******/
  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://fakestoreapi.com/products`);
      const productData = await resp.json();
      setProducts(productData);
    })();
  }, []);

  /**************getting all the categroies ********************/
  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://fakestoreapi.com/products/categories`);
      const categoriesData = await resp.json();
      setCategories([...categories, ...categoriesData]);
      console.log("categories is ", categories);
    })();
  }, []);
  const object = basicOps(
    products,
    searchTerm,
    sortDir,
    currCategory,
    pageNum,
    pageSize
  );
  const filteredSortedgroupByArr = object.filteredSortedgroupByArr;
  const totalPages = object.totalPages;
  return (
    <>
      {/* header */}
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
          <div className="icons_container">
            {/* These material ui acts as component and has props like fontSize and their values can be seen using control+space */}
            <ArrowCircleUpIcon
              style={{ color: "white" }}
              fontSize="large"
              onClick={() => {
                setsortDir(1);
                setPageNum(1);
              }}
            ></ArrowCircleUpIcon>
            <ArrowCircleDownIcon
              fontSize="large"
              style={{ color: "white" }}
              onClick={() => {
                setsortDir(-1);
                setPageNum(1);
              }}
            ></ArrowCircleDownIcon>
          </div>
        </div>
        {/* This is for categorization */}
        <div className="categories_wrapper">
          <Categories
            categories={categories}
            setCurrCategory={setCurrCategory}
          ></Categories>
        </div>
      </header>

      {/* main area  */}
      <main className="product_wrapper">
        {/* products will be there */}
        <ProductList productList={filteredSortedgroupByArr}></ProductList>
      </main>
      {/* pagination */}
      <div className="pagination">
        <button
          onClick={() => {
            if (pageNum == 1) return;
            setPageNum((pageNum) => pageNum - 1);
          }}
          disabled={pageNum == 1 ? true : false}
        >
          <KeyboardArrowLeftIcon fontSize="large"></KeyboardArrowLeftIcon>
        </button>
        <div className="pagenum">{pageNum}</div>
        <button
          onClick={() => {
            if (pageNum == totalPages) return;
            setPageNum((pageNum) => pageNum + 1);
          }}
          disabled={pageNum == totalPages ? true : false}
        >
          <ChevronRightIcon fontSize="large"></ChevronRightIcon>
        </button>
      </div>
    </>
  );
}

export default Home;

/***
 * 1. Steps/
 *  - Initial Data
 *  a. Searching
 *  b. Sorting
 *  c. Categorization
 *  d. Pagination
 *  e. Render the Results
 *
 * 2. Data:-There are two routes/api to get the data
 *      1. Products routes
 *      2. Categories routes
 *
 *
 * **/
