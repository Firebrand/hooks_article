import { useState } from "react";

// Custom hook to manage tasks
export function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, task]);
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return { tasks, addTask, removeTask };
}