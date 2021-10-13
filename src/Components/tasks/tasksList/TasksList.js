import React from "react";
import { removeTask, setTaskStatus } from "../../../redux/tasks/tasksActions";
import { useDispatch, useSelector } from "react-redux";



const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  // const isLoading = useSelector((state) => state.tasks.isLoading);
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
              onChange={() => dispatch(setTaskStatus(task.id))}
            />
          </label>
          <button type='button' onClick={() => dispatch(removeTask(task.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
