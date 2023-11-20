import React, { useState, useEffect, useCallback } from "react";

function SecondDebounce() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const debouncedAPICall = useCallback(
    debounce(async (value) => {
      let resp = await fetch(
        `https://demo.dataverse.org/api/search?q=${value}`
      );
      let user = await resp.json();
      console.log("user is ", user.data.items);
      setList(user.data.items);
    }, 1000),
    []
  );

  useEffect(() => {
    debouncedAPICall(value);
  }, [value, debouncedAPICall]);

  function debounce(fn, delay = 500) {
    let timeOutID;
    return function (...args) {
      if (timeOutID) clearTimeout(timeOutID);
      timeOutID = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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

export default SecondDebounce;
