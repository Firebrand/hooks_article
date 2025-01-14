import React, { useState, useRef } from "react";
import Header from "./misc/Header";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const inputRef = useRef(null); // Ref for input element
  const taskCountRef = useRef(0); // Ref to persist data across rerenders

  const addTask = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
      taskCountRef.current += 1; // Update the persisted task count
      inputRef.current.focus(); // Focus the input field
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="alx-component">
      <Header type="useRef" />
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
          ref={inputRef}
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
      <p>Total tasks added: {taskCountRef.current}</p>{" "}
    </div>
  );
}

export default TaskManager;
