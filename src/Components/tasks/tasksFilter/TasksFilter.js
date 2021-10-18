import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/tasks/tasksActions";

const TasksFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);
  const onHandleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };
  return <input type='text' onChange={onHandleChange} value={filter} />;
};

export default TasksFilter;
