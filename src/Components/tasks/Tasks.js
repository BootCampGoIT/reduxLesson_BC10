import React from "react";
import TasksForm from "./tasksForm/TasksForm";
import TasksList from "./tasksList/TasksList";

const Tasks = () => {
 
  return (
    <section>
      <TasksForm  />
      <TasksList
      />
    </section>
  );
};

export default Tasks;


