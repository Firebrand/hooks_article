import React, { useState, useEffect } from "react";

export default function Header({ type = "useState" }) {
  const headers = {
    useRef: {
      title: "useRef()",
      description: "Enter a task. The total task number will update, and focus is brought back to the entry field. We are using useRef to update the task count without causing a re-render and we are also using useRef to explicitly target the html input field and set focus to it after the user has added a task"
    },
    // Add more header types here
    useState: {
      title: "useState()",
      description: "Example of state management using the useState hook"
    },
    useEffect: {
      title: "useEffect()",
      description: "Enter tasks and then refresh the page, the tasks will persist. This is because we use useEffect when the component first mounts to fetch the tasks from localStorage. Then, every time the tasks are updated we use useEffect to save the updated list back to localStorage."
    },
    useContext: {
      title: "useContext()",
      description: "They are added to the list even though the input and list are 2 separate components and the functionality is handled two levels above those components"
    },
    useReducer: {
      title: "useReducer()",
      description: "Similar to the very first example, except instead of updating the state directly we dispatch actions that go to a reducer function which determines how to compute the next state"
    },
    useMemo: {
      title: "useMemo()",
      description: "Normally, every time you type a character in the text field, the component re-renders (because setTaskInput changes the state) and thus the map function that renders the task list is re-run every time. We can eliminate this unecessary re-render by memoizing the tasks.map function so that it only runs when the tasks array changes."
    },
    useCallback: {
      title: "useCallback()",
      description: "We are wrapping removeTask() in useCallback so it doesn't get recreated every time the component re-renders. We are also doing the same with addTask() but with limited functionality (because we need addTask to be recreated everytime the taskInput state is updated when we type in the input field)"
    },
    customHook: {
      title: "Custom Hook",
      description: "A custom hook is a function that uses other hooks and returns a value. In this case, we are using the useEffect hook to fetch the tasks from localStorage and then we are using the useState hook to store the tasks in state. We then return the tasks and a function to add a task to the list."
    },
    // ... you can add more header configurations as needed
  };

  const headerContent = headers[type] || headers.useState;

  return (
    <header>
      <h1>{headerContent.title}</h1>
      <p>{headerContent.description}</p>
    </header>
  );
}
