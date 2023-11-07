import React, { useState } from "react";

function ControlledForm() {
  const [fname, setfName] = useState("john");
  const [lname, setlName] = useState("Doe");
  function handlefname(e) {
    console.log("e.target ", e.target);
    /*here e.target represents the element on which event is going to occur
    here it is <input type="text" value="john"/>
    and e.target.value represents the value inside that current element on which element is occurred 
    ***/
    setfName(e.target.value);
  }
  function handlelname(e) {
    console.log("e.target ", e.target);
    /*here e.target represents the element on which event is going to occur
    here it is <input type="text" value="Doe"/>
    and e.target.value represents the value inside that current element on which element is occurred 
    ***/
    setlName(e.target.value);
  }
  return (
    <>
      <form>
        <label>First name:</label>
        <br />
        <input type="text" value={fname} onChange={handlefname} />
        <br />
        <label>Last name:</label>
        <br />
        <input type="text" value={lname} onChange={handlelname} />
      </form>
    </>
  );
}

export default ControlledForm;

/*In controlled component value is still treated as prop .Now we want to use it as state
and we can manage state in react by using the function given by useState with the help of event handler onchange
onChange handler returns an event object
*
*
*
*This is our controlled component.We are controlling our react form with the help of react
*Suppose here we have only two fields.If we had more fields and to edit change or manage all the fields
*we had to use onChange functionality and their corresponding event handler and for every event handler we had to
*define functions.So in order to prevent from this we can use only one event handler for all the input that is handlechange and inorder to recognize
*which input field to manipulate by handlechange we have attribute name we can put any value in name property that should be unique for every input field***/
