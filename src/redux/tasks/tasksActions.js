import { createAction, nanoid } from "@reduxjs/toolkit";
import {
  ADDTASK,
  GETTASKS,
  REMOVETASK,
  SETERROR,
  SETFILTER,
  SETLOADER,
  SETTASKSTATUS,
} from "./tasksTypes";

// ============= items ==================
const addTasks = createAction(ADDTASK, (task) => ({
  payload: task,
}));
const removeTask = createAction(REMOVETASK);
const setTaskStatus = createAction(SETTASKSTATUS);
const getTasks = createAction(GETTASKS);

// ================= loader ===================
const setLoader = createAction(SETLOADER);
const setError = createAction(SETERROR);
const setFilter = createAction(SETFILTER);
export {
  addTasks,
  removeTask,
  setTaskStatus,
  setLoader,
  setError,
  getTasks,
  setFilter,
};
