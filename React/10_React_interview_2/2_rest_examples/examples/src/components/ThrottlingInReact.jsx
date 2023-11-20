import React, { useState, useEffect, useCallback, useMemo } from "react";

function ThrottlingInReact() {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([]);
  /*If we are using useMemo it is giving error throttledAPICall is not a function 
  because useMemo returns a memoized value where useCallBack returns a memoized function
   ***/
  const throttledAPICall = useCallback(
    throttle(async (searchTerm) => {
      let resp = await fetch(
        `https://demo.dataverse.org/api/search?q=${searchTerm}`
      );
      let user = await resp.json();
      console.log("user is ", user.data.items);
      setList(user.data.items);
    }, 2000),
    []
  );
  useEffect(() => {
    throttledAPICall(searchTerm);
  }, [searchTerm, throttledAPICall]);

  function throttle(fn, limit = 2000) {
    let shouldWait = false;
    return function (...args) {
      if (shouldWait) {
        return;
      }
      fn(...args);
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, limit);
    };
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {list == [] ? (
        <h2>...Loading</h2>
      ) : (
        list.map((listItem, index) => {
          //console.log("listItem inside li", listItem);
          return <li key={index}>{listItem.name}</li>;
        })
      )}
    </>
  );
}

export default ThrottlingInReact;

//refer this article https://dev.to/abhishekrawe/debouncing-and-throttling-in-reactjs-4fhf
