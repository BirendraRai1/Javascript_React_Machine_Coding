import React from "react";

function List(props) {
  const { tasksArr, handleDelete } = props;
  return (
    <div className="list">
      {/* This is how we render a list .The only purpose of react is to efficiently optimise dom.Browser is very bad at manipulating dom .That is why react came in .It will have an abstraction layer */}
      <ul>
        {tasksArr.map((task, idx) => {
          return (
            <li
              onClick={() => {
                handleDelete(idx);
              }}
              key={idx}
            >
              {task}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
