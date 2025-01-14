import React, { useState, useRef } from "react";
import Header from "./misc/Header";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // useRef hooks:
  // - inputRef: References the DOM input element for direct manipulation
  // - taskCountRef: Persists the total count between renders
  const inputRef = useRef(null);
  const taskCountRef = useRef(0);

  // Handles adding new tasks to the list
  const addTask = (e) => {
    e.preventDefault();
    if (taskInput) {
      // Add new task to the array using spread operator to maintain immutability
      setTasks([...tasks, taskInput]);
      setTaskInput(""); // Clear the input field
      taskCountRef.current += 1; // Increment total task count (persists across rerenders)
      inputRef.current.focus(); // Automatically focus the input field after adding
    }
  };

  // Removes a task by filtering out the task at the specified index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    // Note: We don't decrement taskCountRef as it tracks total tasks ever added
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
          ref={inputRef} // Connects the input element to our inputRef
        />
        <button type="submit">Add Task</button>
      </form>

      {/* List of tasks with remove buttons */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Displays total number of tasks ever added, not current count */}
      <p>Total tasks added: {taskCountRef.current}</p>
    </div>
  );
}

export default TaskManager;
