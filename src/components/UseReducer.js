import React, { useReducer } from "react";
import Header from "./misc/Header";

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        taskInput: "",
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case "SET_INPUT":
      return {
        ...state,
        taskInput: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  tasks: [],
  taskInput: "",
};

function TaskManager() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (e) => {
    e.preventDefault();
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
