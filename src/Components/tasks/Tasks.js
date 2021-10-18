import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasksOperation } from "../../redux/tasks/tasksOperations";
import TasksFilter from "./tasksFilter/TasksFilter";
import TasksForm from "./tasksForm/TasksForm";
import TasksList from "./tasksList/TasksList";

const Tasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksOperation());
  }, [dispatch]);

  return (
    <section>
      <TasksForm />
      <TasksFilter />
      <TasksList />
    </section>
  );
};

export default Tasks;
