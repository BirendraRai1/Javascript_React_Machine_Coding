import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../../redux/slices/counterSlice";
//functions of counterSlice are exposed by counterSlice.actions property.actions keyword property is inbuilt
const actions = counterSlice.actions;
function Counter() {
  // This function useSelector is used to get the inital state
  const count = useSelector((store) => store.counterState.count);
  //or
  //const {count} = useSelector((store)=>store.counterState)

  // This is used to call any method from the reducer.Updation of state will be done by the dispatch
  const dispatch = useDispatch(); //this is the shop owner dispatch
  const handleIncrement = () => {
    console.log("increment will happen");
    // here it is used
    dispatch(actions.increment());
  };
  const handleDecrement = () => {
    console.log("decrement will happen", count);
    dispatch(actions.decrement());
  };
  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <h3>{count}</h3>
      <button onClick={handleDecrement} disabled={count == 0 ? true : false}>
        -
      </button>
    </>
  );
}

export default Counter;
