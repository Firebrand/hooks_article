import React, { useState, createContext } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
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

  return (
    <Context.Provider
      value={{ tasks, taskInput, setTaskInput, addTask, removeTask }}
    >
      {children}
    </Context.Provider>
  );
};
