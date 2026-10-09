import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext(null);

function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, { ...action.payload, id: Date.now(), completed: false }];
    case "UPDATE_TASK":
      return tasks.map((task) => (task.id === action.payload.id ? action.payload : task));
    case "TOGGLE_TASK":
      return tasks.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task);
    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.payload);
    default:
      return tasks;
  }
}

function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  function addTask(task) {
    dispatch({ type: "ADD_TASK", payload: task });
  }

  function updateTask(task) {
    dispatch({ type: "UPDATE_TASK", payload: task });
  }

  function toggleTask(taskId) {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  }

  function deleteTask(taskId) {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export default TaskProvider;
