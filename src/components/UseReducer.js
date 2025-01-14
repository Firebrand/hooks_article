import React, { useReducer } from "react";
import Header from "./misc/Header";

// Reducer function that handles all state updates for the task manager
// Takes current state and an action object, returns new state
function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      // Creates new state with task added to array and clears input
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        taskInput: "",
      };
    case "REMOVE_TASK":
      // Filters out task at specified index
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case "SET_INPUT":
      // Updates the input field value
      return {
        ...state,
        taskInput: action.payload,
      };
    default:
      return state;
  }
}

// Initial state structure for the task manager
const initialState = {
  tasks: [], // Array to store all tasks
  taskInput: "", // Tracks current input field value
};

function TaskManager() {
  // useReducer hook sets up state management
  // state: current state object
  // dispatch: function to send actions to reducer
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Event handlers that dispatch actions to the reducer
  const addTask = (e) => {
    e.preventDefault(); // Prevents form submission from refreshing page
    if (state.taskInput) {
      dispatch({ type: "ADD_TASK", payload: state.taskInput });
    }
  };

  const removeTask = (index) => {
    dispatch({ type: "REMOVE_TASK", payload: index });
  };

  const handleInputChange = (e) => {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
  };

  return (
    <div className="alx-component">
      <Header type="useReducer" />
      <form onSubmit={addTask}>
        <input
          type="text"
          value={state.taskInput}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
