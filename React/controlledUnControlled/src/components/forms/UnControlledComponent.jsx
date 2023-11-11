import React, { useRef, useState } from "react";

function UnControlledComponent() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault(); //it is used to prevent it running from default behaviour of html
    //perform registration logic here
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    //Reset input fields
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    console.log("inputs of form are as follows ", name, email, password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameInputRef} />
        <br />
        <input type="email" placeholder="Email" ref={emailInputRef} />
        <br />
        <input type="password" placeholder="Password" ref={passwordInputRef} />
        <br />
        <button type="submit">Register</button>
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
