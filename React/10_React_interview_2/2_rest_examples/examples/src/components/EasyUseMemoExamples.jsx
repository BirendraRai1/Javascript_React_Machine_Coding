import React, { useMemo, useState } from "react";
/*What is useMemo and why to use it?
 *How to use Memo with examples
 *useMemo is used to increase the performance of application
 *In React application in one file we write many functions.There are some functions
 *which are unnecessarly being called every time which are not required due to which our application
 *performance goes down .So to prevent from this we have useMemo hook ***/

/*When we are clicking on addition button multiply function is running and it is ok because add is being updated
 *which is there also in multiply function add variable .When subtraction button is clicked multiply function is again
 *running which should not be because there is no relation between substraction and multiply .So this affects the performance
 *hence we will use the concept of useMemo********/
function EasyUseMemoExamples() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  //   function multiply() {
  //     console.log("*******************");
  //     return add * 10;
  //   }
  //Both calling of arrow function or normal function in case of multiply is multiply()
  const multiply = () => {
    console.log("*******************");
    return add * 10;
  };

  const multiplication = useMemo(() => {
    console.log("*******************");
    return add * 10;
  }, [add]); //This dependency array indicates that the function to be called when add variable is updated
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Learning useMemo</h1>
      {/* <p style={{ textAlign: "center" }}>Multiplication:{multiply()}</p> */}
      <p style={{ textAlign: "center" }}>Multiplication:{multiplication}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "2rem",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button onClick={() => setAdd(add + 1)}>Addition</button>
        <p>{add}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "2rem",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button onClick={() => setMinus(minus - 1)}>Substraction</button>
        <p>{minus}</p>
      </div>
    </>
  );
}

export default EasyUseMemoExamples;
