import React, { useState, useEffect } from "react";

function UseEffectTest() {
  const [visible, setVisible] = useState(false);
  function firstUseEffect() {
    console.log("component mounted");
    return function () {
      console.log("component will unmount");
    };
  }
  useEffect(firstUseEffect, []);
  console.log("render is first called than useEffect");
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
