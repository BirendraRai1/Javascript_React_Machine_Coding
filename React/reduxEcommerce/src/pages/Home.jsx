import React, { useState, useEffect, useContext } from "react";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import basicOps from "../utility/basicOps";
import { useSelector, useDispatch } from "react-redux";
import categoriesSlice from "../redux/slices/categoriesSlice";
import sortDirSlice from "../redux/slices/sortDirSlice";
import pageNumSlice from "../redux/slices/pageNumSlice";
import pageSizeSlice from "../redux/slices/pageSizeSlice";
import currCategoriesSlice from "../redux/slices/currCategoriesSlice";
const actions1 = categoriesSlice.actions;
const actions2 = sortDirSlice.actions;
const actions3 = pageNumSlice.actions;
const actions4 = pageSizeSlice.actions;
const actions5 = currCategoriesSlice.actions;
function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categoriesState);
  const { sortDir } = useSelector((store) => store.sortDirState);
  const { pageNum } = useSelector((store) => store.pageNumState);
  const { pageSize } = useSelector((store) => store.pageSizeState);
  const { currCategory } = useSelector((store) => store.currCategoriesState);

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
      console.log("line 30", ["All categories", ...categoriesData]);
      dispatch(
        actions1.categoriesUpdate(["All categories", ...categoriesData])
      );
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
              dispatch(actions3.fixedPage());
            }}
          />
          <ArrowUpwardIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={() => {
              dispatch(actions2.decreasingSort());
              dispatch(actions3.fixedPage());
            }}
          ></ArrowUpwardIcon>
          <ArrowDownwardIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={() => {
              dispatch(actions2.increasingSort());
              dispatch(actions3.fixedPage());
            }}
          ></ArrowDownwardIcon>
        </div>
        <div className="categories_wrapper">
          <Categories categories={categories}></Categories>
        </div>
      </header>
      <main className="product_wrapper">
        <ProductList productList={filteredAndSortArr}></ProductList>
      </main>
      <div className="pagination">
        <button
          onClick={() => {
            dispatch(actions3.decrementPage());
          }}
          disabled={pageNum == 1 ? true : false}
        >
          <KeyboardArrowLeftIcon fontSize="large"></KeyboardArrowLeftIcon>
        </button>
        <div className="pagenum">{pageNum}</div>
        <button
          onClick={() => {
            dispatch(actions3.incrementPage());
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
