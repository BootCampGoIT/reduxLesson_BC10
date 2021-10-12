import React from "react";

const TasksList = ({ tasks, setTaskStatus, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <p>{task.taskName}</p>
          <p>{task.details}</p>
          <label>
            Done
            <input
              type='checkbox'
              checked={task.done}
              onChange={() => setTaskStatus(task.id)}
            />
          </label>
          <button type='button' onClick={() => removeTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
