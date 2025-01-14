import React, { useState, useEffect } from "react";

export default function Header({ type = "useState" }) {
  const headers = {
    useRef: {
      title: "useRef()",
      description:
        "Enter a task. The total task number will update, and focus is brought back to the entry field. We are using useRef to update the task count without causing a re-render and we are also using useRef to explicitly target the html input field and set focus to it after the user has added a task",
    },
    // Add more header types here
    useState: {
      title: "useState()",
      description:
        "The useState() hook essentially gives your component short term 'memory' (a.k.a state). In this example we are using useState() so the component can keep in its memory the tasks we've entered",
    },
    useEffect: {
      title: "useEffect()",
      description:
        "Enter tasks and then refresh the page, the tasks will persist. This is because we use useEffect when the component first mounts to fetch the tasks from localStorage. Then, every time the tasks are updated we use useEffect again to save the updated list back to localStorage.",
    },
    useContext: {
      title: "useContext()",
      description:
        "Tasks are added to the list even though the input and list are 2 separate components and the functionality is handled two levels above those components",
    },
    useReducer: {
      title: "useReducer()",
      description:
        "Similar to the very first example, except instead of updating the state directly we dispatch actions that go to a reducer function which determines how to compute the next state",
    },
    useMemo: {
      title: "useMemo()",
      description:
        "Normally, every time you type a character in the text field, the component re-renders (because setTaskInput changes the state) and thus the map function that renders the task list is re-run every time. We can eliminate this unecessary re-render by memoizing the tasks.map function so that it only runs when the tasks array changes.",
    },
    useCallback: {
      title: "useCallback()",
      description:
        "We are wrapping removeTask() in useCallback so it doesn't get recreated every time the component re-renders. We are also doing the same with addTask() but with limited functionality (because we need addTask to be recreated everytime the taskInput state is updated when we type in the input field)",
    },
    customHook: {
      title: "Custom Hook",
      description:
        "We can also create our own hooks. A custom hook is just a function that uses other hooks. Here we are delegating all the task management to one custom hook called useTasks()",
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
