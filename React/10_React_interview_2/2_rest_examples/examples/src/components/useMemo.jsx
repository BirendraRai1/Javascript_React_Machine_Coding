/** 
* 1.performance in react code
    a) useMemo:is used to prevent repetition of time taking calculation
****/

import { useMemo } from "react";

const UseMemoConcept = ({ value }) => {
  const computeResult = () => {
    let futureTime = Date.now() + 10000;
    while (Date.now() < futureTime) {}
    console.log("data");
    return value * value;
  };

  //const cacheResult = computeResult(value);

  const cacheResult = useMemo(() => {
    return computeResult(value);
  }, [value]);
  /*Inside the useMemo we are going to have a callback and that function also takes another
   * argument that is value .It is exactly like memoize function in javascript it does calculation
   *for the first time computeResult and in the next time it gives the result.In this case it will be calculating result
   * only once and if someone tells to rerender it will not have
   * an issue
   ****/
  return (
    <>
      <div>Value:{value}</div>
      <div>Memoized value:{cacheResult}</div>
    </>
  );
};
export default UseMemoConcept;
