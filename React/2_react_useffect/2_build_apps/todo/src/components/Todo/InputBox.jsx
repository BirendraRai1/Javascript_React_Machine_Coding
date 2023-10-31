import React, { useState } from "react";

function InputBox(props) {
  let { addTask } = props;
  const [inputValue, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const addTaskChild = () => {
    //Here InputBox receives addTask as props and when it wants to talk to ToDo it will call addTask function and give inputValue as data and then ToDo will take away from there
    addTask(inputValue);
    setValue("");
  };
  // we have provide acces to taskArr -> task ARR
  return (
    <div className="inputbox">
      {/* here value is the keyword and inputValue is not a keyword */}
      <input type="text" value={inputValue} onChange={handleInput} />

      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;
