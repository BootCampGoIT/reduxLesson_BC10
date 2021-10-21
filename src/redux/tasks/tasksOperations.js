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
  const localId = getState().authorization.tokens.localId;
  dispatch(setLoader());
  try {
    const response = await axios.post(
      `https://schoology-fa20e-default-rtdb.firebaseio.com/tasks/${localId}.json`,
      task
    );
    dispatch(addTasks({ ...task, id: response.data.name }));
  } catch (error) {
    dispatch(setError("Something went wrong!"));
  } finally {
    dispatch(setLoader());
  }
};
const getTasksOperation = () => async (dispatch, getState) => {
  const localId = getState().authorization.tokens.localId;
  const idToken = getState().authorization.tokens.idToken;
  dispatch(setLoader());
  try {
    const response = await axios.get(
      `https://schoology-fa20e-default-rtdb.firebaseio.com/tasks/${localId}.json?auth=${idToken}`
      // {
      //   headers: {
      //     Authorization: `Bearer ${idToken}`,
      //   },
      // }
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
  const localId = getState().authorization.tokens.localId;
  dispatch(setLoader());
  try {
    await axios.delete(
      `https://schoology-fa20e-default-rtdb.firebaseio.com/tasks/${localId}/${id}.json`
    );
    dispatch(removeTask(id));
  } catch (error) {
    dispatch(setError("Something went wrong!"));
  } finally {
    dispatch(setLoader());
  }
};

const setTaskStatusOperation = (task) => async (dispatch, getState) => {
  const localId = getState().authorization.tokens.localId;
  dispatch(setLoader());
  try {
    await axios.patch(
      `https://schoology-fa20e-default-rtdb.firebaseio.com/tasks/${localId}/${task.id}.json`,
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
