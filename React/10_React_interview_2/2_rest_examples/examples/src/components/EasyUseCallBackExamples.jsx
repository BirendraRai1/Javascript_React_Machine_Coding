import React, { useCallback, useState } from "react";
import ChildOfCallBack from "./ChildOfCallBack";
/*Similar to useMemo useCallback is used to enhance performance of react application
 * The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function
 *
 *
 *
  since the child component ChildOfCallBack is inside the parent component
 * so when the page reloads for the first time the child component is also rendered which is perfect
* when we click on the addition button the child component is again rendered which is not ok since the addition
*button has no relation with the child component.So we can tell that we can optimize this performance
*by usememo
*
*
*
*
*
*Lets make a situation little bit complex now pass a props Learning into the child
*component ChildOfCallBack.so when the page reloads for the first time the child component is also rendered which is perfect
* when we click on the addition button the child component is again rendered which is not ok since the addition
*button has no relation with the child component although we have used useMemo hook .This is rerendered because in react there is a term
*called refrential equality.In refrential equality when the page gets reloaded all the function gets recreated.In the similar way Learning 
*function gets recreated and the child component assumes that the Learning function has been recreated so there might be some changes or this is new something
*Due to this child component gets rendered which is wrong .So in this case useCallback hook**********/

function EasyUseCallBackExamples() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  //   const Learning = () => {
  //     //some operation
  //     console.log("came inside Learning");
  //   };
  const Learning = useCallback(() => {
    //some operation
    //console.log("came inside Learning");
  }, [count]); //count dependency array indicates that this function to be called only when we update count
  return (
    <>
      <h1>Learning useCallback</h1>
      <ChildOfCallBack Learning={Learning} count={count} />
      <h1>Add:{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 2)}>Count</button>
    </>
  );
}

export default EasyUseCallBackExamples;
