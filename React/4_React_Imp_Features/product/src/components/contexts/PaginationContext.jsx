import React, { useContext, useState, createContext } from "react";

const PaginationContext = createContext();

export default function PaginationProvider({ children }) {
  // 1.All the state management thing state var , methods are at the same place ->
  //2.you do not have to pass the props
  const [pageSize, setPageSize] = useState(4);
  const [pageNum, setPageNum] = useState(1);
  const [currCategory, setCurrCategory] = useState("All categories");
  const pageProps = {
    pageSize,
    pageNum,
    currCategory,
    setPageNum,
    setPageSize,
    setCurrCategory,
  };
  return (
    <PaginationContext.Provider value={pageProps}>
      {children}
    </PaginationContext.Provider>
  );
}

// This is an example of customHook
export const usePaginationContext = () => {
  return useContext(PaginationContext);
};
