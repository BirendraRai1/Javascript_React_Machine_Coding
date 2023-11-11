import React, { useState, useContext } from "react";
export const PaginationContext = React.createContext();
export default function PaginationProvider({ children }) {
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [sortDir, setsortDir] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrCategory] = useState("All categories");
  const pageProps = {
    pageNum,
    pageSize,
    sortDir,
    categories,
    currCategory,
    setPageNum,
    setPageSize,
    setsortDir,
    setCategories,
    setCurrCategory,
  };
  console.log("children are ", children);
  return (
    <PaginationContext.Provider value={pageProps}>
      {children}
    </PaginationContext.Provider>
  );
}

export const usePaginationContext = () => {
  const userContext = useContext(PaginationContext);
  console.log("userContext is ", userContext);
  return userContext;
};
