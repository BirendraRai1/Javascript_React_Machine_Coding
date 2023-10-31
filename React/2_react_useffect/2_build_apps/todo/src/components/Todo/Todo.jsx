// rfce
import React, { useState } from "react";
import InputBox from "./InputBox";
import List from "./List";

function Todo() {
  const [tasksArr, setTasks] = useState([]);
  const addTask = (inputValue) => {
    const newTask = inputValue;
    // we will never mutate  a state variable on our own we will make a copy of it
    let newTaskArr = [...tasksArr, newTask];
    setTasks(newTaskArr);
  };
  const handleDelete = (idx) => {
    // console.log("handle Delete",idx);
    const filteredTasks = tasksArr.filter((task, cIdx) => {
      return cIdx != idx;
    });
    setTasks(filteredTasks);
  };

  return (
    // use case of react Fragments is it acts as a wrapper in that you can put out the content and when you attach it to the dom it will get removed
    <>
      {/* when we want children inputBox to talk to parent Todo we pass the function addTask in the props and inputBox receives in the props  */}
      <InputBox addTask={addTask}></InputBox>
      {/* when we want parent Todo to talk to children List we pass data as props tasksArr={tasksArr}*/}
      {/* when we want a task to be deleted from list the taskList array is hold by the parent ToDo so we have to communicate from child to parent in that case we have to pass a function as props handleDelete */}
      <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
    </>
  );
}
//rfce is the shortCut for creating the component
export default Todo;

/*Sometimes, you want the state of two components to always change together. 
To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. 
This is known as lifting state up, and it's one of the most common things you will do writing React code
********/
