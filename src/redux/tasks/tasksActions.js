import { createAction, nanoid } from "@reduxjs/toolkit";
import { ADDTASK, REMOVETASK, SETTASKSTATUS } from "./tasksTypes";

const addTasks = createAction(ADDTASK, (task) => ({
  payload: { ...task, id: nanoid() },
}));
const removeTask = createAction(REMOVETASK);
const setTaskStatus = createAction(SETTASKSTATUS);

export { addTasks, removeTask, setTaskStatus };

// ==================== redux ===================

// import { ADDTASK, REMOVETASK, SETTASKSTATUS } from "./tasksTypes";

// const addTasks = (task) => ({
//   type: ADDTASK,
//   payload: task,
// });

// const removeTask = (id) => ({ type: REMOVETASK, payload: id });
// const setTaskStatus = (id) => ({ type: SETTASKSTATUS, payload: id });

// export { addTasks, removeTask, setTaskStatus };

// const addTask = createAction(ADDTASK);
