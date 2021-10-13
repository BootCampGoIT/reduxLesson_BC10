import React from "react";
import {useSelector } from "react-redux";
import TaskListItem from "./taskListItem/TaskListItem";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks.list);
  return (
    <ul>
      {tasks.map((task) => (
       <TaskListItem key={task.id} task={task}/>
      ))}
    </ul>
  );
};

export default TasksList;
