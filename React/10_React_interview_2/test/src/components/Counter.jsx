import React, { useState } from "react";
function Counter() {
  let [count, changeCount] = useState(0);
  let increment = () => {
    changeCount(count + 1);
  };
  let decrement = () => {
    changeCount(count - 1);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <button onClick={increment}>+</button>
      <p>Count {count}</p>
      <button onClick={decrement}>-</button>
      <h1>Hello</h1>
    </div>
  );
}

export default Counter;
