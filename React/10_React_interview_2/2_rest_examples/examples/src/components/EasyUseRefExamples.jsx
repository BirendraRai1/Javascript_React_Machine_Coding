import React, { useState, useRef } from "react";
//what is useRef??
//How to use it??
/*useRef is one such hook used in functional component to directly manipulate the dom which cannot be achieved by state and props
 *
 *
 *
 *
 *When we are clicking on the input we have focus on the input .When we are clicking on the Reset button the focus is lost which we don't want.
 *We want that the focus remains when the Reset button is clicked.We ca use refElement because we can manipulate the dom.In the input tag we have the ref element
 ****************/
function EasyUseRefExamples() {
  const [name, setName] = useState("Biru");
  const refElement = useRef("");
  console.log("refElement is ", refElement); //refElement conatains an object which has a key current which is used to manipulate dom
  function Reset() {
    setName("");
    refElement.current.focus(); //here it sets the current input element to focus
  }
  function handleInput() {
    refElement.current.style.color = "blue"; //here it changes the color of text inside the input to blue when handleInput is clicked
  }
  return (
    <>
      <h1>Learning useRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>Handle Input</button>
    </>
  );
}

export default EasyUseRefExamples;
