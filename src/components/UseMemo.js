import React, { useState, useMemo } from "react";
import Header from "./misc/Header";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Handles adding new tasks to the list
  // Prevents empty tasks from being added
  const addTask = (e) => {
    e.preventDefault(); // Prevents form submission from refreshing the page
    if (taskInput) {
      setTasks([...tasks, taskInput]); // Creates new array with existing tasks plus new task
      setTaskInput(""); // Clears the input field after adding
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // useMemo optimization:
  // Memoizes (caches) the task list rendering to prevent unnecessary re-renders
  // Only recalculates when the 'tasks' array changes, not on every component re-render
  // (otherwise it would run every time a key is pressed in the textfield too)
  const taskList = useMemo(() => {
    console.log("Task list recalculated");
    return tasks.map((task, index) => (
      <li key={index}>
        {task} <button onClick={() => removeTask(index)}>Remove</button>
      </li>
    ));
  }, [tasks]); // Dependency array - only recalculate when 'tasks' changes

  return (
    <div className="alx-component">
      <Header type="useMemo" />
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>{taskList}</ul>
    </div>
  );
}

export default TaskManager;
