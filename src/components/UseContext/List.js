import React, { useContext } from "react";
import { Context } from "../../context/Context";

function TaskList() {
  const { tasks, removeTask } = useContext(Context);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => removeTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
