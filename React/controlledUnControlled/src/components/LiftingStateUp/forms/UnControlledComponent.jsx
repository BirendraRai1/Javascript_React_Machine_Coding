import React, { useRef, useState } from "react";

function UnControlledComponent() {
  const refObject = useRef();
  function handleSubmit(e) {
    e.preventDefault(); //it is used to prevent it running from default behaviour of html
    console.log("refObject is ", refObject.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First name:</label>
        <br />
        <input type="text" ref={refObject} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default UnControlledComponent;

/*onSubmit is an event handler and ref is an attribute
*
*
*
*
*
*In most cases, we recommend using controlled components to implement forms. 
In a controlled component, form data is handled by a React component. 
The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, 
you can use a ref to get form values from the DOM***/
