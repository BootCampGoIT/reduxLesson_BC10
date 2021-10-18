import React from "react";
import { useDispatch } from "react-redux";
import {
  removeTasksOperation,
  setTaskStatusOperation,
} from "../../../../redux/tasks/tasksOperations";

const TaskListItem = ({ task }) => {
  const dispatch = useDispatch();
  const setStatus = () => dispatch(setTaskStatusOperation(task));
  const remove = () => dispatch(removeTasksOperation(task.id));
  return (
    <li>
      <p>{task.taskName}</p>
      <p>{task.details}</p>
      <label>
        Done
        <input type='checkbox' checked={task.done} onChange={setStatus} />
      </label>
      <button type='button' onClick={remove}>
        Delete
      </button>
    </li>
  );
};

export default TaskListItem;
