import React from "react";
import { useSelector } from "react-redux";
import TaskListItem from "./taskListItem/TaskListItem";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const filter = useSelector((state) => state.tasks.filter);
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);

  const getFilteredTasks = () =>
    tasks.filter((task) =>
      task.taskName.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      {isLoading && <h2>...loading</h2>}
      {error && <h2>{error}</h2>}
      <ul>
        {getFilteredTasks().map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TasksList;
