import React, { useState } from "react";
/*Generally first letter of component is in capital letter
 *But here we are creating custom hook and the first rule of custom hook is that it
 *should start with "use" keyword*/
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  return [count, Increment, Decrement];
}

export default useCounter;
