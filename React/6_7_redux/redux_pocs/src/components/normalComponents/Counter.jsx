import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default Counter;

/*
 *Every react component has three sections
 *                       1.state management:-means either you can set the state or update the state
 *                       2.Event handlers
 *                       3.UI
 *                       4.Business Logic
 *****/
