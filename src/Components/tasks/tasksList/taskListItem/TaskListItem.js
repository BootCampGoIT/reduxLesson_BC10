import React from "react";

const TaskListItem = ({ task, setStatus, remove }) => {
  const removeItem = () => remove(task.id);
  const setItemStatus = () => setStatus(task);
  return (
    <li>
      <p>{task.taskName}</p>
      <p>{task.details}</p>
      <label>
        Done
        <input type='checkbox' checked={task.done} onChange={setItemStatus} />
      </label>
      <button type='button' onClick={removeItem}>
        Delete
      </button>
    </li>
  );
};

export default TaskListItem;
