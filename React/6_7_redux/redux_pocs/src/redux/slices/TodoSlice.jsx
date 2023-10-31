// to create a slice -> redux;
//This is an example of synchronous redux
import { createSlice } from "@reduxjs/toolkit";
//1
const TodoSlice = createSlice({
  name: "toolbox",
  // intinal state value
  initialState: {
    value: "",
    todoList: [],
  },
  // functions to update your state
  reducers: {
    //the first value is state the next parameter whatever you pass is payload
    //The second object is the descriptor object we will get the data into the payload
    setValue: (state, descObj) => {
      console.log("I am set value", descObj.payload);
      state.value = descObj.payload;
    },
    addtask: (state, descObj) => {
      const task = descObj.payload;
      let newTaskArr = [...state.todoList, task];
      state.todoList = newTaskArr;
      state.value = "";
    },
  },
});

export default TodoSlice;
