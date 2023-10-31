import React from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent() {
  const data1 = "Biru";
  /*data1 is being passed from parent to child component as props********/

  /*receivedData is accepting the argument as data coming from ChildComponent
   *Here receivedData is passed from child to parent **/
  function receivedData(data) {
    console.log("data inside parent", data);
  }
  return (
    <>
      <div>ParentComponent</div>
      <ChildComponent data1={data1} receivedData={receivedData} />
    </>
  );
}

export default ParentComponent;
