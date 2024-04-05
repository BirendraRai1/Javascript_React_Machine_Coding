import React, { useState, useEffect } from "react";

function GetData() {
  const [data, setData] = useState(null); //Always try to put some value in useState
  //    http -> call -> update the state -> rerender
  function fn() {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      console.log("useEffect ran ");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        { signal }
      );
      const user = await response.json();
      console.log("came here");
      setData(user);
      console.log("user is ", user);
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }
  // It is a hook given by react.This useEffect is called after first render as the user will not wait for us .We want to show something to the user.
  //Here useEffect takes a function and calls it after first render.You always have to pass a normal function to useEffect otherwise you may have a error
  useEffect(fn, []);
  console.log("Render");
  console.log("After setData ", data);

  return (
    <>
      {data == null ? (
        <h2>Placeholder loading the data....</h2>
      ) : (
        <>
          <h2>Name : {data.name}</h2>
          <h2>Email : {data.email}</h2>
          <h2>username : {data.username}</h2>
        </>
      )}
    </>
  );
}

export default GetData;

//refer this article for cleanUp function
//https://medium.com/@vishalkalia.er/what-is-the-useeffect-cleanup-function-and-how-it-works-83d8c67a1a10//
