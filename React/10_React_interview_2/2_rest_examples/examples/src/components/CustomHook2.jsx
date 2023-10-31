import React from "react";
import useCounter from "./useCounter";

function CustomHook2() {
  const [count, Increment, Decrement] = useCounter(); //here the initialValue will receive to defaultValue inside the customHook when not assigned
  return (
    <>
      <div style={{ textAlign: "center" }}>CustomHook2</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button onClick={Increment}>Increment</button>
        <p>{count}</p>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
}

export default CustomHook2;
