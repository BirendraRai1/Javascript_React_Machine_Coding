import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setInterval(() => {
      // console.log(count)

      //It is always better to use your useState with cb  when you are updating
      // with the help of a previous of a state
      setCount((count) => {
        return count + 1;
      });
      /*Here in the below doing count+1 by a setInterval not by an eventlistener onclick.
       *So there is a quirk in react that it takes reference from outer scope that is count and the value of count is 0 when we add event listener then it will not.
       *The best way to do this is just pass a function and pass count as parameter .Now react will get the value of count from virtual DOM.so in setCount(count+1)it is updating but always as 1
       *******/
      // setCount(count+1)
    }, 1000);
  };

  return (
    <>
      <h3>{count}</h3>
      <button onClick={handleCount}>Increment</button>
    </>
  );
}

export default Counter;
