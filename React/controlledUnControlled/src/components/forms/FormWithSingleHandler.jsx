import React, { useState } from "react";

function FormWithSingleHandler() {
  const [fname, setfName] = useState("john");
  const [lname, setlName] = useState("Doe");
  function handleChange(e) {
    console.log("e.target.name", e.target.name);
    if (e.target.name == "firstName") {
      setfName(e.target.fname);
    } else {
      setlName(e.target.lname);
    }
  }
  return (
    <>
      <form>
        <label>First name:</label>
        <br />
        <input
          type="text"
          value={fname}
          name="firstName"
          onChange={handleChange}
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          type="text"
          value={lname}
          name="lastName"
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default FormWithSingleHandler;
