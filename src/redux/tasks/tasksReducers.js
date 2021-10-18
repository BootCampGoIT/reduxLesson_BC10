import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addTasks,
  getTasks,
  removeTask,
  setError,
  setFilter,
  setLoader,
  setTaskStatus,
} from "./tasksActions";

const tasksListReducer = createReducer([], {
  [getTasks]: (_, action) => action.payload,
  [addTasks]: (state, action) => [...state, action.payload],
  [removeTask]: (state, action) =>
    state.filter((task) => task.id !== action.payload),
  [setTaskStatus]: (state, action) =>
    state.map((task) =>
      task.id === action.payload ? { ...task, done: !task.done } : task
    ),
});

const tasksLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const errorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
});

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

export const tasksReducer = combineReducers({
  list: tasksListReducer,
  isLoading: tasksLoaderReducer,
  error: errorReducer,
  filter: filterReducer,
});
