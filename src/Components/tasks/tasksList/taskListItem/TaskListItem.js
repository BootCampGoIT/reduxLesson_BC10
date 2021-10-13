import React from "react";
import { useDispatch } from "react-redux";
import {
  removeTask,
  setTaskStatus,
} from "../../../../redux/tasks/tasksActions";

const TaskListItem = ({ task }) => {
  const dispatch = useDispatch();
  const setStatus = () => dispatch(setTaskStatus(task.id));
  const remove = () => dispatch(removeTask(task.id));
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
