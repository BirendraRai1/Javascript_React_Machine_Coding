import React from "react";
import useCounter from "./useCounter";

function CustomHook1() {
  const [count, Increment, Decrement] = useCounter(10); //here the initialValue is set to 10 which will receive inside the customHook
  return (
    <>
      <div style={{ textAlign: "center" }}>CustomHook1</div>
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

export default CustomHook1;

/*Custom Hooks in react
 *A custom hook is a javascript function whose name starts with "use"
 *We can use other hooks in custom hooks as well
 *
 *why to use custom Hook?
 *to remove the duplicated logic in components and we can extract that logic to custom hook***********/
