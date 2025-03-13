import { createContext, useContext, useState } from "react";

const TaskContext = createContext();
export const TasksProvider = ({ children }) => {
  const [isLogin, setIslogin] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setIsloading] = useState(false);
  const addtask = (newtask) => {
    setTasks((prevtask) => [...prevtask, newtask]);
  };

  const login = () => {
    setIslogin(true);
  };

  const updateTask = (taskId, taskdata) => {
    setTasks((prevtask) =>
      prevtask.map((task) =>
        task.id === Number(taskId)
          ? {
              ...task,
              title: taskdata.title,
              startTime: taskdata.startTime,
              endTime: taskdata.endTime,
            }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addtask,
        setTasks,
        loading,
        setIsloading,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
