import axios from "axios";
import {
  addTasks,
  getTasks,
  removeTask,
  setError,
  setLoader,
  setTaskStatus,
} from "./tasksActions";

const addTaskOperation = (task) => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    const response = await axios.post(
      `https://schoology-fa20e-default-rtdb.firebaseio.com/tasks.json`,
      task
    );
    dispatch(addTasks({ ...task, id: response.data.name }));
  } catch (error) {
    dispatch(setError("Something went wrong!"));
  } finally {
    dispatch(setLoader());
  }
};
const getTasksOperation = () => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await axios.get(
      `https://schoology-fa20e-default-rtdb.firebaseio.com/tasks.json`
    );

    if (response.data) {
      const tasks = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getTasks(tasks));
    }
  } catch (error) {
    dispatch(setError("Something went wrong!"));
  } finally {
    dispatch(setLoader());
  }
};
const removeTasksOperation = (id) => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    await axios.delete(
      `https://schoology-fa20e-default-rtdb.firebaseio.com/tasks/${id}.json`
    );
    dispatch(removeTask(id));
  } catch (error) {
    dispatch(setError("Something went wrong!"));
  } finally {
    dispatch(setLoader());
  }
};

const setTaskStatusOperation = (task) => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    await axios.patch(
      `https://schoology-fa20e-default-rtdb.firebaseio.com/tasks/${task.id}.json`,
      { done: !task.done }
    );
    dispatch(setTaskStatus(task.id));
  } catch (error) {
    dispatch(setError("Something went wrong!"));
  } finally {
    dispatch(setLoader());
  }
};

export {
  addTaskOperation,
  getTasksOperation,
  removeTasksOperation,
  setTaskStatusOperation,
};
