import React from "react";
import TaskListItem from "./taskListItem/TaskListItem";

const TasksList = ({ tasks, setStatus, remove }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          setStatus={setStatus}
          remove={remove}
        />
      ))}
    </ul>
  );
};

export default TasksList;
