import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editValue, setEditValue] = useState("");
  function handleSubmit() {
    setTaskArr([...taskArr, inputValue]);
    setInputValue("");
  }

  function editTask(id, newValue) {
    console.log("id and newValue is", id, newValue);
    let updatedTask = taskArr.map((task, Id) => {
      console.log("id==Id", id == Id);
      return id == Id ? newValue : task;
    });
    console.log("updatedTask is ", updatedTask);
    setTaskArr([...updatedTask]);
    setEditingTaskId(null);
    setEditValue("");
  }
  function deleteTask(id) {
    let task = taskArr.filter((task, Cid) => {
      console.log("id and task.id is ", id, Cid);
      return Cid != id;
    });
    console.log("task is ", task);
    setTaskArr([...task]);
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add List</button>
      <ul>
      {taskArr.map((task, id) => {
        return (
          
            <li key={id}>
              {editingTaskId == id ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => editTask(id, editValue)}>
                    ChangeValue
                  </button>
                </>
              ) : (
                task
              )}
              <button onClick={() => setEditingTaskId(id)}>Edit</button>
              <button onClick={() => deleteTask(id)}>Delete</button>
            </li>
        );
      })}
       </ul>
    </div>
  );
}

export default App;
