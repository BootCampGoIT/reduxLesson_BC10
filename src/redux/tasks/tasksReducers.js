import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addTasks, removeTask, setTaskStatus } from "./tasksActions";

const tasksListReducer = createReducer([], {
  [addTasks]: (state, action) => [...state, action.payload],
  [removeTask]: (state, action) =>
    state.filter((task) => task.id !== action.payload),
  [setTaskStatus]: (state, action) =>
    state.map((task) =>
      task.id === action.payload ? { ...task, done: !task.done } : task
    ),
});
const tasksLoaderReducer = createReducer(false, {});
export const tasksReducer = combineReducers({
  list: tasksListReducer,
  isLoading: tasksLoaderReducer,
});

// ========================== redux ====================
// import { combineReducers } from "redux";
// import { ADDTASK, REMOVETASK, SETTASKSTATUS } from "./tasksTypes";

// const tasksListReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADDTASK:
//       return [...state, action.payload];
//     case REMOVETASK:
//       return state.filter((task) => task.id !== action.payload);
//     case SETTASKSTATUS:
//       return state.map((task) =>
//         task.id === action.payload ? { ...task, done: !task.done } : task
//       );
//     default:
//       return state;
//   }
// };

// const constTasksLoaderReducer = (state = false, action) => {
//   return state;
// };

// export const tasksReducer = combineReducers({
//   list: tasksListReducer,
//   isLoading: constTasksLoaderReducer,
// });
