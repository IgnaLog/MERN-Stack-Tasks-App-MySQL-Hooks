import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskContextProvider");
  }
  return context;
};
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasksRequest();
    setTasks(res.data);
  };
  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
      // setTasks([...tasks, res.data]);
    } catch (error) {
      console.log(error);
    }
  };
  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = async (id, newFields) => {
    try {
      await updateTaskRequest(id, newFields);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done == 0 ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id == id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
