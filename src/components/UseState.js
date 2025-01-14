// Import necessary dependencies from React
// useState is for managing state variables
import React, { useState } from "react";
// Import a custom Header component from a relative path
import Header from "./misc/Header";

// Define a functional component called TaskManager
function TaskManager() {
  // useState Hook: [currentValue, functionToUpdateValue]
  // Initialize tasks as an empty array to store our task items
  const [tasks, setTasks] = useState([]);
  // Initialize taskInput as an empty string to manage input field value
  const [taskInput, setTaskInput] = useState("");

  // Function to handle adding new tasks
  // Takes an event (e) as parameter to prevent default form submission
  const addTask = (e) => {
    e.preventDefault(); // Prevents page refresh on form submit
    if (taskInput) {
      // Only add task if input is not empty
      // Create new array with all existing tasks plus new task
      setTasks([...tasks, taskInput]);
      // Clear the input field after adding task
      setTaskInput("");
    }
  };

  // Function to handle removing tasks
  // Takes the index of the task to remove
  const removeTask = (index) => {
    // Filter out the task at the specified index
    // _ means we don't need the actual task value, just its index
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // The JSX that will be rendered
  return (
    // Main container with a custom class
    <div className="alx-component">
      {/* Custom Header component with type prop */}
      <Header type="useState" />

      {/* Form for task input with onSubmit handler */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // Update state on every keystroke
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* List of tasks */}
      <ul>
        {/* Map through tasks array to create list items */}
        {/* Each mapped item needs a unique 'key' prop for React's reconciliation */}
        {tasks.map((task, index) => (
          <li key={index}>
            {task} {/* Button to remove this specific task using its index */}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the component to be used in other parts of the application
export default TaskManager;
