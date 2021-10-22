import React from "react";
import TaskListItem from "./taskListItem/TaskListItem";
import sprite from "../../../icons/sprite.svg";
import { TasksListContainer } from "./TasksListStyled";

const TasksList = ({ tasks, setStatus, remove, toggleForm }) => {
  return (
    <TasksListContainer>
      <li onClick={toggleForm} className='taskListItem taskListItemPlus'>
        <div className='taskListItemBorder taskListItemBorderPlus'>
          <svg className='taskListItemIcon'>
            <use href={sprite + "#icon-plus"} />
          </svg>
        </div>
      </li>
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          setStatus={setStatus}
          remove={remove}
        />
      ))}
    </TasksListContainer>
  );
};

export default TasksList;
