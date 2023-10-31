import React, { useState, useEffect } from "react";

function UseEffectTest() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component will unmount");
    };
  }, []);
  return (
    <div>
      <h1>App Component</h1>
      <button onClick={() => setVisible(!visible)}>Toggle Component</button>
      {visible && <p>Visible component</p>}
    </div>
  );
}

export default UseEffectTest;

/**output
 * component mounted.Component will unmount
 *
 * *****/
