import React from "react";

const TaskListItem = ({ task, setStatus, remove }) => {
  const removeItem = () => remove(task.id);
  const setItemStatus = () => setStatus(task);
  return (
    <li className='taskListItem'>
      <div className='taskListItemBorder'>
        <p>
          <span className='taskListItemTitle'>TASK:</span> {task.taskName}
        </p>
        <p>
          <span className='taskListItemTitle'>DETAILS:</span> {task.details}
        </p>
        <label className='taskListItemLabelDone'>
          <span className='taskListItemTitle'>DONE:</span>
          <input type='checkbox' checked={task.done} onChange={setItemStatus} />
        </label>
        <button type='button' onClick={removeItem}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
