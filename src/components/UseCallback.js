import React, { useState, useCallback, useRef, useEffect } from "react";
import Header from "./misc/Header";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // The add function will be recreated every time taskInput changes.
  // This is because if we left it [], it would be created only on component mount and the value of taskInput would always be what it was at that time of component mount (empty)
  // however, it will not be recreated is a task is removed
  const addTask = useCallback(
    (e) => {
      e.preventDefault(); // Prevent form submission refresh
      if (taskInput) {
        setTasks((prevTasks) => [...prevTasks, taskInput]);
        setTaskInput("");
      }
    },
    [taskInput]
  );

  // The remove function will be create just once - during component mount
  const removeTask = useCallback((index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }, []);

  useEffect(() => {
    console.log("removeTask function has been created!");
  }, [removeTask]);

  useEffect(() => {
    console.log("addTask function has been created!");
  }, [addTask]);

  return (
    <div className="alx-component">
      <Header type="useCallback" />
      <form onSubmit={addTask}>
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
