import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext([]);

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  return (
    <TaskContext.Provider
      value={{
        task,
        addTask: newTask => setTask([...task, newTask]),
        clearTask: () => setTask([]),
        removeTask: taskId => setTask(task.filter((item) => item.taskId !== taskId)),
        }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);