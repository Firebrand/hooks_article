import React, { useContext } from "react";
import { Context } from "../../context/Context";

function TaskInput() {
  const { taskInput, setTaskInput, addTask } = useContext(Context);

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button>Add Task</button>
    </form>
  );
}

export default TaskInput;
