import React, { useState } from "react";
import Header from "./misc/Header";
import { useTasks } from "./hooks/useTasks";

function TaskManager() {
  const { tasks, addTask, removeTask } = useTasks();
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(taskInput);
    setTaskInput("");
  };

  return (
    <div className="alx-component">
      <Header type="customHook" />
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
