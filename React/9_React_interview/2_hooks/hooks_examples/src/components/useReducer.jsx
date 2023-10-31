import React, { useReducer } from "react";

/***
 * useReducer has nothing to do with redux.It has similar syntax to redux
 * The problem with useState is it is usually used to set one kind of state
 * * have all the state management logic of a componet at one place using reducer
 * * there no quirk of prev state as mentioned in useStateExamples
 * * you get only one dispatch function to make all the state mutation
 * */
// useReducer is used to deal with complex state variables.In layman terms useReducer is superpowered useState
function CounterUseReducer() {
  const intialState = 0; //firstly you have to define initialState
  // reducer takes all the possible state mutation
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "IncrementByFive":
        return state + 5;
      case "DecrementByFive":
        return state - 5;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <div style={{ color: "white" }}> {count} </div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("IncrementByFive");
        }}
      >
        {" "}
        +five{" "}
      </button>
      <button
        onClick={() => {
          dispatch("DecrementByFive");
        }}
      >
        {" "}
        -five{" "}
      </button>
    </>
  );
}

export default CounterUseReducer;
