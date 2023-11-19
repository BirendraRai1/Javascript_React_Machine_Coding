//Debouncing in React – How to Delay a JS Function
import React, { useState, useEffect } from "react";

function DebounceInReact() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  /*In this useEffect Hook, we will have a function called getData.
   This function getData will have a callback function called setTimeOut. 
   And we will set the timer for 1 seconds
   *******/

  useEffect(() => {
    let getData = setTimeout(async () => {
      let resp = await fetch(
        `https://demo.dataverse.org/api/search?q=${value}`
      );
      let user = await resp.json();
      console.log("user is ", user.data.items);
      setList(user.data.items);
    }, 1000);
    return () => clearTimeout(getData);
  }, [value]);
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

export default DebounceInReact;
