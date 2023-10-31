import React, { useState, useEffect } from "react";

function UseEffectCleanup() {
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const setTask = function () {
    // /
    let newTaskList = [...taskList];
    newTaskList.push({
      id: Date.now(),
      task: value,
    });
    setTaskList(newTaskList);
    setValue("");
  };
  const removeTask = function (id) {
    let restOftasks = taskList.filter(function (taskObject) {
      return taskObject.id != id;
    });
    setTaskList(restOftasks);
  };

  function firstCb() {
    console.log("first useEffect");
  }
  //In this page focus on cleanUp function
  function secondCb() {
    console.log("second useEffect");
    return function () {
      console.log("cleanup for useffect without dependency array");
    };
  }
  /*From the thirdCb function we have to return the function for the cleanUp function and that will act as the cleanUp function
    
    */
  function thirdCb() {
    console.log("third useEffect");
    return function () {
      console.log("cleanup for useffect with TaskList Dependency");
    };
  }
  // 1st version -> only it's cb fn only once after first render
  // useEffect(firstCb, []);
  /**
   * 2nd version -> it's cb fn is called after every render and re-render
   * cleanup function : it is called just before the next useEffect call
   */

  useEffect(secondCb);
  /**
   * 3rd version ->
   * it's callback function is called after render and after the element changes it's value inside  the dependecy array
   * cleanup fn : It is called just before the next useEffect call .The returned callBack function is first called before the nextUseEffect call .
   * check with the code execution
   * */
  //useEffect(thirdCb, [taskList]);
  console.log("render");

  return (
    <>
      <div>
        {/* input */}
        <input
          type="text"
          placeholder="Input Task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button onClick={setTask}>Add Task </button>
      </div>

      {/* list  */}
      {taskList.map((taskObj) => {
        return (
          <Task
            key={taskObj.id}
            id={taskObj.id}
            task={taskObj.task}
            removeTask={removeTask}
          ></Task>
        );
      })}
    </>
  );
}
function Task(props) {
  let { id, task, removeTask } = props;
  function firstCb() {
    console.log("first useEffect inside the task");
    return function () {
      console.log("Cleanup called for empty depedency");
    };
  }
  useEffect(firstCb, []);
  //firstCb cleanUp will be called only when the task is destroyed that is when we are deleteing the task from the taskList
  return (
    <li
      onClick={() => {
        removeTask(id);
      }}
    >
      {task}
    </li>
  );
}
export default UseEffectCleanup;

/***
 * UseEffect:-It is made to be called after render
 * 1. callback is called once in the liftime -> useEffect(fn,[])
 *      cleanup :-Its cleanUp is called after component is removed from UI
 *      usecase : on page first Load data fetching  
 * 2. callback is called n number of times in the liftime -> useEffect (fn);
 *      usecase : autosave 5sec 
 *          cleanup :-Its cleanUp will happen before next Useffect call
 * 3. callback is called if dependecy updates number of time in the lifetime -> useEffect (fn,[dp1,dep2])
 *          cleanup -> before next Useffect call
 *          usecase : Resizing of window
 * 
 
 * */

/***
 * why we were getting error when we were using normal async await at the top level of useEffect.
 * Since async await returns a promise .When we are using promise at the top level we will be not getting cleanup function rather a promise that we dont want.
 * That is why it was giving warning if you want to give a function and you are giving promise then i will not be able to clean up
 * ***/

/***
 * Take an example of a hotel room .You have a room .You have some guest they are stayed a while
 * before giving room to some one else you will clean up the room same happens in the third and
 * second useEffect that is useEffect(secondCb) and useEffect(thirdCb, [taskList]);
 * for the empty dependency one that is for useEffect(firstCb, []); it will be only called once it is just
 * like the room that someOne has occupied once and no one is occupying so its cleanup will only be called when the room is
 * destroyed
 *
 *
 *
 * ***/
