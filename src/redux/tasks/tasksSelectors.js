// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

const tasksFilterSelector = (state) => state.tasks.filter; //""
const tasksListSelector = (state) => state.tasks.list; //[{},{}]
const tasksLoaderSelector = (state) => state.tasks.isLoading;
const tasksErrorSelector = (state) => state.tasks.error;

const tasksFilteredTasks = createSelector(
  [tasksListSelector, tasksFilterSelector],
  (tasks, filter) => {
    // for (let i = 0; i < 1000000000; i += 1) {}
    return tasks.filter((task) =>
      task.taskName.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// const tasksFilteredTasks = (state) =>
//   tasksListSelector(state).filter((task) =>
//     task.taskName
//       .toLowerCase()
//       .includes(tasksFilterSelector(state).toLowerCase())
//   );

// const tasksFilteredTasks = (state) => {
//   for (let i = 0; i < 1000000000; i += 1) {}
//   return state.tasks.list.filter((task) =>
//     task.taskName.toLowerCase().includes(state.tasks.filter.toLowerCase())
//   );
// };

export {
  tasksFilterSelector,
  tasksListSelector,
  tasksLoaderSelector,
  tasksErrorSelector,
  tasksFilteredTasks,
};

const getResult = (a, b) => {
  for (let i = 0; i < 1000000000; i += 1) {}
  return a + b;
};

console.log(getResult(5, 10));
console.log(getResult(5, 10)); //15
console.log(getResult(5, 10)); //15
