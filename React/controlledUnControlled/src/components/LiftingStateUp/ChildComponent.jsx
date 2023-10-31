import React, { useState } from "react";
/*The requirement is when someone fills up the form it can be accessed in the parentComponent
 *
 ***********/
function ChildComponent(props) {
  const [name, setName] = useState("");
  //since eventhandlers return event object therefore we are taking e object in handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    props.receivedData(name);
  }
  return (
    <>
      <div>ChildComponent</div>
      <h1>{props.data1}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default ChildComponent;
