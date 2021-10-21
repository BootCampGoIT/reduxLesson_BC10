// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

const tasksFilterSelector = (state) => state.tasks.filter; //""
const tasksListSelector = (state) => state.tasks.list; //[{},{}]
const tasksLoaderSelector = (state) => state.tasks.isLoading;
const tasksErrorSelector = (state) => state.tasks.error;

const tasksFilteredTasks = createSelector(
  [tasksListSelector, tasksFilterSelector],
  (tasks, filter) => {
    return tasks.filter((task) =>
      task.taskName.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export {
  tasksFilterSelector,
  tasksListSelector,
  tasksLoaderSelector,
  tasksErrorSelector,
  tasksFilteredTasks,
};

