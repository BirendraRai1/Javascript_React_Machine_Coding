import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoSlice from "../../redux/slices/TodoSlice";
const actions = TodoSlice.actions;
function TodoRedux() {
  const { value, todoList } = useSelector((store) => {
    return store.todoState;
  });
  const dispatch = useDispatch();
  // Then create Bussiness logic
  const handleChange = (e) => {
    const updatedVal = e.target.value;
    dispatch(actions.setValue(updatedVal));
  };

  const handleAddTask = () => {
    dispatch(actions.addtask(value));
  };
  // First create UI
  return (
    <>
      <h2>Todo</h2>
      <div>
        <div className="inputBox">
          <input type="text" value={value} onChange={handleChange} />
          <button onClick={handleAddTask}>Submit</button>
        </div>
        <div className="list">
          <ul>
            {todoList.map((task, idx) => {
              return <li key={idx}>{task}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoRedux;
