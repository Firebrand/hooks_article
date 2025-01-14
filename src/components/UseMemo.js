import React, { useState, useMemo } from "react";
import Header from "./misc/Header";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Only run tasks.map when the tasks value changes (otherwise it will run every time a key is pressed in the textfield too)
  const taskList = useMemo(() => {
    console.log("Task list recalculated");
    return tasks.map((task, index) => (
      <li key={index}>
        {task} <button onClick={() => removeTask(index)}>Remove</button>
      </li>
    ));
  }, [tasks]);


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
